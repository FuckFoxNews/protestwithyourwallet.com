<template>
  <v-app id="app">
    <v-app-bar
      class="app-bar"
      color="background-1"
      elevation="0"
      height="100px"
      hide-on-scroll app
      dense>
      <v-toolbar-title>
        <button
          id="nav-title"
          :class="{ activeButton: path === '/' }"
          @click="route('/')">
          Protest With Your Wallet
        </button>
      </v-toolbar-title>

      <v-spacer/>

      <div
        id="right-nav"
        class="hidden-sm-and-down">
        <button
          class="tab-link"
          :class="{ activeButton : path === '/procedure' }"
          @click="route('/procedure')">
          Causes
        </button>

        <button
          class="tab-link"
          :class="{ activeButton : path === '/toolkit' }"
          @click="route('/toolkit')">
          Companies
        </button>

        <button
          class="tab-link"
          :class="{ activeButton : path === '/resources' }"
          @click="route('/about')">
          About
        </button>

        <button
          class="tab-link"
          :class="{ activeButton : path === '/about' }"
          @click="route('/resources')">
          Contact Us
        </button>

        <button
          class="siButton"
          :class="{ activeButton : path === '/stay-informed' }"
          @click="route('/stay-informed')">
          Stay Informed
        </button>
      </div>
    </v-app-bar>

    <v-main class="content">
      <router-view/>
    </v-main>

    <v-footer padless>
      <v-card
        flat
        tile
        class="white text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0 footer-text">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
          interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed
          massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi
          vehicula lacinia malesuada. Nulla placerat augue vel I love you Uriyah ipsum ultrices, cursus iaculis dui
          sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider/>

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
    path() {
      return this.$route.path;
    }
    onPWYW() {
      return  == "/";
    },
    onTab1() {
      return this.$route.path == "/procedure";
    },
    onTab2() {
      return this.$route.path == "/toolkit";
    },
    onTab3() {
      return this.$route.path == "/resources";
    },
    onTab4() {
      return this.$route.path == "/about";
    },
    onStayInformed() {
      return this.$route.path == "/stay-informed";
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');

:root {
  --text: #212121;
  --primary-1: #039BE5;
  --primary-2: #29B5F6;
  --primary-3: #4FC2F8;
  --primary-4: #80D4F9;
  --secondary-1: #E64A19;
  --secondary-2: #F55020;
  --secondary-3: #FE7143;
  --secondary-4: #FC8A65;
  --background-1: #FFFFFF;
  --background-2: #F3F0EA;
  --dark: #101820;
}

#app {
  margin: 0;
}

button {
  font-size: 14px;
  text-transform: none;
  color: #000000;
  margin: 15px;
  padding-bottom: 3px;
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

.activeButton {
  color: red !important;
}

</style>

