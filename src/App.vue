<template>
  <v-app>

    <v-app-bar class="app-bar" color="white" elevation="0" height="100px" hide-on-scroll app>

      <v-toolbar-title>
        <button @click="route('/')" :class="{ activeButton: onPWYW }" id="nav-title">Protest With Your Wallet</button>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div id="right-nav" class="hidden-sm-and-down">
        <button @click="route('/procedure')" class="tab-link" :class="{ activeButton : onTab1 }">Procedure</button>
        <button @click="route('/toolkit')" class="tab-link" :class="{ activeButton : onTab2 }">Toolkit</button>
        <button @click="route('/resources')" class="tab-link" :class="{ activeButton : onTab3 }">Resources</button>
        <button @click="route('/about')" class="tab-link" :class="{ activeButton : onTab4 }">About</button>
        <button @click="route('/stay-informed')" :class="{ activeButton : onStayInformed }" class="siButton">Stay Informed</button>
      </div>

    </v-app-bar>

    <v-main class="content">
      <v-container fluid="">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer padless>

      <v-card flat tile class="white text-center">

        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px"> {{ icon }} </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0 footer-text">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
          interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed
          massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi
          vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
          sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} - <strong> PWYW </strong>
        </v-card-text>

      </v-card>

    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),

  methods: {
    route(path) {
      if (this.$route.path != path) {
        this.$router.push(path);
      }
    }
  },

  computed: {
    onPWYW() {
      return this.$route.path == "/";
    },
    onTab1() {
      return this.$route.path == "/tab1";
    },
    onTab2() {
      return this.$route.path == "/tab2";
    },
    onTab3() {
      return this.$route.path == "/tab3";
    },
    onTab4() {
      return this.$route.path == "/tab4";
    },
    onStayInformed() {
      return this.$route.path == "/stay-informed";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

button {
  font-size: 14px;
  text-transform: none !important;
  color: #000000;
  margin: 20px;
  padding-bottom: 3px;
  cursor: pointer;
}

button:focus {
  outline: 0;
}

button::-moz-selection {
  background: #0052f7;
  color: #ffffff;
}

button::selection {
  background: #0052f7;
  color: #ffffff;
}

.content {
  width: 100%;
}

/deep/ .v-toolbar__content {
  padding-top: 30px !important;
}

.footer-text {
  padding: 50px;
}

#inspire {
  background-color: transparent;
  width: 60%;
}

#nav-title {
  font-family: "Montserrat", sans-serif;
  font: bold;
  color: #000000;
  font-size: 22px;
  letter-spacing: 0px;
  border-radius: 0px;
  border-bottom: none;
  margin-left: 150px;
  margin-top: 1px;
  text-align: center !important;
}

#nav-title::-moz-selection {
  background: #0052f7;
  color: #ffffff;
}

#nav-title::selection {
  background: #0052f7;
  color: #ffffff;
}

#right-nav {
  margin-right: 150px;
  font-family: "Open Sans", sans-serif;
  color: #000000;
}

.siButton {
  width: 150px;
  height: 50px;
  padding: 15px;
  border: none;
  border-radius: 30px;
  margin: 0 10px 40px;
  flex: 0 0 auto;
  background: #ffffff;
  transition: all 0.3s ease;
}

.siButton:hover {
  width: 150px;
  background: #0052f7;
  color: #ffffff;
  box-shadow: -1px 1px 1px 0 rgba(0, 82, 247, 0.1);
}

.tab-link {
  transition: 0.3s ease;
  text-decoration: none;
  border-top: 4px solid #ffffff;
  padding: 20px 0;
  margin: 0 20px;
}
.tab-link:hover {
  border-top: 4px solid #000000;
  padding: 20px 0;
}

</style>

