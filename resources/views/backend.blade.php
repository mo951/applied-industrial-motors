<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="{{ mix('/css/app.css')}}" rel="stylesheet">
    <link href="/css/responsive.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <title>Applied Industrial Motors</title>
</head>

<body id="main">
    <div id="app">
        <v-app>
            <v-main>
                <main-layout  v-if="loggedIn">
                    <router-view />
                </main-layout>
                <v-container v-else>
                    <v-card class="height-100vh">
                        <router-view />
                    </v-card>
                </v-container>
            </v-main>
        </v-app>
        <notifications :notificaitontext="notificaitontext" :notificaitonstatus="notificaitonstatus" />
    </div>
    <script src="{{ mix('/js/app.js') }}&time={{time()}}"></script>
</body>

</html>