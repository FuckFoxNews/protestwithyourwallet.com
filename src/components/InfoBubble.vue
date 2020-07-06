<template>
  <div class="info-bubble">
    <v-container>
      <v-row>
        <v-col class="ma-0 pa-0">
          <button @click="route(items[0].route)">
            <v-card height="300" width="200" elevation="0" :ripple="false"  :class="{ activeButton : onBubble0 }">
              <div></div>
              <v-img class="ma-3 align-center justify-center rounded-img" :src="items[0].img"></v-img>
              <v-card-title> {{ items[0].description }} </v-card-title>
            </v-card>
          </button>
        </v-col>

        <v-col class="ma-0 pa-0">
          <button @click="route(items[1].route)">
            <v-card height="300" width="200" elevation="0" :ripple="false" :class="{ activeButton : onBubble1 }">
              <div></div>
              <v-img class="ma-3 align-center justify-center rounded-img" :src="items[1].img"></v-img>
              <v-card-title> {{ items[1].description  }} </v-card-title>
            </v-card>
          </button>
        </v-col>

        <v-divider class="mx-4" inset vertical></v-divider>


        <v-col class="ma-0 pa-0">
          <button @click="route(items[2].route)">
            <v-card height="300" width="200" elevation="0" :ripple="false" :class="{ activeButton : onBubble2 }">
              <div></div>
              <v-img class="ma-3 align-center justify-center rounded-img" :src="items[2].img"></v-img>
              <v-card-title> {{ items[2].description  }} </v-card-title>
            </v-card>
          </button>
        </v-col>

        <v-col class="ma-0 pa-0">
          <button @click="route(items[3].route)">
            <v-card height="300" width="200" elevation="0" :ripple="false"  :class="{ activeButton : onBubble3 }">
              <div></div>
              <v-img class="ma-3 align-center justify-center rounded-img" :src="items[3].img"></v-img>
              <v-card-title> {{ items[3].description  }} </v-card-title>
            </v-card>
          </button>
        </v-col>

        <v-col class="ma-0 pa-0">
          <button @click="route(items[4].route)">
            <v-card height="300" width="200" elevation="0" :ripple="false" :class="{ activeButton : onBubble4 }">
              <div></div>
              <v-img class="ma-3 align-center justify-center rounded-img" :src="items[4].img"></v-img>
              <v-card-title> {{ items[4].description  }} </v-card-title>
            </v-card>
          </button>
        </v-col>

      </v-row>

    </v-container>
  </div>
</template>
<script>
export default {
  name: 'InfoBubble',
  props: ['items'],
  data: () => ({
    current_column: 0,
  }),
  methods: {
    route(path) {
      if(this.$route.path != path) {
        this.$router.push(path);
      }
    }
  },
  computed: {
    onBubble0() {
      return this.$route.path == '/bubble-0';
    },
    onBubble1() {
      return this.$route.path == '/bubble-1';
    },
    onBubble2() {
      return this.$route.path == '/bubble-2';
    },
    onBubble3() {
      return this.$route.path == '/bubble-3';
    },
    onBubble4() {
      return this.$route.path == '/bubble-4';
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

button:focus {
  outline: 0 !important;
}

.info-bubble {
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.rounded-img {
  border-radius: 50% !important;
  width: 180px;
  height: 180px;
}

.theme--light.v-divider {
    border-color: rgba(0,82,247) !important;
    border-width: 1px !important;
}

.v-card {
  padding-top: 22px !important;
  padding-bottom: 10px !important;
}

.v-card:hover {
  color: #0052f7 !important;
}

.v-card:hover .rounded-img{
  border-width: 3px !important;
  border-color: #0052f7;
}

.v-card__title {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 15px;
  text-align: center;
  word-break: break-word;
  margin-right: 6px;
  margin-left: 6px;
  line-height: 1.5;
}

.v-card__title::-moz-selection {
  background:rgba(0, 82, 274, 0.3) !important;
  opacity: 1 !important;
  color: #ffffff !important;
}

.v-card__title::selection {
  background: rgba(0, 82, 274) !important;
  color: #ffffff !important;
}

</style>