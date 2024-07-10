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
                            <v-text-field v-model="form.name" :error-messages="errors.name" label="Name"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.slug" :rules="[rules.required]" :error-messages="errors.slug"
                                label="Slug"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0" v-if="!form.id || form.parent_id[0] != 0">
                            <!-- <h3>Select Parent</h3> -->
                            <!-- <v-treeview
                                @update:active="updateValudCategory"
                                hoverable
                                shaped
                                activatable
                                color="red"
                                :items="categories"
                                :active="form.parent_id"
                            ></v-treeview> -->
                            <v-select
                                :items="categories"
                                item-text="name"
                                item-value="id"
                                label="Select Parent"
                                required
                                v-model="form.parent_id[0]"
                            ></v-select>
                            <h6 >You cannot edit or change a parent category to a subcategory, or vice versa, after it has been created.</h6>
                        </v-col>
                        <v-col cols="3" sm="3" class="pb-0">
                            <v-checkbox v-model="form.is_active" :label="`Published?`"></v-checkbox>
                        </v-col>
                        <v-col cols="3" sm="3" class="pb-0">
                            <v-checkbox v-model="form.is_featured" :label="`Featured`"></v-checkbox>
                        </v-col>
                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input accept="image/*" v-model="form.image" :error-messages="errors.image"
                                label="Image"></v-file-input>
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
const brandservice = new service('categories')
import otherrequestservice from "@services/auth/otherrequests";

export default {
    name: "auth.categories.add",
    watch: {
    },
    async mounted() {
        const categories = await brandservice.getlist('').then(e=>e.data)
        this.categories = [{
            id: 0,
            name: 'No Parent',
            children: [],
        },...categories]
        
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.initialCategory = (res.parent_id?res.parent_id:0)
            this.form = {
                name: (res.name ? res.name : ''),
                slug: (res.slug ? res.slug : ''),
                parent_id: [(res.parent_id?res.parent_id:0)],
                image_url: res.image_url,
                is_active: (res.is_active == 1 ? true : false),
                is_featured: (res.is_featured == 1 ? true : false),
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.categories.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.categories.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                name: [],
                slug: [],
                is_active: [],
                is_featured: [],
                image: [],
                parent_id: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("name", this.form.name);
                formdata.append("slug", this.form.slug);
                // formdata.append("parent_id", this.form.parent_id[0]);
                formdata.append("parent_id", this.form.parent_id);
                formdata.append("is_active", (this.form.is_active == true ? 1 : 0));
                formdata.append("is_featured", (this.form.is_featured == true ? 1 : 0));
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
                    if (res.data.slug) {
                        this.errors.slug = res.data.slug
                    }
                    if (res.data.is_active) {
                        this.errors.is_active = res.data.is_active
                    }
                    if (res.data.is_featured) {
                        this.errors.is_featured = res.data.is_featured
                    }
                    if (res.data.image) {
                        this.errors.image = res.data.image
                    }
                    //errors here
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.categories.listing" });
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
            categories: [],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                name: '',
                slug: '',
                parent_id: [0],
                image_url: '',
                is_active: true,
                is_featured: true,
                image: undefined,
            },
            errors: {
                name: [],
                slug: [],
                image: [],
                is_active: [],
                is_featured: [],
                parent_id: [],
            },
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Categories",
                    to: { name: "auth.categories.listing" },
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