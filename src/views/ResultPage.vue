<template>
  <div class="result_page">
    <nav>
      <div class="nav_left">
        <h3>Github Padi</h3>
        <AppInput
          name="new-search"
          type="text"
          v-model="search"
          placeholder="Search user"
          :input-style="[{ active_input: active_input }, 'input_style']"
          @focus="active_input = true"
          @blur="active_input = false"
          @keyup.enter="research"
          :disabled="loading"
        />
      </div>
    </nav>
    <div class="loading_state" v-if="loading">Fetching data</div>
    <div class="result" v-else>
      <header class="search_header">
        <p>{{ users }} Users</p>
        <div>sort</div>
      </header>
      <div v-for="({ node }, index) in filterData" :key="index">
        <Card :data="node" />
      </div>
      <div class="paginate">
        <AppButton
          :btn-style="[{ btn_active: currentPage > 0 }, 'btn_pag']"
          @click="currentPage = currentPage - 1"
          :disabled="currentPage === 0"
        >
          Prev
        </AppButton>
        <AppButton
          @click="currentPage = currentPage + 1"
          :btn-style="[
            { btn_active: currentPage < Math.ceil(data.length / limit) - 1 },
            'btn_pag',
          ]"
          :disabled="currentPage >= Math.ceil(data.length / limit) - 1"
        >
          Next
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import searchMixin from "@/mixins/search.js";
import { mapGetters } from "vuex";
import Card from "@/components/UI/Card.vue";
export default {
  name: "ResultPage",
  components: { Card },
  data() {
    return {
      data: [],
      users: 0,
      limit: 5,
      page: 1,
      count: 0,
      currentPage: 0,
      total: 0,
      search: "",
      active_input: false,
    };
  },
  created() {
    this.data = this.getData.edges;
    this.count = this.getData.edges.length;
    this.total = this.getData.edges.length / this.limit;
    this.users = this.getData.userCount;
  },
  computed: {
    ...mapGetters({
      getData: "getData",
    }),
    filterData() {
      let start = this.currentPage * this.limit;
      let end = start + this.limit;

      return this.data.slice(start, end);
    },
  },
  methods: {
    async research() {
      if (this.search) {
        await this.searchGithub();
        this.data = this.getData.edges;
        this.count = this.getData.edges.length;
        this.total = this.getData.edges.length / this.limit;
        this.users = this.getData.userCount;
      }
    },
  },
  mixins: [searchMixin],
};
</script>

<style lang="scss">
.result_page {
  nav {
    position: sticky;
    top: 0;
    padding: 10px;
    background-color: rgb(26, 27, 39);
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
      height: 70px;
    }

    .nav_left {
      display: flex;
      align-items: center;
      flex-flow: column;
      width: 100%;
      @media (min-width: 1024px) {
        flex-flow: row;
        width: unset;
      }
      h3 {
        font-size: 1.5rem;
        color: #fff;
        @media (min-width: 1024px) {
          margin: 0 15px;
        }
      }
      .input_style {
        width: 250px;
        border-radius: 6px;
        border: 1px solid #fff;
        background: rgb(26, 27, 39);
        color: #fff;
        transition: all 0.3s ease-in-out;
        &.active_input {
          width: 380px;
          border: 1px solid rgb(26, 27, 39);
          background: #fff;
          color: rgb(26, 27, 39);
        }
      }
    }
  }
  .loading_state {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 80vh;
  }
  .result {
    width: 100%;
    margin: 20px auto;
    padding: 15px;

    @media (min-width: 1024px) {
      width: 40vw;
    }

    .search_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;

      p {
        font-size: 1.4rem;
        font-weight: bold;
        color: rgb(26, 27, 39);
      }
    }

    .paginate {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 15px 0;
      .btn_pag {
        padding: 10px;
        border-radius: 6px;
        background-color: #ccc;
        color: rgb(26, 27, 39);
      }
      button:not(:last-child) {
        margin-right: 20px;
      }
      .btn_active {
        background-color: rgb(26, 27, 39);
        color: #fff;
      }
    }
  }
}
</style>
