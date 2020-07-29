<template>
  <div id="company">
    <v-btn
      class="back-button"
      :class="{ activeButton : path === '/company-list' }"
      @click="route('/company-list')" >
      <v-icon> mdi-arrow-left </v-icon>
    </v-btn>
    <h2> {{ company.companyName }} </h2>
  </div>
</template>
<script>
export default {
  name: "Company",
  data()  {
    return {
      company: this.$store.getters.company(this.$route.params.id)
    }
  },
  methods: {
    route(path) {
      if(this.$route.path != path) {
        this.$router.push(path);
      }
    }
  },
  computed: {
    path() {
      return this.$route.path;
    }
  }
}
</script>
<style scoped>

</style>