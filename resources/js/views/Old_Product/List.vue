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
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:item.product_name="{ item }">
          {{ item.product_name }}
        </template>
        <template v-slot:item.is_active="{ item }">
            <v-chip v-if="item.is_active==0" class="ma-2" color="red" text-color="white" small>
                No
            </v-chip>
            <v-chip v-else class="ma-2" color="green" text-color="white" small>
                Yes
            </v-chip>
        </template>
        <template v-slot:item.type="{ item }">
          {{ item.type==1?'Variational':'Normal' }}
        </template>
        <template v-slot:item.actions="{ item }">
          <!-- <v-btn color="success" fab x-small dark > -->
          <v-btn color="success" fab x-small dark @click="duplicate(item.id)">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
          <v-btn
            color="info"
            fab
            x-small
            dark
            :to="{ name: 'auth.products.edit', params: { id: item.id } }"
          >
            <v-icon>mdi-pencil-plus</v-icon>
          </v-btn>
          <v-btn color="error" fab x-small dark @click="deleteuser(item.id)">
            <v-icon>mdi-delete-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </template>
  <script>
  import Swal from "sweetalert2";
  import service from "@services/auth/default";
  const brandservice = new service('products')
  import otherrequestservice from "@services/auth/otherrequests";
  export default {
    name: "auth.products.listing",
    data() {
      return {
        search: "",
        bread: [
          {
            text: "Dashboard",
            to: { name: "auth.dashboard" },
            disabled: false,
            exact: true,
          },
          {
            text: "Products",
            to: { name: "auth.products.listing" },
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
            text: "Name",
            align: "start",
            sortable: true,
            value: "product_name",
          },
          {
            text: "Type",
            align: "start",
            sortable: true,
            value: "type",
          },
          {
            text: "Published?",
            align: "start",
            sortable: true,
            value: "is_active",
          },
          { text: "Actions", value: "actions", sortable: false },
        ],
      };
    },
    watch: {
      $route() {
        this.getDataFromApi();
      },
      perpage() {
        this.getDataFromApi();
      },
      options: {
        handler() {
          this.getDataFromApi();
        },
        deep: true,
      },
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
          title: "Are you sure you want to delete selected products? ",
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
          await otherrequestservice.post('deleteall/products', this.selected)
          Swal.fire("Deleted!", "Your record has been deleted.", "success");
          this.getDataFromApi();
        }
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
      duplicate: async function (id) {
        const isConfirmed = await Swal.fire({
          title: "Are you sure?",
          text: "You want to duplicate this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, duplicate it!",
        }).then((result) => {
          if (result.isConfirmed) {
            return true;
          }
        });
        if (isConfirmed) {
          await otherrequestservice.get('duplicate/products/'+id)
          Swal.fire("Duplicated!", "Your record has been deuplicated.", "success");
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
    },
  };
  </script>