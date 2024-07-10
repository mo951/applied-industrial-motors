<template>
    <div>
        <headercomponent></headercomponent>
        <div class="main-display-layout">
            <newbar />
            <v-container>
                <v-row class="mt-2">
                    <v-col cols="12">
                        <v-card :elevation="(isPanelFull === true ? '0' : '1')"
                            :class="(isPanelFull === true ? 'transparent' : '')">
                            <slot></slot>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-footer
        dark
        :padless="true"
        >
        <v-card
            flat
            tile
            width="100%"
            class="text-center"
        >
            <v-card-text class="white--text pa-1">
            {{ new Date().getFullYear() }} — <strong>Powered by WDV</strong>
            </v-card-text>
        </v-card>
        </v-footer>
    </div>
</template>
<script>
import newbar from "@/components/sidebars/newbar.vue";
import notifications from "@/components/sidebars/notifications.vue";
import headercomponent from "@/components/sidebars/headercomponent.vue";
export default {
    components: {
        newbar,
        headercomponent,
        notifications
    },
    mounted() {
        var isDarkTheme = localStorage.getItem('is_theme_dark')
        if (isDarkTheme === 'true') {
            this.isNightMode = true
        } else {
            this.isNightMode = false
        }
    },
    computed: {
        sideBarStatus() {
            return this.$store.getters.sideBarStatus;
        },
        notificaitontext() {
            return this.$store.getters.notificationText;
        },
        notificaitonstatus() {
            return this.$store.getters.notificationStatus;
        },
        isPanelFull() {
            return this.$store.getters.isPanelFull;
        },
        loggedIn() {
            return this.$store.getters.loggedIn;
        },
    },
}
</script>