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
                        <v-col cols="12" sm="12" class="pb-0">
                            <v-text-field v-model="form.title" :error-messages="errors.title" label="Title" :rules="[rules.required]" ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <v-select
                                :items="contactStates"
                                label="State*"
                                required
                                v-model="form.state"
                                :error-messages="errors.state"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <label>Description</label>
                            <v-alert
                                outlined
                                type="error"
                                v-if="errors.description.length>0"
                            >
                            {{errors.description[0]}}
                            </v-alert>
                            <ckeditor
                                :editor="editor"
                                v-model="form.description"
                                :error-messages="errors.description"
                                :config="{}"
                            ></ckeditor>
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
const brandservice = new service('contact-lists')
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "auth.contactlist.add",
    watch: {
    },
    async mounted() {
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.form = {
                description: (res.description ? res.description : ''),
                title: (res.title ? res.title : ''),
                state: (res.state ? res.state : ''),
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.contactlist.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.contactlist.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                description: [],
                title: [],
                state: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("title", this.form.title);
                formdata.append("description", this.form.description);
                formdata.append("state", this.form.state);
                this.btnloading = false;
                if (this.form.id > 0) {
                    var res = await brandservice.update(formdata, this.form.id)
                } else {
                    var res = await brandservice.create(formdata)
                }
                if (!res.status) {
                    if (res.data.title) {
                        this.errors.title = res.data.title
                    }
                    if (res.data.description) {
                        this.errors.description = res.data.description
                    }
                    if (res.data.state) {
                        this.errors.state = res.data.state
                    }
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.contactlist.listing" });
                }
            }
        },
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
        contactStates() {
            return this.$store.getters.getContactStates;
        },
    },
    data() {
        return {
            editor: ClassicEditor,
            types: [],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                description: '',
                title: '',
                state: '',
            },
            errors: {
                title: [],
                state: [],
                description: [],
            },
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Contact Lists",
                    to: { name: "auth.contactlist.listing" },
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