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
                            <v-text-field v-model="form.motor_name" :rules="[rules.required]"
                                :error-messages="errors.motor_name" label="Motor Name"></v-text-field>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.slug" :rules="[rules.required]" :error-messages="errors.slug"
                                label="Slug"></v-text-field>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0">
                            <v-autocomplete
                                v-model="form.other_selections"
                                density="compact"
                                item-text="name"
                                item-value="id"
                                label="Select Categories"
                                hide-details
                                :items="categories"
                                multiple
                                :rules="[rules.required]"
                            ></v-autocomplete>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0" >
                            <v-select
                                :items="dropdownClasses.product.Motorgroup"
                                item-text="value"
                                item-value="id"
                                label="Select Motor"
                                required
                                v-model="form.motorgroup_id"
                             
                            ></v-select>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0" >
                            <v-select
                                :items="dropdownClasses.product.Framesize"
                                item-text="value"
                                item-value="id"
                                label="Select FrameSize"
                                required
                                v-model="form.framesize_id"
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0" >
                            <v-select
                                :items="dropdownClasses.product.Horsepower"
                                item-text="value"
                                item-value="id"
                                label="Select HorsePower"
                                required
                                v-model="form.horsepower_id"
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0" >
                            <v-select
                                :items="dropdownClasses.product.Speed"
                                item-text="value"
                                item-value="id"
                                label="Select Speed"
                                required
                                v-model="form.speed_id"
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0" >
                            <v-select
                                :items="dropdownClasses.product.Voltage"
                                item-text="value"
                                item-value="id"
                                label="Select Voltage"
                                required
                                v-model="form.voltage_id"
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.price" :rules="[rules.required]"
                                :error-messages="errors.price" label="Price"></v-text-field>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.multiplier_code" 
                                :error-messages="errors.multiplier_code" label="Multiplier Code"></v-text-field>
                        </v-col>

                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.mounting" 
                                :error-messages="errors.mounting" label="Mounting"></v-text-field>
                        </v-col>

                        <!-- <v-col cols="3" sm="3" class="pb-0">
                            <v-checkbox v-model="form.is_active" :label="`Published?`"></v-checkbox>
                        </v-col> -->

                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input v-model="form.image_2d_drwaing" :error-messages="errors.image_2d_drwaing"
                                label="2d Drawing"></v-file-input>
                        </v-col>

                        <v-col v-if="form.id > 0 && form.image_url_2d_drawing" cols="12" class="pb-0">
                            <v-btn 
                                :href="form.image_url_2d_drawing" 
                                target="_blank" 
                                class="mb-2" 
                                color="primary"
                            >
                                View
                            </v-btn>
                        </v-col>

                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input accept="image/*" v-model="form.image_3d_drwaing" :error-messages="errors.image_3d_drwaing"
                                label="3d Drawing"></v-file-input>
                        </v-col>

                        <v-col v-if="form.id > 0 && form.image_url_3d_drawing" cols="12" class="pb-0">
                            <v-btn 
                                :href="form.image_url_3d_drawing" 
                                target="_blank" 
                                class="mb-2" 
                                color="primary"
                            >
                                View
                            </v-btn>
                        </v-col>

                        <v-col cols="12" cm="12" class="pb-0">
                            <v-file-input v-model="form.image_data_sheet" :error-messages="errors.image_data_sheet"
                                label="Data Sheet"></v-file-input>
                        </v-col>

                        <v-col v-if="form.id > 0 && form.image_url_datasheet" cols="12" class="pb-0">
                            <v-btn 
                                :href="form.image_url_datasheet" 
                                target="_blank" 
                                class="mb-2" 
                                color="primary"
                            >
                                View
                            </v-btn>
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
const brandservice = new service('productmanagment')
import otherrequestservice from "@services/auth/otherrequests";


