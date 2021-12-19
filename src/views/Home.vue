<template>
  <div class="home">
    <h1 class="logo">Github Pals</h1>
    <div class="search_card">
      <i class="error" v-if="errorMsg">{{ errorMsg }}</i>
      <AppInput
        name="new-search"
        type="text"
        id="searchuser"
        v-model="search"
        placeholder="Search user"
        input-style="input_style"
        :disabled="loading"
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
  flex-flow: column;
  width: 100%;
  height: 100vh;
  padding: 15px;

  & > .logo {
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 5px;
  }
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
      height: 2.6rem;
      border: 1px solid var(--primary-color);
    }
  }
}

.btn_style {
  border-radius: 50px;
  width: 100%;
  background-color: var(--primary-color);
  border: none;
  outline: none;
  color: #fff;
  font-size: 1.1rem;
  height: 2.8rem;
  margin: 10px 0;
  padding: 10px;
}
</style>
