<template>
    <div>
      <v-row no-gutters>
        <v-breadcrumbs :items="bread">
          <template v-slot:divider>
            <v-icon>mdi-forward</v-icon>
          </template>
        </v-breadcrumbs>
      </v-row>

      <v-row no-gutters class="px-5">
        <v-btn color="error" dark @click="deleteAll">
            Delete
        </v-btn>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="items"
        :options.sync="options"
        :server-items-length="totalRecords"
        :loading="loading"
        class="elevation-1"
        show-select
        @input="selectAll"
      >
        <template v-slot:top>
          <v-row class="mx-2">
            <v-col>
              <v-text-field
                v-model="search"
                label="Search"
              ></v-text-field>
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
        <template v-slot:item.actions="{ item }">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="info" fab x-small dark @click="viewMessage(item)">
                <v-icon>mdi-eye</v-icon>
            </v-btn>
            </template>
            <span>View Message</span>
        </v-tooltip>
            <v-btn
                color="error"
                fab
                x-small
                dark
                @click="deleteuser(item.id)"
            >
                <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
        </template>
      </v-data-table>
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-dialog
            transition="dialog-top-transition"
            max-width="600"
            v-model="msgModal"
          >
            <template>
              <v-card>
                <v-toolbar color="primary" dark>Inquiry #{{ selectedItem.id }} | Message</v-toolbar>
                <v-card-text>
                  <v-row class="pa-2">
                    <v-col>
                      <v-simple-table class="elevation-1">
                        <template v-slot:default>
                            <tbody>
                              <tr>
                                <!-- <td>Message:</td> -->
                                <td style="white-space: pre-wrap;">{{ selectedItem.message }}</td>
                              </tr>
                            </tbody>
                          </template>
                      </v-simple-table>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn
                    text
                    @click="msgModal = false"
                  >Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
  </template>
  <script>
  import Swal from "sweetalert2";
  import service from "@services/auth/default";
  const brandservice = new service('inquiries')
  import otherrequestservice from "@services/auth/otherrequests";
  export default {
    name: "auth.inquiries.listing",
    data() {
      return {
        msgModal: false,
        selectedItem: {},
        search: "",
        fromDate: '',
        fromMenu: false,
        toDate: '',
        toMenu: false,
        bread: [
          {
            text: "Dashboard",
            to: { name: "auth.dashboard" },
            disabled: false,
            exact: true,
          },
          {
            text: "Inquiries",
            to: { name: "auth.inquiries.listing" },
            disabled: false,
            exact: true,
          },
        ],
        items: [],
        selected: [],
        loading: true,
        totalRecords: 0,
        options: {},
        headers: [
          {
            text: "ID",
            align: "start",
            sortable: true,
            value: "id",
          },
          {
            text: "First Name",
            align: "start",
            sortable: false,
            value: "first_name"
          },
          {
            text: "Last Name",
            align: "start",
            sortable: true,
            value: "last_name",
          },
          {
            text: "Phone",
            align: "start",
            sortable: true,
            value: "phone",
          },
          {
            text: "Email",
            align: "start",
            sortable: true,
            value: "email",
          },
        //   {
        //     text: "Page Path",
        //     align: "start",
        //     sortable: true,
        //     value: "inquiry_uri",
        //   },
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
      
    },
    mounted() {
      this.getDataFromApi();
    },
    methods: {
      selectAll(e){
        this.select = [];
        if(e.length > 0){
          this.selected = e.map(val => val.id)
        }
      },
      async deleteAll(){
        const isConfirmed = await Swal.fire({
          title: "Are you sure you want to delete selected inquiries? ",
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
          await otherrequestservice.post('deleteall/inquiries', this.selected)
          Swal.fire("Deleted!", "Your record has been deleted.", "success");
          this.getDataFromApi();
        }
      },
    viewMessage(item){
        this.msgModal = true
        this.selectedItem = item
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
      fromDate(){
        this.getDataFromApi();
      },
      toDate(){
        this.getDataFromApi();
      },
    },
  };
  </script>