export default {
    name: "auth.products.add",
    watch: {
    },
    async mounted() {
        this.dropdownClasses = await otherrequestservice.get('getdropdownsvalues').then(e=>e.data)
        console.log(this.dropdownClasses);
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            console.log(res);
            this.initialCategory = (res.parent_id?res.parent_id:0)
            this.form = {
                motorgroup_id: (res.motorgroup_id ? res.motorgroup_id : ''),
                framesize_id: (res.framesize_id ? res.framesize_id : ''),
                horsepower_id: (res.horsepower_id ? res.horsepower_id : ''),
                speed_id: (res.speed_id ? res.speed_id : ''),
                voltage_id: (res.voltage_id ? res.voltage_id : ''),
                price: (res.price ? res.price : ''),
                multiplier_code: (res.multiplier_code ? res.multiplier_code : ''),
                mounting: (res.mounting ? res.mounting : ''),
                motor_name: (res.motor_name ? res.motor_name : ''),
                motor_name: (res.slug ? res.slug : ''),
                slug: (res.slug ? res.slug : ''),
                other_selections: (res.category_ids? JSON.parse(res.category_ids):[]),
                image_url_2d_drawing: res.image_url,
                image_url_3d_drawing: res.image_url_three_drawing,
                image_url_datasheet: res.image_url_datasheet,
                id: this.$route.params.id,
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.products.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
        } else {
            this.bread.push({
                text: "Add",
                to: { name: "auth.products.add" },
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
                formdata.append("motorgroup_id", this.form.motorgroup_id);
                formdata.append("framesize_id", this.form.framesize_id);
                formdata.append("horsepower_id", this.form.horsepower_id);
                formdata.append("speed_id", this.form.speed_id);
                formdata.append("voltage_id", this.form.voltage_id);
                formdata.append("price", this.form.price);
                formdata.append("multiplier_code", this.form.multiplier_code);
                formdata.append("mounting", this.form.mounting);
                formdata.append("motor_name", this.form.motor_name);
                formdata.append("slug", this.form.motor_name);
                formdata.append('category_ids', JSON.stringify(this.form.other_selections))
                if (this.form.image_2d_drwaing) {
                    formdata.append("image_2d_drwaing", this.form.image_2d_drwaing);
                }
                if (this.form.image_3d_drwaing) {
                    formdata.append("image_3d_drwaing", this.form.image_3d_drwaing);
                }
                if (this.form.image_data_sheet) {
                    formdata.append("image_data_sheet", this.form.image_data_sheet);
                }
                this.btnloading = false;
                if (this.form.id > 0) {
                    var res = await brandservice.update(formdata, this.form.id)
                } else {
                    var res = await brandservice.create(formdata)
                }
                if (!res.status) {
                    if (res.data.motorgroup_id) {
                        this.errors.motorgroup_id = res.data.motorgroup_id;
                    }
                    if (res.data.framesize_id) {
                        this.errors.framesize_id = res.data.framesize_id;
                    }
                    if (res.data.horsepower_id) {
                        this.errors.horsepower_id = res.data.horsepower_id;
                    }
                    if (res.data.speed_id) {
                        this.errors.speed_id = res.data.speed_id;
                    }
                    if (res.data.voltage_id) {
                        this.errors.voltage_id = res.data.voltage_id;
                    }
                    if (res.data.price) {
                        this.errors.price = res.data.price;
                    }
                    if (res.data.multiplier_code) {
                        this.errors.multiplier_code = res.data.multiplier_code;
                    }
                    if (res.data.mounting) {
                        this.errors.mounting = res.data.mounting;
                    }
                    if (res.data.motor_name) {
                        this.errors.motor_name = res.data.motor_name;
                    }
                    if (res.data.category_ids) {
                        this.errors.category_ids = res.data.category_ids;
                    }
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.products.listing" });
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
            dropdownClasses: [],
            initialCategory: 0,
            categories: [
                { id: '3', name: 'Farm Duty' },
                { id: '4', name: 'Crusher Duty' },
                { id: '5', name: 'Washdown' },
                { id: '6', name: 'Phase Converter Motor' },
                { id: '7', name: 'Premium JM-JP' },
                { id: '8', name: 'EPAct JM-JP' },
                { id: '9', name: 'Oil Pump' },
                { id: '10', name: 'PM DC Motor' },
                { id: '11', name: 'Cobra Single Phase Aluminum' },
                { id: '12', name: 'Stainless Steel' },
                { id: '13', name: 'IEEE 841' },
                { id: '14', name: 'Aerator' },
                { id: '16', name: '(GX3) Three Phase Aluminum' },
                { id: '17', name: 'Three Phase Cast Iron' },
                { id: '18', name: 'Three Phase Open Enclosure' },
                { id: '19', name: 'Metric IEC' },
                { id: '20', name: 'Cobra' },
                { id: '22', name: 'Constant Velocity Fan Kit' },
                { id: '25', name: 'Mobile Apps' },
                { id: '27', name: 'Inventory by Location' },
            ],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                motorgroup_id: '',
                framesize_id: '',
                horsepower_id: '',
                speed_id: '',
                voltage_id: '',
                price: '',
                multiplier_code: '',
                mounting: '',
                motor_name: '',
                slug: '',
                category_ids: '',
                other_selections: [],
                image_2d_drwaing: undefined,
                image_url_2d_drawing : '',
                image_3d_drwaing: undefined,
                image_url_3d_drawing : '',
                image_data_sheet: undefined,
                image_url_datasheet : '',
            },
            errors: {
                motorgroup_id: [],
                framesize_id: [],
                horsepower_id: [],
                speed_id: [],
                voltage_id: [],
                price: [],
                multiplier_code: [],
                mounting: [],
                motor_name: [],
                category_ids: [],
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
                    text: "Product",
                    to: { name: "auth.products.listing" },
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