<template>
  <div class="home">
    <div class="search_card">
      <Input
        type="search"
        v-model="search"
        placeholder="Search user"
        label="Search User"
        input-style="input_style"
      />
    </div>
  </div>
</template>

<script>
import Input from "@/components/UI/Input.vue";
// @ is an alias to /src
export default {
  components: { Input },
  name: "Home",
  data() {
    return {
      token: null,
      search: "",
    };
  },
  created() {
    let key = process.env.VUE_APP_GITHUB_KEY;
    const decode = Buffer.from(key, "base64").toString("utf-8");
    this.token = decode;
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 15px;

  & > .search_card {
    width: 100%;
    height: 250px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 15px;
    @media (min-width: 1024px) {
      width: 450px;
      height: 200px;
    }
    .input_style {
      width: 100%;
      border-radius: 6px;
      border: 1px solid rgb(26, 27, 39);
    }
  }
}
</style>
