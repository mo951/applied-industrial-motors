<template>
    <div>
      <v-row no-gutters>
        <v-breadcrumbs :items="bread">
          <template v-slot:divider>
            <v-icon>mdi-forward</v-icon>
          </template>
        </v-breadcrumbs>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="items"
        :options.sync="options"
        :server-items-length="totalRecords"
        :loading="loading"
        class="elevation-1"
        show-expand
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>

        <template v-slot:expanded-item="{ item }">
            <td :colspan="headers.length">
                <v-data-table
                :headers="subHeaders"
                :items="item.children"
                item-key="name"
                hide-default-footer
                style="background-color: teal;"
                >
                <template v-slot:item.actions="{ item }">
                    <v-btn
                        color="info"
                        fab
                        x-small
                        dark
                        :to="{ name: 'auth.dropdowns.edit', params: { id: item.id } }"
                    >
                        <v-icon>mdi-pencil-plus</v-icon>
                    </v-btn>
                    <v-btn color="error" fab x-small dark @click="deleteuser(item.id)">
                        <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                </template>
                </v-data-table>
            </td>
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
        <template v-slot:item.actions="{ item }">
          <v-btn
            color="info"
            fab
            x-small
            dark
            :to="{ name: 'auth.dropdowns.edit', params: { id: item.id } }"
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
  const brandservice = new service('dropdowns')
  export default {
    name: "auth.dropdowns.listing",
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
            text: "Dropdowns",
            to: { name: "auth.dropdowns.listing" },
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
            value: "id",
          },
          {
            text: "Title",
            align: "start",
            sortable: false,
            value: "title"
          },
          {
            text: "Value",
            align: "start",
            sortable: true,
            value: "value",
          },
          { text: "Actions", value: "actions", sortable: false },
        ],
        subHeaders: [
        {
            text: "ID",
            align: "start",
            sortable: true,
            value: "id",
          },
          {
            text: "Title",
            align: "start",
            sortable: false,
            value: "title"
          },
          {
            text: "Value",
            align: "start",
            sortable: true,
            value: "value",
          },
          { text: "Actions", value: "actions", sortable: false },
        ],
        // categories: [
        //     {
        //     name: 'Category 1',
        //     description: 'Description for Category 1',
        //     subcategories: [
        //         { name: 'Subcategory 1.1', description: 'Description for Subcategory 1.1' },
        //         { name: 'Subcategory 1.2', description: 'Description for Subcategory 1.2' },
        //     ],
        //     },
        //     {
        //     name: 'Category 2',
        //     description: 'Description for Category 2',
        //     subcategories: [
        //         { name: 'Subcategory 2.1', description: 'Description for Subcategory 2.1' },
        //         { name: 'Subcategory 2.2', description: 'Description for Subcategory 2.2' },
        //     ],
        //     },
        // ],
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
          const delt = await brandservice.delete({
            id: id,
          });
          if(delt.status == 'error'){
            Swal.fire("Not Deleted!", delt.msg , "error");
          }
          else{
            Swal.fire("Deleted!", "Your record has been deleted.", "success");
            this.getDataFromApi();
          }
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