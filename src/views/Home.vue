<template>
  <div class="home">
    <v-container fill-height>

      <v-row justify="center" align="center" no-gutters class="row-main">

          <v-sheet class="pa-6" :width="1315" :min-height="1000">
            <h2 class="text-sm-center text-md-left text-lg-left header">
              <span> Best practices to enable </span>
              <span> the discoverability of </span>
              <span> your music </span>
            </h2>

            <div class="home-art"> </div>

            <InfoBubble :items = "InfoBubble_items"></InfoBubble>
        </v-sheet>

      </v-row>

      <v-row justify="center" align="center" no-gutters class="row-main">

        <v-sheet :width="1200">
          <v-container>
            <v-row justify="center" align="center" no-gutters>
              <v-col class="info-column" no-gutters>
                <h2 class="text-sm-center text-md-left text-lg-left">Who is it for?</h2>
                <p>Lorem ipsum dolor sit amet, ne sea ponderum invenire, mucius perpetua per ex, qui
                  dolore aperiri erroribus eu. At est utinam partem constituto, homero laboramus quo in.
                  Per cu minim impetus, an nibh option sit, id persius oporteat lobortis sit. Eam
                  mazim oporteat consectetuer an. Omnis justo fugit in his, quaeque antiopam eu qui.</p>
                <p>Lorem ipsum dolor sit amet, ne sea ponderum invenire, mucius perpetua per ex, qui
                  dolore aperiri erroribus eu. At est utinam partem constituto, homero laboramus quo in.
                  Per cu minim impetus, an nibh option sit, id persius oporteat lobortis sit. Eam mazim
                  oporteat consectetuer an. Omnis justo fugit in his, quaeque antiopam eu qui.</p>
              </v-col>
              <v-col class="art-column">
                <v-img max-width="500" max-height="400" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

      </v-row>

      <v-row justify="center" align="center" no-gutters>

        <v-sheet class="pa-15 invert-sheet" dark rounded :width="1200" :min-height="530">
          <v-container>
            <v-row justify="center" align="center" no-gutters>
              <v-col class="invert-art-column">
                <v-img max-width="350" max-height="200" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></v-img>
              </v-col>
              <v-col class="invert-info-column text-sm-center text-md-left text-lg-left" no-gutters lg="5">
                <h2>Producing exhaustive and standardized metadata</h2>
                <p>Lorem ipsum dolor sit amet, ne sea ponderum invenire, mucius perpetua per ex, qui
                  dolore aperiri erroribus eu. At est utinam partem constituto, homero laboramus quo in.
                  Per cu minim impetus, an nibh option sit, id persius oporteat lobortis sit. Eam
                  mazim oporteat consectetuer an. Omnis justo fugit in his, quaeque antiopam eu qui.</p>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

      </v-row>

      <v-row justify="center" align="center" class="row4">

        <v-sheet class="pa-15 row4-sheet1" rounded :width="530" :min-height="500">
          <v-img max-width="350" max-height="200" class="row4-img" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></v-img>
          <h2>What is metadata?</h2>
          <p>Lorem ipsum dolor sit amet, ne sea ponderum invenire, mucius perpetua per ex, qui
            dolore aperiri erroribus eu. At est utinam partem constituto, homero laboramus quo in.
            Per cu minim impetus, an nibh option sit, id persius oporteat lobortis sit. Homero laboramus quo in.
            Per cu minim impetus, an nibh option sit. </p>
        </v-sheet>

        <v-sheet class="pa-15 row4-sheet2" rounded :width="530" :min-height="500">
          <v-img max-width="350" max-height="200" class="row4-img" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></v-img>
          <h2>What is metadata used for?</h2>
          <p>Lorem ipsum dolor sit amet, ne sea ponderum invenire, mucius perpetua per ex, qui
            dolore aperiri erroribus eu. At est utinam partem constituto, homero laboramus quo in.
            Per cu minim impetus, an nibh option sit, id persius oporteat lobortis sit. Homero laboramus quo in.
            Per cu minim impetus, an nibh option sit. </p>
        </v-sheet>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import InfoBubble from '../components/InfoBubble.vue';
export default {
  name: 'Home',
  components: {
    InfoBubble
  },
  data: () => ({
    InfoBubble_items: [
      {
        id: 0,
        img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
        description: ' Im Uri! Im writing this app ',
        route: '/bubble-0'
      },
      {
        id: 1,
        img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
        description: ' I had a caffine pill too late ',
        route: '/bubble-1'
      },
      {
        id: 2,
        img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
        description: ' Just fillin in some data until.. ',
        route: '/bubble-2'
      },
      {
        id: 3,
        img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
        description: ' We can get some good content :) ',
        route: '/bubble-3'
      },
      {
        id: 4,
        img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
        description: ' Whats up with all the fire works? ',
        route: '/bubble-3'
      }
    ],

  })
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap');

.art-column {
  margin-left: 100px !important;
  margin-right: 0px !important;
}

.header span{
  display: block;
  word-spacing: 7px;
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;
  font-size: 45px;
  line-height: 1.2;
  color: #0052f7;
}

.header span::-moz-selection {
  background:rgba(0, 82, 274, 0.3);
  opacity: 1;
  color: #ffffff;
}

.header span::selection {
  background: rgba(0, 82, 274);
  color: #ffffff;
}

.home  {
  background: linear-gradient(to bottom, white 0%,white 60%,#000000 50%,#f4f1ea 50%,#f4f1ea 100%); /* W3C */
  margin: 0px !important;
  padding: 0px !important;
}

.home-art {
  height: 350px;
}

.info-column {
  padding-right: 0px !important;
  padding-left: 20px !important;
}

.invert-sheet {
  margin-top: 90px !important;
  background-color: #101820 !important;
  padding-top: 135px !important;
  padding-bottom: 100px !important;
}

.invert-art-column {
  padding-left: 50px !important;
}

h2 {
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 10px;
  font-weight: bold;
}

h2::-moz-selection {
  background:#0052f7;
  color: #ffffff;
}

h2::selection {
  background: #0052f7;
  color: #ffffff;
}

li {
  color:#0052f7;
}

li span {
  color: black;
}

li span::-moz-selection {
  background: #0052f7;
  color: #ffffff;
}

li span::selection {
  background: #0052f7;
  color: #ffffff;
}

p::-moz-selection {
  background: #0052f7;
  color:#ffffff;
}

p::selection {
  background:#0052f7;
  color: #ffffff;
}

.row-main {
  align-content: center !important;
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.row4 {
  padding-top: 150px ;
  width: 100% !important;
  padding-bottom: 150px;
}

.row4-img {
  margin-left: 30px;
  margin-bottom: 30px !important;
}

.row4-sheet1{
  margin: 30px !important;
}

.row4-sheet2 {
  margin: 30px !important;
}

</style>