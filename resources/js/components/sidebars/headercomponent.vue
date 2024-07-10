<template>
    <div v-if="loggedIn">
        <v-app-bar color="primary" dense dark>
            <v-app-bar-nav-icon @click="showSidebarSmall" class="d-show-onsmall"></v-app-bar-nav-icon>
            <v-toolbar-title>Applied Industrial Motors - Backend</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-anchor</v-icon>
                    </v-btn>
                </template>

                <v-list dense>
                    <v-list-item v-for="(item, itemKey) in items" :key="itemKey" link :to="{ name: item.link }">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-menu bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon x-large v-on="on">
                        <v-avatar color="brown" size="30">
                            <img alt="Avatar" :src="user.image_url">
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                            <v-avatar color="brown">
                                <img alt="Avatar" :src="user.image_url">
                            </v-avatar>
                            <h3>{{ user.name }}</h3>
                            <p class="text-caption mt-1">
                                {{ user.email }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <v-btn link :to="{ name: 'auth.profile' }" depressed rounded text>
                                Edit Account
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn @click="logoutauthparent" depressed rounded text>
                                Disconnect
                            </v-btn>
                        </div>
                    </v-list-item-content>
                </v-card>
            </v-menu>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    name: "headercomponent",
    components: {
    },
    data: () => ({
        drawer: false,
        overlay: false,
        collapseOnScroll: true,
        items: [

            // { title: '+ Product', link: 'auth.products.add' },
            { title: '+ Product', link: 'auth.products.add' },
            { title: '+ Category', link: 'auth.categories.add' },
            { title: '+ User', link: 'auth.users.add' },
            { title: '+ News', link: 'auth.blogs.add' },
            { title: '+ Newsletter', link: 'auth.newsletters.add' },
            { title: '+ Home Slider', link: 'auth.homesliders.add' },
            { title: '+ Downloadables', link: 'auth.downloadables.add' },
            { title: '+ Downloadable PDF', link: 'auth.downloadablespdfs.add' },
            { title: '+ Contact List', link: 'auth.contactlist.add' },
            { title: '+ Category Tab', link: 'auth.tabs.add' },
            { title: '+ Dropdown Tab', link: 'auth.dropdowns.add' },
        ],
    }),
    methods: {
        logoutauthparent() {
            this.$store.commit("setLoginStatus", false);
            this.$store.commit("setAuthToken", "");
            this.$store.commit("setloggedInUser", {});
            this.$router.push({ name: "auth.login" });
        },
        showSidebarSmall() {
            this.$store.commit("setSideBarStatus", true);
        },
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser;
        },
        loggedIn() {
            return this.$store.getters.loggedIn;
        },
        permissions() {
            return this.$store.getters.getPermissions;
        },
    },
    watch: {

    },
    mounted() {
    },
};
</script>
