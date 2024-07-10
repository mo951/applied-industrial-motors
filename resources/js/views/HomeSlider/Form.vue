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
const brandservice = new service('home-sliders')
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "auth.homesliders.add",
    watch: {
    },
    async mounted() {
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.form = {
                description: (res.description ? res.description : ''),
                image_url: res.image_url,
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.homesliders.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.homesliders.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                description: [],
                image: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("description", this.form.description);
                if (this.form.image) {
                    formdata.append("image", this.form.image);
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
                    this.$router.push({ name: "auth.homesliders.listing" });
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
            types: [],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                description: '',
                image_url: '',
                image: undefined,
            },
            errors: {
                name: [],
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
                    text: "Home Sliders",
                    to: { name: "auth.homesliders.listing" },
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