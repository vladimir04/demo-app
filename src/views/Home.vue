<template>
  <main class="home">
    <VpIcon type="logo" size="120px" />
    <section>
      <h1>Expense Tracker</h1>
      <p>
        Hobby project to learn & practice VueJS and its accompanying libraries.
        <br />Backend served by typicode's json-server package.
      </p>
      <h3 class="home__subtitle">Powered by</h3>
      <VpBasicList :items="poweredList" />
      <h3 class="home__subtitle">Guidance from</h3>
      <VpBasicList :items="guidanceList" />
    </section>
  </main>
</template>

<script>
import VpBasicList from "@/components/VpBasicList.vue";
import VpIcon from "@/components/VpIcon.vue";

export default {
  name: "home",
  components: {
    VpIcon,
    VpBasicList
  },
  data() {
    return {
      poweredList: [
        { name: "vue", link: "https://vuejs.org/" },
        { name: "vue-router", link: "https://router.vuejs.org" },
        { name: "vuex", link: "https://vuex.vuejs.org" },
        {
          name: "json-server",
          link: "https://github.com/typicode/json-server"
        },
        { name: "jest", link: "https://jestjs.io/" },
        { name: "cypress", link: "https://www.cypress.io/" }
      ],
      guidanceList: [
        { name: "VueMastery", link: "https://www.vuemastery.com" },
        { name: "Frontend Masters", link: "http://frontendmasters.com" },
        { name: "Vue Guide", link: "https://vuejs.org/v2/guide/" }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.home__logo {
  width: 10rem;
}
.home__subtitle {
  margin: @--spacing-base*2 0 0;
}
</style>
