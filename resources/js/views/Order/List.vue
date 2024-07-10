<template>
    <div class="elevation-10">
      <v-row no-gutters>
        <v-breadcrumbs :items="bread">
          <template v-slot:divider>
            <v-icon>mdi-forward</v-icon>
          </template>
        </v-breadcrumbs>
      </v-row>
      <v-row no-gutters class="pa-10 rounded">
        <v-col cols="12" sm="12">
          <v-data-table
            :headers="headers"
            :items="items"
            :options.sync="options"
            :server-items-length="totalRecords"
            :loading="loading"
          >
            <template v-slot:top>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="search"
                    label="Search"
                    class="mx-4"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                      :items="orderStatuses"
                      item-text="text"
                      item-value="id"
                      label="Order Status"
                      v-model="currentStatus"
                      class="mx-4"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                      :items="paymentStatuses"
                      item-text="text"
                      item-value="id"
                      label="Payment Status"
                      v-model="paymentStatus"
                      class="mx-4"
                  ></v-select>
                </v-col>
                <v-col>
                  <v-dialog
                    ref="dialog"
                    v-model="fromMenu"
                    :return-value.sync="fromDate"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="fromDate"
                        label="From Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        clearable
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="fromDate"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="fromMenu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(fromDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col>
                  <v-dialog
                    ref="tdialog"
                    v-model="toMenu"
                    :return-value.sync="toDate"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="toDate"
                        label="To Date"
                        clearable
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="toDate"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="toMenu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.tdialog.save(toDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-row>
            </template>
            <template v-slot:item.image_url="{ item }">
                <v-avatar>
                    <v-img
                        :lazy-src="item.image_url"
                        max-height="150"
                        max-width="250"
                        :src="item.image_url"
                    ></v-img>
                </v-avatar>
            </template>
            <template v-slot:item.product_name="{ item }">
                {{item.product_name}} - 
                {{item.visa_type_description}}
            </template>
            <template v-slot:item.total_amount="{ item }">
                {{item.currency.toUpperCase()}} 
                {{parseFloat(item.total_amount).toFixed(2)}}
            </template>
            <template v-slot:item.is_seen="{ item }">
                <v-chip v-if="item.is_seen==0" class="ma-2" color="red" text-color="white" small>
                    No
                </v-chip>
                <v-chip v-else class="ma-2" color="green" text-color="white" small>
                    Yes
                </v-chip>
            </template>
            <template v-slot:item.order_status="{ item }">
                <v-chip v-if="item.order_status==0" class="ma-2" color="orange" text-color="white" small>
                    Pending
                </v-chip>
                <v-chip v-if="item.order_status==1" class="ma-2" color="blue" text-color="white" small>
                  Seen
                </v-chip>
                <v-chip v-if="item.order_status==2" class="ma-2" color="primary" text-color="white" small>
                  In Progress
                </v-chip>
                <v-chip v-if="item.order_status==3" class="ma-2" color="green" text-color="white" small>
                  Approved
                </v-chip>
                <v-chip v-if="item.order_status==4" class="ma-2" color="pink" text-color="white" small>
                  Delivered
                </v-chip>
                <v-chip v-if="item.order_status==5" class="ma-2" color="teal" text-color="white" small>
                  Paid
                </v-chip>
                <v-chip v-if="item.order_status==6" class="ma-2" color="error" text-color="white" small>
                  Payment Failed
                </v-chip>
            </template>
            <template v-slot:item.payment_status="{ item }">
                <v-chip v-if="item.payment_status=='unpaid'" class="ma-2" color="orange" text-color="white" small>
                  Not Paid
                </v-chip>
                <v-chip v-if="item.payment_status=='paid'" class="ma-2" color="teal" text-color="white" small>
                  Paid
                </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn
                    color="error"
                    fab
                    x-small
                    dark
                    @click="deleteuser(item.id)"
                >
                    <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              <v-btn v-if="item.order_status==6" color="warning" fab x-small dark @click="paymentLink(item.id)">
                <v-icon>mdi-form-dropdown</v-icon>
              </v-btn>
              <v-btn
                color="info"
                fab
                x-small
                dark
                :to="{ name: 'auth.orders.view', params: { id: item.id } }"
              >
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
  </template>
  <script>
  import Swal from "sweetalert2";
  import service from "@services/auth/default";
  const brandservice = new service('orders')
  export default {
    name: "auth.orders.listing",
    data() {
      return {
        search: "",
        fromDate: '',
        fromMenu: false,
        toDate: '',
        toMenu: false,
        currentStatus: -1,
        paymentStatus: -1,
        paymentStatuses: [
          {
            id: -1,
            text: 'All'
          },
          {
            id: 0,
            text: 'Not Paid'
          },
          {
            id: 1,
            text: 'Paid'
          },
        ],
        orderStatuses: [
            {
                id: -1,
                text: 'All',
            },
            {
                id: 0,
                text: 'Pending',
            },
            {
                id: 1,
                text: 'Seen',
            },
            {
                id: 2,
                text: 'In Progress',
            },
            {
                id: 3,
                text: 'Approved',
            },
            {
                id: 4,
                text: 'Delivered',
            },
            {
                id: 5,
                text: 'Paid',
            },
            {
                id: 6,
                text: 'Payment Failed',
            },
        ],
        bread: [
          {
            text: "Dashboard",
            to: { name: "auth.dashboard" },
            disabled: false,
            exact: true,
          },
          {
            text: "Orders",
            to: { name: "auth.orders.listing" },
            disabled: false,
            exact: true,
          },
        ],
        items: [],
        loading: true,
        totalRecords: 0,
        options: {},
        headers: [
          {
            text: "ID",
            align: "start",
            sortable: true,
            value: "order_number",
          },
          {
            text: "Total",
            align: "start",
            sortable: true,
            value: "total_amount",
          },
          {
            text: "Country",
            align: "start",
            sortable: true,
            value: "country",
          },
          {
            text: "Status",
            align: "start",
            sortable: true,
            value: "order_status",
          },
          {
            text: "Payment Status",
            align: "start",
            sortable: true,
            value: "payment_status",
          },
          {
            text: "Date",
            align: "start",
            sortable: true,
            value: "created_at_formatted",
          },
          { text: "Actions", value: "actions", sortable: false },
        ],
      };
    },
    computed: {
      dateRangeText () {
        return this.dateRange.join(' ~ ')
      },
    },
    mounted() {
      this.getDataFromApi();
    },
    methods: {
      paymentLink(id){
        var url = process.env.MIX_BASE_URL+'/thankyou-order/payment/'+id
        window.prompt("Terminal URL", url);
      },
      deleteuser: async function (id) {
        const isConfirmed = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            return true;
          }
        });
        if (isConfirmed) {
          await brandservice.delete({
            id: id,
          });
          Swal.fire("Deleted!", "Your record has been deleted.", "success");
          this.getDataFromApi();
        }
      },
      async getDataFromApi() {
        var data = await this.fakeApiCall();
        this.items = data.data;
        try {
          this.totalRecords = data.meta.total;
        } catch (ex) {
          //this.totalRecords=0
        }
        this.loading = false;
      },
      fakeApiCall() {
        this.loading = true;
        // this.items = []
        var query = "";
        var page = this.options.page;
        query += "?page=" + page;
        if (this.options.sortBy.length > 0) {
          query += "&sortCol=" + this.options.sortBy[0];
        }
        if (this.options.sortDesc.length > 0) {
          //if 1 then by desc else asc
          query += "&sortByDesc=" + (this.options.sortDesc[0] == true ? 1 : 0);
        }
        query += "&perpage=" + this.options.itemsPerPage;
        if (this.search != "") {
          query += "&search=" + this.search;
        }
        if(this.currentStatus>=0){
          query+='&order_status='+this.currentStatus
        }
        if(this.paymentStatus>=0){
          query+='&payment_status='+this.paymentStatus
        }
        if(this.fromDate){
          query+='&from_date='+this.fromDate
        }
        if(this.toDate){
          query+='&to_date='+this.toDate
        }
        return brandservice.getlist(query);
      },
    },
    watch: {
      options: {
        handler() {
          this.getDataFromApi();
        },
        deep: true,
      },
      search() {
        this.getDataFromApi();
      },
      $route() {
        this.getDataFromApi();
      },
      perpage() {
        this.getDataFromApi();
      },
      currentStatus(){
        this.getDataFromApi();
      },
      paymentStatus(){
        this.getDataFromApi();
      },
      fromDate(){
        this.getDataFromApi();
      },
      toDate(){
        this.getDataFromApi();
      },
    },
  };
  </script>