<template>
    <div>
        <v-row class="panel-gapping" no-gutters>
            <!-- <v-col>
                <v-card class="mt-4 mx-auto">
                    <v-sheet class="v-sheet--offset mx-auto" color="cyan" elevation="12" max-width="calc(100% - 32px)">
                        <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
                    </v-sheet>
    
                    <v-card-text class="pt-0">
                        <div class="text-h6 font-weight-light mb-2">
                            Website Traffic
                        </div>
                        <div class="subheading font-weight-light grey--text">
                        </div>
                        <v-divider class="my-2"></v-divider>
                        <v-icon class="mr-2" small>
                            mdi-clock
                        </v-icon>
                        <span class="text-caption grey--text font-weight-light">last updated 26 minutes ago</span>
                    </v-card-text>
                </v-card>
            </v-col> -->
            <v-col>
                <v-card class="mx-auto text-center" color="green" dark>
                    <v-card-text>
                        <v-sheet color="rgba(0, 0, 0, .12)">
                            <v-sparkline :value="graphCount" color="rgba(255, 255, 255, .7)" height="100" padding="24"
                                stroke-linecap="round" smooth>
                                <!-- <template v-slot:label="item">
                                    ${{ item.value }}
                                </template> -->
                            </v-sparkline>
                        </v-sheet>
                    </v-card-text>
                    <v-card-text>
                        <div class="text-h4 font-weight-thin">
                            Sales 30 Days
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <countWidget :loading="false" title="Total Sales" :count="totalSales" />
            </v-col>
            <v-col cols="12">
                <v-divider></v-divider>
            </v-col>
            <v-col>
                <countWidget :loading="false" title="Total Orders" :count="totalOrders" />
            </v-col>
            <v-col>
                <countWidget :loading="false" title="Total Paid Orders" :count="totalPaidOrders" />
            </v-col>
            <v-col>
                <countWidget :loading="false" title="Total Delivered Orders" :count="totalDeliverdOrders" />
            </v-col>
            <v-col cols="12">
                <v-divider></v-divider>
            </v-col>
            <v-col>
                <countWidget :loading="false" title="Total Products" :count="totalProduct" />
            </v-col>
            <v-col>
                <countWidget :loading="false" title="Total Custom Products" :count="totalCustomProduct" />
            </v-col>
            <v-col>
                <countWidget :loading="false" title="Total Users" :count="totalUser" />
            </v-col>
        </v-row>
    </div>
</template>
<script>

import countWidget from "@/components/counts/index.vue";
import otherrequestservice from "@services/auth/otherrequests";

export default {
    components: {
        countWidget
    },
    async mounted() {
        this.$store.commit('setPanelFull', true);
        // this.getGraphs()
        
        // var res  = await otherrequestservice.get('dashboard-calculations').then(e=>e.data)
        // if(res){
        //     this.graphCount = res.graph
        //     this.totalSales = res.totalSales
        //     this.totalOrders = res.totalOrders
        //     this.totalPaidOrders = res.totalPaidOrders
        //     this.totalDeliverdOrders = res.totalDeliverdOrders
        //     this.totalProduct = res.totalProduct
        //     this.totalCustomProduct = res.totalCustomProduct
        //     this.totalUser = res.totalUser
        // }
    },
    data() {
        return {
            graphCount: [],
            totalSales: 0,
            totalOrders: 0,
            totalPaidOrders: 0,
            totalDeliverdOrders: 0,
            totalProduct: 0,
            totalCustomProduct: 0,
            totalUser: 0,
            labels: [
                '12am',
                '3am',
                '6am',
                '9am',
                '12pm',
                '3pm',
                '6pm',
                '9pm',
            ],
            value: [
                200,
                675,
                410,
                390,
                310,
                460,
                250,
                240,
            ],
            value2: [
                423,
                446,
                675,
                510,
                590,
                610,
                760,
            ],
        };
    },
    watch: {

    },
    methods: {

    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
    },
};
</script>
<style>
.v-sheet--offset {
    top: -24px;
    position: relative;
}
</style>