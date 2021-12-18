<template>
  <div class="card" v-if="data">
    <div class="dp_name">
      <div class="dp">
        <img :src="data.avatarUrl" alt="" />
      </div>
      <p class="name">{{ data.fullname }}</p>
    </div>
    <p class="bio" v-if="data.bio">
      {{ data.bio }}
    </p>
    <p v-else class="bio">There is nothing here to see</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  min-height: 150px;

  & > .dp_name {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    & > .dp {
      width: 70px;
      height: 70px;
      border-radius: 50vh;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .bio {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
