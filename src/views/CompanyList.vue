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
                @click:close="removeFilter(filter)"
              >{{ filter }}</v-chip>
            </v-chip-group>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" align="center" no-gutters class="row-expansion-panel">
        <!-- filtered data here -->
        <v-col>
          <!-- <span> Company Amount: {{ companyList.length }} </span>
          <span> Companies: {{ companyList }} </span>-->

          <v-sheet v-for="industry in industryList" :key="industry">
            <h2 class="text-sm-center text-md-left text-lg-left industry-header">
              <span> {{ industry }} </span>
            </h2>

            <v-expansion-panels popout>
              <v-expansion-panel v-for="(company,i) in companyList" :key="i">
                <div v-if="company.industry == industry">
                  <v-expansion-panel-header>{{ company.companyName }}</v-expansion-panel-header>
                  <v-expansion-panel-content>

                    <v-divider />

                    <v-row justify="center" align="center">
                      <v-col>
                        <h4 class="text-sm-center text-md-left text-lg-left">Section 1</h4>
                        <p class>{{ company.description }}</p>
                      </v-col>
                      <v-col>
                        <h4 class="text-sm-center text-md-left text-lg-left">Section 2</h4>
                        <p class>{{ company.description }}</p>
                      </v-col>
                    </v-row>
                    <button
                      class="expansion-content-button"
                      :class="{ activeButton : path === '/company/' + company.id }"
                      @click="route('/company/' + company.id)"
                      >More Information
                    </button>

                  </v-expansion-panel-content>
                </div>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CompanyList",
  data: () => ({
    companyList : [],
    companyAmount: 0,
    search_value: "",
    search_filters: ["testChip1", "testChip2"],
    industryList: ["Apparel", "Food", "Pharmaceuticals"]
  }),
  mounted: function() {
    this.getCompanies();
  },
  methods: {
    route(path) {
      if (this.$route.path != path) {
        this.$router.push(path);
      }
    },
    async getCompanies() {
      try {
        console.log("getting companies CompanyList.vue");
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
  },
  computed: {
    companyByIndustry: function(industry) {
      return this.companyList.filter(function(company) {
        if (company.industry == industry) {
          console.log(company);
          return company;
        }
      });
    },
    path() {
      return this.$route.path;
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

h4 {
  margin-bottom: 10px;
  font-weight: bold;
}

h4 h2 ::-moz-selection {
  background: #0052f7;
  color: #ffffff;
}

h4::selection {
  background: #0052f7;
  color: #ffffff;
}

.industry-header span::-moz-selection {
  background: #0052f7;
  color: #ffffff;
}

.industry-header span::selection {
  background: #0052f7;
  color: #ffffff;
}


.industry-header {
  display: block;
  word-spacing: 7px;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
  font-size: 35px;
  line-height: 1.2;
  color: #0052f7;
  padding-bottom: 7px;
  padding-top: 30px;
}

p {
  font-weight: lighter;
}

p::-moz-selection {
  background: #0052f7;
  color: #ffffff;
}

p::selection {
  background: #0052f7;
  color: #ffffff;
}
.row-expansion-panel {
  align-content: center !important;
  padding-right: 10px !important;
  padding-left: 10px !important;
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

.theme--light.v-divider {
  align-content: center !important;
  justify-content: center !important;
  border-color: black !important;
}

.v-input {
  font-size: 30px;
  font-weight: 700;
}
</style>
