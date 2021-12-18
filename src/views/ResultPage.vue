<template>
  <div class="result">
    <h3>Results here</h3>
    <p>{{ data.length }} Users</p>
    <div v-for="({ node }, index) in data" :key="index">
      <Card :data="node" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/UI/Card.vue";
export default {
  name: "ResultPage",
  components: { Card },
  computed: {
    ...mapGetters({
      getData: "getData",
    }),
  },
  data() {
    return {
      data: [],
      users: 0,
    };
  },
  created() {
    this.data = this.getData.edges;
    this.users = this.getData.userCount;
  },
};
</script>

<style lang="scss" scoped>
.result {
  width: 100%;
  margin: 20px auto;

  @media (min-width: 1024px) {
    width: 70vw;
  }
}
</style>
