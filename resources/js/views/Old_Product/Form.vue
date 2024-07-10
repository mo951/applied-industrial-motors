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
                            <v-text-field v-model="form.product_name" :rules="[rules.required]"
                                :error-messages="errors.product_name" label="Name"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.product_slug" :rules="[rules.required]"
                                :error-messages="errors.product_slug" label="Slug"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.price" :rules="[rules.required]"
                                :error-messages="errors.price" label="Price"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-text-field v-model="form.discount" 
                                :error-messages="errors.discount" label="Discount %"></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <!-- <v-select
                                :items="otherProducts"
                                item-text="product_name"
                                item-value="id"
                                label="Select Similar Products"
                                multiple
                                required
                                v-model="form.other_selections"
                                :error-messages="errors.other_selections"
                            ></v-select> -->
                            <!-- this is for search -->
                            <v-autocomplete
                                v-model="form.other_selections"
                                density="compact"
                                item-text="product_name"
                                item-value="id"
                                label="Select Similar Products"
                                hide-details
                                :items="otherProducts"
                                multiple
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select
                                :items="discountTiers"
                                item-text="tier_name"
                                item-value="id"
                                label="Discount Tier"
                                required
                                v-model="form.quantity_discounts_tier_id"
                                :error-messages="errors.quantity_discounts_tier_id"
                            ></v-select>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select
                                :items="shippingClasses"
                                item-text="class_name"
                                item-value="id"
                                label="Shipping Class"
                                required
                                v-model="form.shipping_class_id"
                                :error-messages="errors.shipping_class_id"
                            ></v-select>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <v-select
                                :items="productTypes"
                                item-text="name"
                                item-value="id"
                                label="Product Type"
                                required
                                v-model="form.type"
                                :error-messages="errors.type"
                            ></v-select>
                        </v-col>
                        <v-col cols="6" sm="6" class="pb-0">
                            <label>Select Category</label>
                            <v-alert
                                outlined
                                type="error"
                                v-if="errors.category_id.length>0"
                            >
                            {{errors.category_id[0]}}
                            </v-alert>
                            <v-treeview
                                color="red"
                                @update:active="updateValudCategory"
                                hoverable
                                shaped
                                activatable
                                :items="categories"
                                :active="form.category_id"
                                multiple-active
                                :rules="[rules.required]"
                            ></v-treeview>
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
                        <v-col v-if="form.type==1" cols="12" sm="12" class="pa-5 my-5" style="box-shadow: 0 0 10px silver;">
                            <label>Create Labels</label>
                            <v-row class="align-center">
                                <v-col cols="10" sm="10" class="pb-0">
                                    <v-combobox
                                        v-model="variantLabels"
                                        :search-input.sync="searchLabels"
                                        hide-selected
                                        label="Add Labels"
                                        multiple
                                        persistent-hint
                                        small-chips
                                    >
                                    <template v-slot:no-data>
                                        <v-list-item v-if="searchLabels">
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    "<strong>{{ searchLabels }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                    </v-combobox>
                                </v-col>
                                <v-col cols="2" sm="2" class="pb-0">
                                    <v-btn @click="generateLabels" small elevation="1">Generate Labels</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="12" v-if="variantLabelRows.length>0" class="pa-5 my-5" style="box-shadow: 0 0 10px silver;">
                            <label for="">Input Variation Tags</label>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Label
                                        </th>
                                        <th class="text-left">
                                            Label Values
                                        </th>
                                        <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(variantLabelRow, variantLabelRowK) in variantLabelRows"
                                    :key="variantLabelRowK"
                                    >
                                        <td>{{ variantLabelRow.label }}</td>
                                        <td>
                                            <v-combobox
                                                v-model="variantLabelRow.tags"
                                                :search-input.sync="variantLabelRow.tagSearch"
                                                hide-selected
                                                label="Add Labels"
                                                multiple
                                                persistent-hint
                                                small-chips
                                            >
                                            <template v-slot:no-data>
                                                <v-list-item v-if="variantLabelRow.tagSearch">
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            "<strong>{{ variantLabelRow.tagSearch }}</strong>". Press <kbd>enter</kbd> to create a new one
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                            </v-combobox>
                                        </td>
                                        <td>
                                            <v-btn color="error" fab x-small dark @click="deleteLabelRow(variantLabelRowK)">
                                                <v-icon>mdi-delete-outline</v-icon>
                                            </v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                            <v-btn @click="generateVariations" block elevation="1">Generate Variantions</v-btn>
                        </v-col>
                        <v-col v-if="variantLabelRows.length>0" class="pa-5 my-5" style="box-shadow: 0 0 10px silver;">
                            <label for="">Variation Tag Images/Videos</label>
                            <v-simple-table v-for="(variantLabelRow, variantLabelRowK) in variantLabelRows"
                                    :key="variantLabelRowK">
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            {{variantLabelRow.label}} Label
                                        </th>
                                        <th class="text-left">
                                            Is Image?
                                        </th>
                                        <th class="text-left">Upload File</th>
                                        <th class="text-left">Upload File 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(tagDataRow, tagDatak) in variantLabelRow.tagsData"
                                        :key="tagDatak"
                                    >
                                        <td>{{ tagDataRow.tag }}</td>
                                        <td>
                                            <v-checkbox v-model="tagDataRow.is_image"></v-checkbox>
                                            <v-textarea
                                                v-if="!tagDataRow.is_image"
                                                v-model="tagDataRow.content"
                                                label="Content"
                                                hint="Content for Materials"
                                                persistent-hint
                                            ></v-textarea>
                                        </td>
                                        <td>
                                            <v-file-input @change="uploadImageTagValue($event, variantLabelRowK, tagDatak)" ></v-file-input>

                                            <v-col v-if="form.id > 0 && tagDataRow.file_url" cols="12" cm="12" class="pb-0"> 
                                                <v-img :lazy-src="tagDataRow.file_url" max-height="50" max-width="50" :src="tagDataRow.file_url"></v-img>
                                                <a class="ml-2" v-if="tagDataRow.file_url" :href="tagDataRow.file_url" target="_blank">View File</a>
                                                <v-btn
                                                    v-if="tagDataRow.file_url"
                                                    icon
                                                    color="pink"
                                                    @click="tagDataRow.file_url=''"
                                                >
                                                    <v-icon>mdi-delete-outline</v-icon>
                                                </v-btn>
                                            </v-col>
                                            
                                        </td>
                                        <td>
                                            <v-file-input @change="uploadImageTagValue2($event, variantLabelRowK, tagDatak)" ></v-file-input>
                                            <v-col v-if="form.id > 0 && tagDataRow.file_url_2" cols="12" cm="12" class="pb-0"> 
                                                <v-img :lazy-src="tagDataRow.file_url_2" max-height="50" max-width="50" :src="tagDataRow.file_url_2"></v-img>
                                                <a class="ml-2" v-if="tagDataRow.file_url_2" :href="tagDataRow.file_url_2" target="_blank">View File</a>
                                                <v-btn
                                                    v-if="tagDataRow.file_url_2"
                                                    icon
                                                    color="pink"
                                                    @click="tagDataRow.file_url_2=''"
                                                >
                                                    <v-icon>mdi-delete-outline</v-icon>
                                                </v-btn>
                                            </v-col>
                                        </td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                        <v-col cols="12" sm="12" v-if="variants.length>0" class="pa-5 my-5" style="box-shadow: 0 0 10px silver;">
                            <label for="">Variations Details</label>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Variation
                                            </th>
                                            <th class="text-left">
                                                Price
                                            </th>
                                            <th class="text-left">
                                                Image
                                            </th>
                                            <th class="text-left">
                                                In Stock?
                                            </th>
                                            <th class="text-left">
                                                Part#
                                            </th>
                                            <th class="text-left">
                                                Shape
                                            </th>
                                            <th class="text-left"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(variant, variantsK) in variants" :key="variantsK">
                                            <td>{{ variant.variationLabel.join(', ') }}</td>
                                            <td>
                                                <v-text-field v-model="variant.price" :rules="[rules.required]" ></v-text-field>
                                            </td>
                                            <td>
                                                <v-file-input @change="uploadImageVariant($event, variantsK)" ></v-file-input>
                                                <div v-for="(image, imagek) in variant.images" :key="imagek" >
                                                    <v-img :lazy-src="image" max-height="50" max-width="50" :src="image"></v-img>
                                                    <a class="ml-2" :href="image" target="_blank">View File</a>
                                                    <v-btn
                                                        icon
                                                        color="pink"
                                                        @click="variant.images.splice(imagek, 1)"
                                                    >
                                                        <v-icon>mdi-delete-outline</v-icon>
                                                    </v-btn>
                                                </div>
                                            </td>
                                            <td>
                                                <v-checkbox v-model="variant.inStock"></v-checkbox>
                                            </td>
                                            <td>
                                                <v-text-field v-model="variant.part_number" :rules="[rules.required]" ></v-text-field>
                                            </td>
                                            <td>
                                                <v-text-field v-model="variant.shape" :rules="[rules.required]" ></v-text-field>
                                            </td>
                                            <td>                                                
                                                <v-btn color="info"  x-small @click="markCustomizer(variantsK)">
                                                    Toggle Customizer
                                                </v-btn>
                                                <v-select
                                                    v-if="variant.is_customizable"
                                                    :items="customProducts"
                                                    item-text="name"
                                                    item-value="id"
                                                    label="Select Customize Product"
                                                    required
                                                    v-model="variant.custom_product_id"
                                                ></v-select>
                                                <v-btn v-if="variant.isDefault==false" color="info"  x-small @click="markDefault(variantsK)">
                                                    Mark Default
                                                </v-btn>
                                                <v-btn color="error" fab x-small dark @click="deleteVariation(variantsK)">
                                                    <v-icon>mdi-delete-outline</v-icon>
                                                </v-btn>
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
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
                        <v-col cols="3" sm="3" class="pb-0">
                            <v-checkbox
                                v-model="form.is_active"
                                :label="`Published`"
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="3" sm="3" class="pb-0">
                            <v-checkbox
                                v-model="form.is_featured"
                                :label="`Featured`"
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="12" class="pb-0">
                            <v-btn color="secondary" elevation="1" large raised @click="addpermission"
                                :loading="btnloading" :disabled="btnloading">{{form.id>0?'Update':'Add'}}</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Swal from "sweetalert2";
