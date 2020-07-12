<template>
  <div id="company-list">
    <v-container fill-height>
      <v-row justify="center" align="center" no-gutters class="row-main">
        <div id="company-header">
          <h2 class="text-sm-center text-md-left text-lg-left header">
            <span>Companies</span>
          </h2>
        </div>
      </v-row>

      <v-row justify="center" align="center" no-gutters class="row-search">
        <v-col cols="10">
          <div class="search-bar">
            <h3 class="text-sm-center text-md-left text-lg-left search-title">
              <span>Search for ...</span>
            </h3>

            <v-text-field
              v-model="search_value"
              v-on:keyup.enter="addFilter(search_value)"
              append-icon="mdi-magnify"
              color="black"
              height="80"
              rounded
              solo
              flat
              outlined
            ></v-text-field>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" align="center" no-gutters class="row-search">
        <v-col cols="10">
          <div class="search-chips">
            <v-chip-group mandetory column active-class="primary-text">
              <v-chip
                class="ma-2"
                close
                outlined
                pill
                color="black"
                v-for="filter in search_filters"
                :key="filter"
                @click:close="removeFilter(filter)">
                {{ filter }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" align="center" no-gutters class="row-main">
        <v-divider />
        <!-- filtered data here -->
        <span> Company Amount: {{ companyList.length }} </span>
        <span> Companies: {{ companyList }} </span>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CompanyList",
  data: () => ({
    companyList: [],
    companyAmount: 0,
    search_value: "",
    search_filters: ["testChip1", "testChip2"]
  }),
  mounted: function() {
    this.getCompanies();
  },
  methods: {
    async getCompanies() {
      try {
        console.log('getting companies CompanyList.vue');
        await this.$store.dispatch("getCompanies");
        console.log(this.$store.state.companies);
        this.companyList = this.$store.state.companies;
      } catch (error) {
        console.log(error);
      }
    },
    async removeFilter(filter) {
      this.search_filters.splice(this.search_filters.indexOf(filter), 1);
      this.search_filters = [...this.search_filters];
    },
    async addFilter(search_value) {
      this.search_filters.push(search_value);
      this.search_value = "";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");

/deep/ .v-text-field {
  width: 1000px;
}
.header span {
  display: block;
  word-spacing: 7px;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
  font-size: 45px;
  line-height: 1.2;
  color: #0052f7;
}

.header span::-moz-selection {
  background: rgba(0, 82, 274, 0.3);
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

.row-search {
  align-content: center !important;
}
.search-bar {
  padding-top: 16px;
}

.search-title span {
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  font-size: 16px;
  color: #101820;
}

.search-title span::-moz-selection {
  background: rgba(0, 82, 274);
  color: #ffffff;
}

.search-title span::selection {
  background: rgba(0, 82, 274);
  color: #ffffff;
}
.v-input {
  font-size: 30px;
  font-weight: 700;
}
</style>
