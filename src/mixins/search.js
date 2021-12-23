import { mapMutations } from "vuex";
import queryData from "@/views/querydata.js";
import { searchGithub } from "@/services/api.js";
export default {
  data() {
    return {
      token: null,
      search: "",
      loading: false,
      errorMsg: "",
      first: 10,
      last: null,
      searchType: "USER",
    };
  },
  created() {
    let key = process.env.VUE_APP_GITHUB_KEY;
    const decode = Buffer.from(key, "base64").toString("utf-8");
    this.token = decode;
  },
  methods: {
    ...mapMutations({
      setData: "setData",
    }),
    async searchGithub(goto, to) {
      this.loading = true;
      let self = this;
      if (to === "l") {
        this.last = 10;
        this.first = null;
      } else {
        this.first = 10;
        this.last = null;
      }
      try {
        let query = await queryData(
          this.search,
          this.searchType,
          this.first,
          goto,
          this.last
        );
        let resp = await searchGithub(this.token, query);
        let { data } = resp;
        if (data) {
          let {
            search: { edges, userCount, pageInfo },
          } = data;
          this.setData({
            pageInfo,
            edges,
            userCount,
            search: this.search,
          });
          this.$router.push("/result");
          // this.search = "";
        } else {
          let { errors } = resp;
          let message = errors[0].message;
          this.errorMsg = message;
        }
      } catch (error) {
        // some error message
        this.errorMsg = "Error has occured, try again!";
      } finally {
        this.loading = false;
        setTimeout(() => {
          self.errorMsg = "";
        }, 3000);
      }
    },
  },
};