import service from "@services/auth/default";
const brandservice = new service('products')
import otherrequestservice from "@services/auth/otherrequests";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "auth.products.add",
    watch: {
    },
    async mounted() {
        this.shippingClasses = await otherrequestservice.get('shipping-class').then(e=>e.data)
        const categories = await otherrequestservice.get('categories-parents').then(e=>e.data.data)
        // const categories = await otherrequestservice.get('categories-childs').then(e=>e.data.data)
        this.categories = categories
        const customProductsS = await otherrequestservice.get('custom-products').then(e=>e.data.data)
        this.otherProducts = await  otherrequestservice.get('products').then(e=>e.data.data)
        // Extracting names from this.otherProducts array
        this.productNames = this.otherProducts.map(product => product.product_name); // Assuming product_name is the property containing the product name
        // Update the selected products to maintain the selection
        this.preserveSelectedProducts();

        this.discountTiers = await otherrequestservice.get('quantity-discounts-tiers').then(e=>e.data.data)
        this.customProducts = customProductsS
        if (this.$route.params.id) {
            var res = await brandservice.get(this.form.id)
            console.log(res);
            this.form = {
                product_name: (res.product_name ? res.product_name : ''),
                other_selections: (res.other_selections? JSON.parse(res.other_selections):[]),
                description: (res.description? res.description: ''),
                product_slug: (res.product_slug? res.product_slug: ''),
                price: (res.price ? res.price : 0),
                discount: (res.discount ? res.discount : 0),
                category_id: (res.categoryIds ? res.categoryIds : []),
                type: (res.type?parseInt(res.type): 1),//1=normal, 2 = editor
                is_active: (res.is_active==1?true:false),
                is_featured: (res.is_featured==1?true:false),
                id: this.$route.params.id,
                image_url: res.image_url,
                quantity_discounts_tier_id: parseInt(res.quantity_discounts_tier_id),
                shipping_class_id: parseInt(res.shipping_class_id),
            }
            this.bread.push({
                text: "Edit",
                to: { name: "auth.products.edit", params: { id: this.$route.params.id } },
                disabled: false,
                exact: true,
            })
            this.variantLabels = res.options.map((e)=>{
                return e.label
            })
            this.variantLabelRows = res.options.map((e)=>{
                return {
                    label: e.label,
                    tags: e.option_values.map((f)=>{
                        return f.value
                    }),
                    tagSearch: '',
                    tagsData: e.option_values.map((f)=>{
                        return {
                            tag: f.value,
                            is_image: (f.is_image==1?true:false),
                            content: f.content,
                            file_url: f.file_url,
                            file_url_2: f.file_url_2
                        }
                    }),
                }
            })
            this.variants = res.variations.map((e)=>{
                return {
                    variationLabel: e.variation_values.map((f)=>{
                        return f.optionvalue.value
                    }),
                    images: [],
                    price: parseFloat(e.price),
                    isDefault: (parseInt(e.is_default)==1?true:false),
                    inStock: (parseInt(e.in_stock)==1?true:false),
                    is_customizable: (parseInt(e.is_customizable)==1?true:false),
                    custom_product_id: parseInt(e.custom_product_id),
                    part_number: e.part_number,
                    images: JSON.parse(e.images),
                    shape: e.shape,
                }
            })
            // console.log(this.variants)
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
        async preserveSelectedProducts() {
            // Fetch selected product IDs
            const selectedProductIds = this.form.other_selections.map(product => product.id);
            
            // Filter out selected products that are not in the new list
            this.form.other_selections = this.otherProducts.filter(product => selectedProductIds.includes(product.id));
        },
        updateValudCategory(e){
            this.form.category_id = e
        },
        resetError() {
            this.errors = {
                product_name: [],
                other_selections: [],
                category_id: [],
                product_slug: [],
                description: [],
                type: [],
                is_active: [],
                is_featured: [],
                price: [],
                discount: [],
                image: [],
                quantity_discounts_tier_id: [],
            }
        },
        addpermission: async function () {
            this.resetError()
            if (this.$refs.form.validate()) {
                this.btnloading = true;
                var formdata = new FormData();
                formdata.append("product_name", this.form.product_name);
                formdata.append("quantity_discounts_tier_id", this.form.quantity_discounts_tier_id);
                formdata.append("shipping_class_id", this.form.shipping_class_id);
                formdata.append('other_selections', JSON.stringify(this.form.other_selections))
                formdata.append("category_id", this.form.category_id);
                formdata.append("product_slug", this.form.product_slug);
                formdata.append("price", this.form.price);
                formdata.append("discount", this.form.discount);
                formdata.append("description", this.form.description);
                formdata.append("type", this.form.type);
                formdata.append("is_active", (this.form.is_active==true?1:0));
                formdata.append("is_featured", (this.form.is_featured==true?1:0));
                if (this.form.image) {
                    formdata.append("image", this.form.image);
                }
                //sending data for dropdown
                for(let variantLabelLoop = 0; variantLabelLoop < this.variantLabelRows.length; variantLabelLoop++){
                    formdata.append("variationLabel["+variantLabelLoop+"][name]", this.variantLabelRows[variantLabelLoop].label);
                    const tags = this.variantLabelRows[variantLabelLoop].tags
                    for(let tagK = 0; tagK < tags.length; tagK++){
                        formdata.append("variationLabel["+variantLabelLoop+"][tag]["+tagK+"]", tags[tagK]);
                        formdata.append("variationLabel["+variantLabelLoop+"][content]["+tagK+"]", this.variantLabelRows[variantLabelLoop].tagsData[tagK].content);
                        
                        formdata.append("variationLabel["+variantLabelLoop+"][is_image]["+tagK+"]", 
                            (this.variantLabelRows[variantLabelLoop].tagsData[tagK].is_image==true?1:0)
                        );
                        formdata.append("variationLabel["+variantLabelLoop+"][file_url]["+tagK+"]", this.variantLabelRows[variantLabelLoop].tagsData[tagK].file_url);
                        formdata.append("variationLabel["+variantLabelLoop+"][file_url_2]["+tagK+"]", this.variantLabelRows[variantLabelLoop].tagsData[tagK].file_url_2);
                    }
                }
                //sending data for dropdown end
                for(let j = 0; j < this.variants.length; j++){
                    const variant = this.variants[j]
                    formdata.append("variant["+j+"][price]", variant.price);
                    formdata.append("variant["+j+"][in_stock]", (variant.inStock==true?1:0))
                    formdata.append("variant["+j+"][is_default]", (variant.isDefault==true?1:0))
                    formdata.append("variant["+j+"][is_customizable]", (variant.is_customizable==true?1:0))
                    formdata.append("variant["+j+"][custom_product_id]", variant.custom_product_id)
                    formdata.append("variant["+j+"][part_number]", variant.part_number)
                    formdata.append("variant["+j+"][shape]", variant.shape)
                    for(let q = 0; q < variant.variationLabel.length; q++){
                        const label = variant.variationLabel[q]
                        formdata.append("variant["+j+"][label]["+q+"]", label);
                    }
                    for(let q = 0; q < variant.images.length; q++){
                        const image = variant.images[q]
                        formdata.append("variant["+j+"][image]["+q+"]", image);
                    }
                }
                this.btnloading = false;
                if (this.form.id > 0) {
                    var res = await brandservice.update(formdata, this.form.id)
                } else {
                    var res = await brandservice.create(formdata)
                }
                if (!res.status) {
                    if (res.data.product_name) {
                        this.errors.product_name = res.data.product_name
                    }
                    if (res.data.other_selections) {
                        this.errors.other_selections = res.data.other_selections
                    }
                    if(res.data.price){
                        this.errors.price = res.data.price
                    }
                    if(res.data.discount){
                        this.errors.discount = res.data.discount
                    }
                    if(res.data.category_id){
                        this.errors.category_id = res.data.category_id
                    }
                    if(res.data.product_slug){
                        this.errors.product_slug = res.data.product_slug
                    }
                    if(res.data.type){
                        this.errors.type = res.data.type
                    }
                    if(res.data.is_active){
                        this.errors.is_active = res.data.is_active
                    }
                    if(res.data.is_featured){
                        this.errors.is_featured = res.data.is_featured
                    }
                    if(res.data.description){
                        this.errors.description = res.data.description
                    }
                    if (res.data.image) {
                        this.errors.image = res.data.image
                    }
                    //errors here
                } else {
                    //suuccess here
                    this.$router.push({ name: "auth.products.listing" });
                }
            }
        },
        generateLabels(){
            this.variantLabelRows = [];
            for(let i = 0; i < this.variantLabels.length; i++){
                this.variantLabelRows.push({
                    label: this.variantLabels[i],
                    tags: [],
                    tagSearch: '',
                    tagsData: [],
                })
            }
        },
        deleteLabelRow(key){
            this.variantLabelRows.splice(key, 1);
            this.variantLabels.splice(key, 1);
        },
        markDefault(key){
            for(let i = 0; i < this.variants.length; i++){
                this.variants[i].isDefault = (key==i?true:false)
            }
        },
        markCustomizer(key){
            this.variants[key].is_customizable = !this.variants[key].is_customizable
        },
        deleteVariation(key){
            this.variants.splice(key, 1);
        },
        generateVariations(){
            function permutation() {
                var r = [], arg = arguments, max = arg.length-1;
                function helper(arr, i) {
                    for (var j=0, l=arg[i].length; j<l; j++) {
                        var a = arr.slice(0); // clone arr
                        a.push(arg[i][j]);
                        if (i==max){
                            r.push(a);
                        }else{
                            helper(a, i+1);
                        }
                    }
                }
                helper([], 0);
                return r;
            }
            // const variationsGenerated = permutation(['medium','large'],['white','blue','black']);
            var tagsArray = this.variantLabelRows.map(e=>e.tags)
            for(let q = 0; q < this.variantLabelRows.length; q++){
                this.variantLabelRows[q].tagsData = this.variantLabelRows[q].tags.map(j=>{
                    return {
                        tag: j,
                        is_image: true,
                        content: '',
                        file_url: '',
                        file_url_2: '',
                    }
                })
            }
            console.log(this.variantLabelRows)
            const variationsGenerated = permutation(...tagsArray);
            this.variants = []
            for(let i = 0; i < variationsGenerated.length; i++){
                this.variants.push({
                    variationLabel: variationsGenerated[i],
                    images: [],
                    price: this.form.price,
                    isDefault: (i==0?true:false),
                    inStock: true,
                    is_customizable: false,
                    custom_product_id: 0,
                    part_number: '',
                    shape: '',
                })
            }
        },
        async uploadImageVariant(event, key){
            if(event){
                var formData = new FormData();
                formData.append('file', event)
                const data = await otherrequestservice.post('custom/upload-image', formData).then(e=>e.data)
                this.variants[key].images.push(data.url)
            }
        },
        async uploadImageTagValue(event, firstKey, secondKey){
            if(event){
                var formData = new FormData();
                formData.append('file', event)
                const data = await otherrequestservice.post('custom/upload-image', formData).then(e=>e.data)
                this.variantLabelRows[firstKey].tagsData[secondKey].file_url = data.url
            }
        },
        async uploadImageTagValue2(event, firstKey, secondKey){
            if(event){
                var formData = new FormData();
                formData.append('file', event)
                const data = await otherrequestservice.post('custom/upload-image', formData).then(e=>e.data)
                this.variantLabelRows[firstKey].tagsData[secondKey].file_url_2 = data.url
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
            discountTiers: [],
            otherProducts: [],
            customProducts: [],
            variantLabelRows: [],
            categories: [],
            editor: ClassicEditor,
            variantLabels: [],
            variants: [],
            searchLabels: '',
            productNames: [],
            productTypes: [
                {
                    id: 1,
                    name: 'Variational Product'
                },
                {
                    id: 2,
                    name: 'Normal Product'
                }
            ],
            shippingClasses: [],
            form: {
                id: (this.$route.params.id ? this.$route.params.id : 0),
                product_name: '',
                other_selections: [],
                product_slug: '',
                type: 2,
                category_id: [],
                is_active: true,
                is_featured: false,
                description: '',
                price: 0,
                discount: 0,
                image_url: '',
                image: undefined,
                quantity_discounts_tier_id: 0,
                shipping_class_id: 0,
            },
            errors: {
                product_name: [],
                other_selections: [],
                category_id: [],
                product_slug: [],
                type: [],
                is_active: [],
                is_featured: [],
                description: [],
                price: [],
                discount: [],
                image: [],
                quantity_discounts_tier_id: [],
                shipping_class_id: [],
            },
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Products",
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