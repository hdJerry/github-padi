import store from "../store/index";

function hasData() {
  return store.getters["getData"].edges;
}

export const requiresData = (to, from, next) => {
  if (hasData()?.length > 0) {
    next();
  } else {
    next({ name: "Home" });
  }
};
