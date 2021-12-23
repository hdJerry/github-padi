<template>
  <div class="loaderdiv">
    <div v-for="(x, i) in [1, 2, 3, 4, 5]" :key="i" class="card">
      <div class="dp_name">
        <div class="dp loader"></div>
        <div>
          <div class="text loader"></div>
          <div class="text loader"></div>
        </div>
      </div>
      <div class="text loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
@keyframes loading {
  0% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 0 0;
  }
}

.loaderdiv {
  width: 100%;
  margin: 20px auto;
  padding: 15px;
}

@media (min-width: 1024px) {
  .loaderdiv {
    width: 40vw;
  }
}
.loader {
  background: linear-gradient(90deg, #f8f9fb, #e2e6f3, #f8f9fb, #e2e6f3);
  animation: loading 2s ease infinite;
  background-size: 300% 100%;
}

.card {
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  min-height: 150px;
  cursor: pointer;
  margin-bottom: 15px;
}
.dp_name {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.dp_name .dp {
  width: 70px;
  height: 70px;
  border-radius: 50vh;
  margin-right: 10px;
}

.text {
  width: 100px;
  height: 5px;
  margin-bottom: 10px;
}
</style>
