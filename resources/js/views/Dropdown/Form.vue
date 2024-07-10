<template>
    <div class="elevation-10">
        <v-breadcrumbs :items="bread">
            <template v-slot:divider>
                <v-icon>mdi-forward</v-icon>
            </template>
        </v-breadcrumbs>
        <v-row no-gutters class="pa-10 rounded">
            <v-col cols="12" sm="12">
                <v-form ref="form" v-model="loading" lazy-validation>
                    <v-row>
                        
                    
                        <v-col cols="6" sm="6" class="pb-0" >
                            <v-select
                                :items="categories"
                                item-text="name"
                                item-value="id"
                                label="Select Variant"
                                required
                                v-model="form.title"
                            ></v-select>
                            <!-- <h6 >You cannot edit or change a parent category to a subcategory, or vice versa, after it has been created.</h6> -->
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.value" :error-messages="errors.name" label="Value"></v-text-field>
                        </v-col>


                        <v-col cols="3" sm="3" class="pb-0">
                            <v-checkbox v-model="form.is_active" :label="`Published?`"></v-checkbox>
                        </v-col>
                      
                 
                        
                        <v-col cols="12" sm="12" class="pb-0">
                            <v-btn color="secondary" elevation="1" large raised @click="addpermission" :loading="btnloading"
                                :disabled="btnloading">{{ form.id > 0 ? 'Update' : 'Add' }}</v-btn>
                        </v-col>

                    </v-row>

                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import service from "@services/auth/default";
const brandservice = new service('dropdowns')
import otherrequestservice from "@services/auth/otherrequests";

export default {
    name: "auth.dropdowns.add",
    watch: {
    },
    async mounted() {
        
        
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.initialCategory = (res.parent_id?res.parent_id:0)
            this.form = {
                title: (res.title ? res.title : ''),
                value: (res.value ? res.value : ''),
                is_active: (res.is_active == 1 ? true : false),
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.dropdowns.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.dropdowns.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                name: [],
                value: [],
                is_active: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("title", this.form.title);
                formdata.append("value", this.form.value);
                formdata.append("is_active", (this.form.is_active == true ? 1 : 0));
                this.btnloading = false;
                if (this.form.id > 0) {
                    var res = await brandservice.update(formdata, this.form.id)
                } else {
                    var res = await brandservice.create(formdata)
                }
                if (!res.status) {
                    if (res.data.title) {
                        this.errors.name = res.data.name
                    }
                    if (res.data.value) {
                        this.errors.value = res.data.value
                    }
                    if (res.data.is_active) {
                        this.errors.is_active = res.data.is_active
                    }
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.dropdowns.listing" });
                }
            }
        },
        updateValudCategory(e){
            this.form.parent_id = e
        }
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
    },
    data() {
        return {
            initialCategory: 0,
            categories: [
                { id: 'Motorgroup', name: 'MotorGroup' },
                { id: 'Framesize', name: 'FrameSize' },
                { id: 'Horsepower', name: 'HorsePower' },
                { id: 'Speed', name: 'Speed' },
                { id: 'Voltage', name: 'Voltage' },
            ],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                title: '',
                value: '',
                is_active: true,
            },
            errors: {
                title: [],
                value: [],
                is_active: [],
            },
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Dropdown",
                    to: { name: "auth.dropdowns.listing" },
                    disabled: false,
                    exact: true,
                }
            ],
            loading: false,
            btnloading: false,
            rules: {
                required: (value) => !!value || "Required.",
            },
        };
    },
};
</script>