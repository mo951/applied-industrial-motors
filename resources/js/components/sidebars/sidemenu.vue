<template>
    <v-navigation-drawer class="bg-ndark" height="auto" :mini-variant="mini">
        <v-list dense nav>
            <v-list-item dark v-if="!mini" class="px-2">
                <v-list-item-avatar>
                    <v-img :src="user.image_url"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>{{ user.name }}</v-list-item-title>

                <v-btn icon @click.stop="mini = !mini">
                    <v-icon>{{ !mini ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
                </v-btn>
            </v-list-item>
            <v-list-item dark v-if="mini" @click="mini = !mini">
                <v-list-item-icon>
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-icon>
            </v-list-item>
            <v-list-item  dark active-class="new-side-active" v-for="item in items" :key="item.title" link :to="{ name: item.link }">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <!-- <v-divider></v-divider> -->
            <!-- <v-list-item class="px-2">
                    <v-switch @change="toggleDarkTheme()" label="Theme Dark" color="green"
                        v-model="isNightMode"></v-switch>
                </v-list-item> -->
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import headercomponent from "@/components/sidebars/headercomponent.vue";
export default {
    components: {
        headercomponent
    },
    data: () => ({
        isNightMode: false,
        mini: true,
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'auth.panel' },
            { title: 'Orders', icon: 'mdi-cash-sync', link: 'auth.orders.listing' },
            // { title: 'Products', icon: 'mdi-docker', link: 'auth.products.listing' },
            { title: 'Product', icon: 'mdi-docker', link: 'auth.products.listing' },
            { title: 'Categories', icon: 'mdi-earth', link: 'auth.categories.listing' },
            { title: 'Users', icon: 'mdi-account', link: 'auth.users.listing' },
            { title: 'Inquiries', icon: 'mdi-message', link: 'auth.inquiries.listing' },
            { title: 'News', icon: 'mdi-artstation', link: 'auth.blogs.listing' },
            { title: 'Newsletters', icon: 'mdi-mailbox-open', link: 'auth.newsletters.listing' },
            { title: 'Home Slider', icon: 'mdi-slide', link: 'auth.homesliders.listing' },
            { title: 'Downloadables', icon: 'mdi-tag', link: 'auth.downloadables.listing' },
            { title: 'Downloadable PDF', icon: 'mdi-download-box', link: 'auth.downloadablespdfs.listing' },
            { title: 'Contact List', icon: 'mdi-list-status', link: 'auth.contactlist.listing' },
            { title: 'Category Tabs', icon: 'mdi-tab', link: 'auth.tabs.listing' },
            { title: 'Dropdown Tabs', icon: 'mdi-tab', link: 'auth.dropdowns.listing' }, 
        ],
        drawer: false,
    }),
    mounted() {
        var isDarkTheme = localStorage.getItem('is_theme_dark')
        if (isDarkTheme === 'true') {
            this.isNightMode = true
        } else {
            this.isNightMode = false
        }
    },
    props: {

    },
    watch: {
        drawerState() {
            if (this.drawerState === true) {
                this.drawer = this.drawerState
                setTimeout(() => {
                    this.$store.commit("updateDrawer", false);
                }, 100)
            }
        }
    },
    methods: {
        async toggleDarkTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            this.isNightMode = this.$vuetify.theme.dark;
            await this.$nextTick()
            localStorage.setItem('is_theme_dark', this.$vuetify.theme.dark === false ? 'false' : 'true')
        },
        logoutauthparent() {
            this.$store.commit("setLoginStatus", false);
            this.$store.commit("setAuthToken", "");
            this.$store.commit("setloggedInUser", {});
            this.$router.push({ name: "auth.login" });
        },
    },
    computed: {
        drawerState() {
            return this.$store.getters.drawerState;
        },
        themeMode() {
            return this.$vuetify.theme.dark
        },
        user() {
            return this.$store.getters.loggedInUser;
        },
        loggedIn() {
            return this.$store.getters.loggedIn;
        },
        permissions() {
            return this.$store.getters.getPermissions;
        },
        sideBarStatus() {
            return this.$store.getters.sideBarStatus;
        },
    },
}
</script>
