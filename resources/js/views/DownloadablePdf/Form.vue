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
                            <v-select
                                :items="downloadables"
                                item-text="name"
                                item-value="id"
                                label="Type*"
                                required
                                v-model="form.downloadable_id"
                                :error-messages="errors.downloadable_id"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input accept="image/*" v-model="form.image" :error-messages="errors.image"
                                label="Main Image"></v-file-input>
                        </v-col>
                        <v-col v-if="form.id > 0 && form.image_url" cols="12" cm="12" class="pb-0">
                            <v-avatar>
                                <v-img :lazy-src="form.image_url" max-height="150" max-width="250"
                                    :src="form.image_url"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input v-model="form.pdf" :error-messages="errors.pdf"
                                label="PDF"></v-file-input>
                        </v-col>
                        <v-col v-if="form.id > 0 && form.pdf_url" cols="12" cm="12" class="pb-0">
                            <v-avatar>
                                <v-img :lazy-src="form.pdf_url" max-height="150" max-width="250"
                                    :src="form.pdf_url"></v-img>
                            </v-avatar>
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
const brandservice = new service('downloadable-pdfs')
const childervice = new service('downloadables')
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "auth.downloadablespdfs.add",
    watch: {
    },
    async mounted() {
        childervice.getlist('').then(e=>{
            this.downloadables = e.data
        })
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.form = {
                downloadable_id: (res.downloadable_id ? res.downloadable_id : ''),
                image_url: res.image_url,
                pdf_url: res.pdf_url,
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.downloadablespdfs.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.downloadablespdfs.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                downloadable_id: [],
                image: [],
                pdf: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("downloadable_id", this.form.downloadable_id);
                if (this.form.image) {
                    formdata.append("image", this.form.image);
                }
                if (this.form.pdf) {
                    formdata.append("pdf", this.form.pdf);
                }
                this.btnloading = false;
                if (this.form.id > 0) {
                    var res = await brandservice.update(formdata, this.form.id)
                } else {
                    var res = await brandservice.create(formdata)
                }
                if (!res.status) {
                    if (res.data.name) {
                        this.errors.name = res.data.name
                    }
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.downloadablespdfs.listing" });
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
            downloadables: [],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                downloadable_id: '',
                image_url: '',
                pdf_url: '',
                image: undefined,
                pdf: undefined,
            },
            errors: {
                downloadable_id: [],
                image: [],
                pdf: [],
            },
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Downloadable PDF",
                    to: { name: "auth.downloadablespdfs.listing" },
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