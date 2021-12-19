<template>
  <div class="card" v-if="data" @click="open">
    <div class="dp_name">
      <div class="dp">
        <img :src="data.avatarUrl" alt="" />
      </div>
      <div>
        <p class="name">{{ data.fullname }}</p>
        <div class="otherinfo">
          <p>
            Followers:
            <span class="counts">{{ data.followers.totalCount }}</span>
          </p>
          <p>
            Stars:
            <span class="counts">{{ stars(data.repositories.edges) }}</span>
          </p>
          <p>
            Fork:
            <span class="counts">{{ forks(data.repositories.edges) }}</span>
          </p>
        </div>
      </div>
    </div>
    <p class="bio" v-if="data.bio">
      {{ data.bio }}
    </p>
    <p v-else class="bio">There is nothing here to see</p>
  </div>
</template>

<script>
import countMixins from "@/mixins/index";
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    open() {
      window.open(this.data.url);
    },
  },
  mixins: [countMixins],
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  min-height: 150px;
  cursor: pointer;
  margin-bottom: 15px;

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
    .name {
      text-align: left;
      margin: 0px 0 5px;
    }
    .otherinfo {
      display: flex;
      justify-content: flex-start;

      p {
        margin-right: 10px;
        font-size: 0.8rem;
        .counts {
          color: rgb(55, 55, 248);
        }
      }
    }
  }

  .bio {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    font-size: 0.9rem;
  }
}
</style>
