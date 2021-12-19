<template>
  <div class="home">
    <div class="search_card">
      <i class="error" v-if="errorMsg">{{ errorMsg }}</i>
      <AppInput
        name="new-search"
        type="text"
        v-model="search"
        placeholder="Search user"
        label="Search User"
        input-style="input_style"
      />
      <AppButton
        :loading="loading"
        btn-style="btn_style"
        loading-color=""
        @click="searchGithub"
        :disabled="loading || !search"
      >
        Search
      </AppButton>
    </div>
  </div>
</template>

<script>
import searchMixin from "@/mixins/search.js";
// @ is an alias to /src
export default {
  name: "Home",
  mixins: [searchMixin],
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 15px;
  .error {
    color: rgb(185, 6, 6);
    font-size: 0.9rem;
    display: block;
    margin-bottom: 6px;
  }

  & > .search_card {
    width: 100%;
    height: 250px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-flow: column;
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

.btn_style {
  border-radius: 50px;
  width: 100%;
  background-color: rgb(26, 27, 39);
  border: none;
  outline: none;
  color: #fff;
  font-size: 1.1rem;
  height: 3rem;
  margin: 10px 0;
  padding: 10px;
}
</style>
