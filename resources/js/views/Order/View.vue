<template>
    <div class="elevation-10">
        <v-breadcrumbs :items="bread">
            <template v-slot:divider>
                <v-icon>mdi-forward</v-icon>
            </template>
        </v-breadcrumbs>
        <v-row no-gutters class="">
            <v-col cols="12">
                <div class="text-center">
                    <v-chip class="ma-2" color="pink" label text-color="white">
                        <v-icon left>mdi-cash</v-icon>{{order.total}}
                    </v-chip>
                    <v-chip v-if="order.currency" class="ma-2" color="primary" label>
                        <v-icon left>mdi-currency-usd</v-icon>{{order.currency.toUpperCase()}}
                    </v-chip>
                    <v-chip v-if="order.currency" class="ma-2" color="secondary" label>
                        <v-icon left>mdi-calendar</v-icon>{{order.created_at_formatted}}
                    </v-chip>
                    <v-btn @click="downloadPDF">Download Order</v-btn>
                </div>
            </v-col>
            <v-col cols="12">
                <v-card :loading="statusUpdating" :disabled="statusUpdating" elevate="2" class="mb-5 mx-auto ml-3 mr-3 pa-3">
                    <h4>Update Order Status</h4>
                    <v-select
                        :items="orderStatuses"
                        item-text="text"
                        item-value="id"
                        label="Order Status"
                        v-model="currentStatus"
                    ></v-select>
                    <v-btn @click="updateStatus">Update</v-btn>
                </v-card>
            </v-col>
            <v-col cols="6" sm="6" v-for="(applicant, applicantk) in applicants" :key="applicantk">
                <v-card class="mx-auto ml-3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title class="text-h5">Applicant {{ (applicantk+1) }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-text>
                        <v-row align="center">
                            <v-col class="text-h5" cols="6">
                                {{applicant.first_name}} {{applicant.last_name}}
                            </v-col>
                            <v-col cols="6">
                                <v-img :src="applicant.photograph" alt="Sunny image"
                                    width="92"></v-img>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-simple-table>
                        <template v-slot:default>
                        <tbody>
                            <tr>
                                <td><v-icon>mdi-phone</v-icon>Phone</td>
                                <td>{{applicant.phone}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-email</v-icon>Email</td>
                                <td>{{applicant.email}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-flag</v-icon>Country</td>
                                <td>{{order.country.country_name}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-passport</v-icon>Passport #</td>
                                <td>{{applicant.passport_no}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-calendar</v-icon>Travel Date</td>
                                <td>{{applicant.travel_date}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-briefcase</v-icon>Profession</td>
                                <td>{{applicant.profession}}</td>
                            </tr>
                            <tr>
                                <td><v-icon>mdi-airport</v-icon>Purpose</td>
                                <td>{{applicant.purpose}}</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                    <v-card-actions>
                        <v-btn small text @click="downloadFile(applicant.passport)">
                            Download Passport
                        </v-btn>
                        <v-btn small text @click="downloadFile(applicant.photograph)">
                            Download Photograph
                        </v-btn>
                        <v-btn small text @click="downloadFile(applicant.nationalId)">
                            Download National ID
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="6">
                <v-list
                    disabled
                    flat
                    subheader
                >
                    <v-subheader>Services</v-subheader>
                    <v-list-item-group
                        v-model="servicesSelected"
                        multiple
                        active-class=""
                    >

                        <v-list-item v-for="(service, serviceK) in servicesArr" :key="serviceK">
                            <template v-slot:default="{ active }">
                                <v-list-item-action>
                                    <v-checkbox :input-value="active"></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{service.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{service.subname}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                    </v-list>
            </v-col>
            <v-col cols="10">
                <h1 class="text-center">Timeline</h1>
                <v-timeline dense clipped>
                    <v-timeline-item v-for="status in order.statuses" :key="status.id" class="mb-4" color="grey" small>
                        <v-row justify="space-between">
                            <v-col cols="7">
                                Order Status Updated: 
                                {{ orderStatuses.find(e=>{
                                    return e.id==status.order_status
                                }).text }}
                                <br>
                                <small>{{ 
                                (status.user_id>0?('Updated By: '+ status.user.name): '')
                                }}</small>
                            </v-col>
                            <v-col class="text-right" cols="5">
                                <v-chip small class="ma-2" color="secondary" label>
                                    <v-icon left>mdi-calendar</v-icon>{{status.created_at_formatted}}
                                </v-chip>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                    <v-timeline-item class="mb-4">
                        <v-row justify="space-between">
                            <v-col cols="7">
                                Order Status Created
                            </v-col>
                            <v-col class="text-right" cols="5">
                                <v-chip small class="ma-2" color="secondary" label>
                                    <v-icon left>mdi-calendar</v-icon>{{order.created_at_formatted}}
                                </v-chip>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import service from "@services/auth/default";
const brandservice = new service('orders')
export default {
    name: "auth.orders.view",
    watch: {
    },
    async mounted() {
        this.getOrder()
        this.bread.push({
            text: "View",
            to: { name: "auth.orders.view" },
            disabled: false,
            exact: true,
        })
    },
    methods: {
        async getOrder(){
            this.servicesSelected = []
            if (this.$route.params.id) {
                var res = await brandservice.get(this.$route.params.id)
                this.order = res
                const serv =  res.services.split(',')
                for(let i = 0; i < serv.length; i++){
                    this.servicesSelected.push(parseInt(serv[i]))
                }
                this.applicants = JSON.parse(res.applicants)
                this.currentStatus = res.order_status
                console.log(res)
            }
        },
        async updateStatus(){
            this.statusUpdating = true
            const formData = new FormData()
            formData.append('order_status', this.currentStatus)
            await brandservice.update(formData, this.$route.params.id)
            await this.getOrder()
            this.statusUpdating = false
        },
        downloadFile(fileUrl){
            window.open(fileUrl, '_blank').focus();
        },
        downloadPDF(){
            window.open(this.order.pdf_url, '_blank', 'noreferrer');
        },
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
    },
    data() {
        return {
            servicesSelected: [],
            currentStatus: 0,
            statusUpdating: false,
            orderStatuses: [
                {
                    id: 0,
                    text: 'Pending',
                },
                {
                    id: 1,
                    text: 'Seen',
                },
                {
                    id: 2,
                    text: 'In Progress',
                },
                {
                    id: 3,
                    text: 'Approved',
                },
                {
                    id: 4,
                    text: 'Delivered',
                },
                {
                    id: 5,
                    text: 'Paid',
                },
                {
                    id: 6,
                    text: 'Payment Failed',
                },
            ],
            servicesArr: [
                {
                    name: 'Express Service',
                    selected: false,
                    cost: 100,
                    cost_aed: 368,
                    subname: 'Get your order in 12 Hours',
                },
                {
                    name: 'Airport Pickup',
                    selected: false,
                    cost: 50,
                    cost_aed: 184,
                    subname: 'Pre-book one way airport from DXB airport to anywhere in',
                },
                {
                    name: 'Travel Insurance',
                    selected: false,
                    cost: 80,
                    cost_aed: 294,
                    subname: 'Get travel insurance with your visa',
                },
            ],
            order: {},
            applicants: [],
            bread: [
                {
                    text: "Dashboard",
                    to: { name: "auth.dashboard" },
                    disabled: false,
                    exact: true,
                },
                {
                    text: "Orders",
                    to: { name: "auth.orders.listing" },
                    disabled: false,
                    exact: true,
                }
            ],
        };
    },
};
</script>