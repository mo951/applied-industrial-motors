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
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.title" :error-messages="errors.title" label="Title" ></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.slug" :rules="[rules.required]" :error-messages="errors.slug"
                                label="Slug" hint="Must be a Unique slug"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <v-textarea v-model="form.short_description" :error-messages="errors.short_description"
                                label="Short Description" ></v-textarea>
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
const brandservice = new service('blogs')
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "auth.blogs.add",
    watch: {
    },
    async mounted() {
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.form = {
                title: (res.title ? res.title : ''),
                slug: (res.slug ? res.slug : ''),
                short_description: (res.short_description ? res.short_description : ''),
                description: (res.description ? res.description : ''),
                image_url: res.image_url,
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.blogs.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.blogs.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                title: [],
                slug: [],
                short_description: [],
                description: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("title", this.form.title);
                formdata.append("slug", this.form.slug);
                formdata.append("short_description", this.form.short_description);
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
                    if (res.data.title) {
                        this.errors.title = res.data.title
                    }
                    if (res.data.slug) {
                        this.errors.slug = res.data.slug
                    }
                    if (res.data.short_description) {
                        this.errors.short_description = res.data.short_description
                    }
                    if (res.data.description) {
                        this.errors.description = res.data.description
                    }
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.blogs.listing" });
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
                title: '',
                slug: '',
                description: '',
                short_description: '',
                image_url: '',
                image: undefined,
            },
            errors: {
                title: [],
                slug: [],
                short_description: [],
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
                    text: "Blogs",
                    to: { name: "auth.blogs.listing" },
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