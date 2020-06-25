<template>
    <v-container fill-height>
      <v-row justify="center" align="center" no-gutters>

          <v-sheet class="pa-6" :width="1315" :min-height="1000">

            <h2 class="text-sm-center text-md-left text-lg-left header">
              <span> Best practices to enable </span>
              <span> the discoverability of </span>
              <span> your music </span>
            </h2>

        </v-sheet>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

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

v-row {
  align-content: center !important;
}
</style>
