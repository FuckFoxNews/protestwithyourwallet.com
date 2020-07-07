<template>
  <div id="company-list">
    <v-container fill-height>
      <v-row justify="center" align="center" no-gutters class="row-main">

        <div id="company-header">
          <h2 class="text-sm-center text-md-left text-lg-left header">
            <span> Companies </span>
          </h2>
        </div>

        <div class="search-bar">

        </div>

        <div class="industries">

        </div>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CompanyList'
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
.row-main {
  align-content: center !important;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>