<template>
  <div class="result_page">
    <nav>
      <div class="nav_left">
        <h3>Github Pals</h3>
        <AppInput
          name="new-search"
          type="text"
          id="searchuser"
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
        <details tabindex="-1" ref="sortdetails">
          <summary class="btn_sort">
            <span>Sort By</span>
            <img
              src="https://img.icons8.com/ios-filled/10/000000/sort-down.png"
              alt="caret"
            />
          </summary>
          <div class="dropdown">
            <p @click="sortData(1)" :class="{ active: sortBy === 1 }">
              Followers (ASC)
            </p>
            <p @click="sortData(-1)" :class="{ active: sortBy === -1 }">
              Followers (DSC)
            </p>
          </div>
        </details>
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
      sortBy: 0,
    };
  },
  created() {
    this.data = this.getData.edges;
    this.count = this.getData.edges.length;
    this.total = this.getData.edges.length / this.limit;
    this.users = this.getData.userCount;
  },
  mounted() {
    this.dropdownFunction();
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
    async sortData(value) {
      if (value === 1) {
        // Ascednding order
        this.data = this.data.sort(
          (a, b) => a.node.followers.totalCount - b.node.followers.totalCount
        );
      } else {
        // Descending order
        this.data = this.data.sort(
          (a, b) => b.node.followers.totalCount - a.node.followers.totalCount
        );
      }
      this.sortBy = value;
      this.$refs.sortdetails.open = false;
    },
    dropdownFunction() {
      this.$refs.sortdetails.addEventListener("click", (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (e.target.open) {
          e.target.open = false;
        } else {
          e.target.open = true;
        }
      });
      document.body.addEventListener("click", () => {
        this.$refs.sortdetails.open = false;
      });
      document.documentElement.addEventListener("click", () => {
        this.$refs.sortdetails.open = false;
      });
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
    background-color: var(--primary-color);
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
        color: #eee;
        @media (min-width: 1024px) {
          margin: 0 15px;
        }
      }
      .input_style {
        width: 250px;
        border-radius: 6px;
        border: 1px solid #eee;
        background: var(--primary-color);
        color: #eee;
        transition: all 0.3s ease-in-out;
        &.active_input {
          width: 380px;
          border: 1px solid var(--primary-color);
          background: #eee;
          color: var(--primary-color);
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
      position: relative;

      p {
        font-size: 1.4rem;
        font-weight: bold;
        color: var(--primary-color);
      }
      details {
        border-radius: 5px;
        border: 1px solid var(--border-color);
        background-color: var(--bg-color);
        cursor: pointer;
        & > .dropdown {
          position: absolute;
          z-index: 7;
          right: 0;
          bottom: 0;
          -webkit-transform: translate(0, calc(100% + 10px));
          transform: translate(0, calc(100% + 10px));
          background-color: #fff;
          border: 1px solid #e1e4e8;
          padding-top: 5px;
          padding-bottom: 5px;
          min-width: 180px;
          border-radius: 6px;
          -webkit-box-shadow: 0 0 20px rgba(19, 19, 19, 0.075);
          box-shadow: 0 0 20px rgba(19, 19, 19, 0.075);

          & > p {
            padding: 8px 5px;
            display: block;
            font-size: 0.9rem;
            font-weight: lighter;
            color: var(--primary-color);
            &:hover {
              background-color: var(--bg-color);
              color: rgb(55, 55, 248);
            }
            &.active {
              background-color: var(--bg-color);
              color: rgb(55, 55, 248);
            }
          }
        }

        & > summary {
          list-style: none;
          &::marker {
            display: none;
          }
          &::-webkit-details-marker {
            display: none;
          }
        }

        .btn_sort {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 7px 10px;
          span {
            color: var(--primary-color);
            font-size: 0.8rem;
          }
          img {
            margin-left: 7px;
          }
        }
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
        color: var(--primary-color);
      }
      button:not(:last-child) {
        margin-right: 20px;
      }
      .btn_active {
        background-color: var(--primary-color);
        color: #fff;
      }
    }
  }
}
</style>
