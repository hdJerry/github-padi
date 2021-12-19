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
      first: 50,
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
    async searchGithub() {
      this.loading = true;
      let self = this;
      try {
        let query = await queryData(this.search, this.searchType, this.first);
        let resp = await searchGithub(this.token, query);
        let { data } = resp;
        if (data) {
          let {
            search: { edges, userCount },
          } = data;
          this.setData({
            edges,
            userCount,
          });
          this.$router.push("/result");
          this.search = "";
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
