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
                            <v-text-field v-model="form.standard_features_heading" :error-messages="errors.standard_features_heading" label="Heading" :rules="[rules.required]" ></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select
                            v-model="form.categories"
                            :error-messages="errors.categories"
                            multiple
                            item-text="name"
                            item-value="id"
                            :items="categories"
                            label="Select Categories"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <label>Standard Features</label>
                            <v-alert
                                outlined
                                type="error"
                                v-if="errors.standard_features.length>0"
                            >
                            {{errors.standard_features[0]}}
                            </v-alert>
                            <ckeditor
                                :editor="editor"
                                v-model="form.standard_features"
                                :error-messages="errors.standard_features"
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
                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input v-model="form.part_number_image" :error-messages="errors.part_number_image"
                                label="Part Image"></v-file-input>
                        </v-col>
                        <v-col v-if="form.id > 0 && form.part_number_image_url" cols="12" cm="12" class="pb-0">
                            <v-avatar>
                                <v-img :lazy-src="form.part_number_image_url" max-height="150" max-width="250"
                                    :src="form.part_number_image_url"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input v-model="form.right_image" :error-messages="errors.right_image"
                                label="Right Image"></v-file-input>
                        </v-col>
                        <v-col v-if="form.id > 0 && form.right_image_url" cols="12" cm="12" class="pb-0">
                            <v-avatar>
                                <v-img :lazy-src="form.right_image_url" max-height="150" max-width="250"
                                    :src="form.right_image_url"></v-img>
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
const brandservice = new service('tabs')
const categoryservice = new service('categories')
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "auth.tabs.add",
    watch: {
    },
    async mounted() {
        this.categories = await categoryservice.getlist('').then(e=>e.data)
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            this.form = {
                downloadable_id: (res.downloadable_id ? res.downloadable_id : ''),
                image_url: res.image_url,
                part_number_image_url: res.part_number_image_url,
                right_image_url: res.right_image_url,
                id: this.$route.params.id,
                standard_features_heading: res.standard_features_heading,
                standard_features: res.standard_features,
                categories: [],
            }
            for(let i = 0; i < res.categories.length; i++){
                this.form.categories.push(res.categories[i].category_id)
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.tabs.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.tabs.add" },
                disabled: false,
                exact: true,
            })
        }
    },
    methods: {
        resetError() {
            this.errors = {
                standard_features: [],
                standard_features_heading: [],
                image: [],
                part_number_image: [],
                right_image: [],
                categories: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("standard_features", this.form.standard_features);
                formdata.append("standard_features_heading", this.form.standard_features_heading);
                for(let i = 0; i < this.form.categories.length; i++){
                    formdata.append("categories["+i+"]", this.form.categories[i]);
                }
                if (this.form.image) {
                    formdata.append("image", this.form.image);
                }
                if (this.form.part_number_image) {
                    formdata.append("part_number_image", this.form.part_number_image);
                }
                if (this.form.right_image) {
                    formdata.append("right_image", this.form.right_image);
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
                    if(res.data.standard_features){
                        this.errors.standard_features = res.data.standard_features
                    }
                    if(res.data.standard_features_heading){
                        this.errors.standard_features_heading = res.data.standard_features_heading
                    }
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.tabs.listing" });
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
            categories: [],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                standard_features: '',
                standard_features_heading: '',
                image_url: '',
                part_number_image_url: '',
                right_image_url: '',
                image: undefined,
                part_number_image: undefined,
                right_image: undefined,
                categories: [],
            },
            errors: {
                standard_features: [],
                standard_features_heading: [],
                image: [],
                part_number_image: [],
                right_image: [],
                categories: [],
            },
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Tabs",
                    to: { name: "auth.tabs.listing" },
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