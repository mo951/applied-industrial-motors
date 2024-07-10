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
                            <v-text-field v-model="form.email" :error-messages="errors.email" label="Email" :rules="[rules.required]" ></v-text-field>
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
const brandservice = new service('newsletters')
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "auth.newsletters.add",
    watch: {
    },
    async mounted() {
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.form = {
                email: (res.email ? res.email : ''),
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.newsletters.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.newsletters.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                email: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("email", this.form.email);
                this.btnloading = false;
                if (this.form.id > 0) {
                    var res = await brandservice.update(formdata, this.form.id)
                } else {
                    var res = await brandservice.create(formdata)
                }
                if (!res.status) {
                    if (res.data.email) {
                        this.errors.email = res.data.email
                    }
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.newsletters.listing" });
                }
            }
        },
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
    },
    data() {
        return {
            editor: ClassicEditor,
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                email: '',
            },
            errors: {
                email: [],
            },
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Newsletters",
                    to: { name: "auth.newsletters.listing" },
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