import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        authtoken: '',
        loggedIn: false,
        sideBarStatus: false,
        loggedInUser: {},
        notificationStatus: false,
        notificationText: '',
        permissions: [],
        isPanelFull: false,
        drawerState: false,
        contactStates: ["florida","south-central","western","midwest","upper-midwest","central","north-central","east-central","northeastern-1","northeastern-2","northeastern-3","southeast","carolina"]
    },
    mutations: {
        updateDrawer(state, val){
            state.drawerState = val
        },
        setPanelFull(state, val){
            state.isPanelFull = val
        },
        setAuthToken(state, authtoken) {
            localStorage.setItem('auth_token',authtoken);
            window.axios.defaults.headers.common['Authorization'] = 'Bearer '+authtoken;
            state.authtoken = authtoken
        },
        setLoginStatus(state, loggedIn) {
            state.loggedIn = loggedIn
        },
        setloggedInUser(state, loggedInUser){
            localStorage.setItem('logged_in_role_id',loggedInUser.role_id);
            state.loggedInUser = loggedInUser
        },
        setSideBarStatus(status, sideBarStatus){
            status.sideBarStatus = sideBarStatus
        },
        setPermissions(state, permissions){
            state.permissions = permissions
        },
        setNotification(state, text){
            state.notificationText = text
            state.notificationStatus = true
            setTimeout(()=>{
                state.notificationStatus = false
            },1000)
        }
    },
    getters: {
        drawerState(state){
            return state.drawerState
        },
        wallets(state){
            return state.wallets
        },
        authtoken(state) {
            return state.authtoken
        },
        loggedIn(state) {
            return state.loggedIn
        },
        isPanelFull(state){
            return state.isPanelFull
        },
        loggedInUser(state){
            return state.loggedInUser
        },
        sideBarStatus(state){
            return state.sideBarStatus
        },
        notificationStatus(state){
            return state.notificationStatus
        },
        notificationText(state){
            return state.notificationText
        },
        getPermissions(state){
            return state.permissions
        },
        getContactStates(state){
            return state.contactStates
        }
    }
})