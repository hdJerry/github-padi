import store from "../store/index";

function hasData() {
  return store.getters["getData"].edges.length;
}

export const requiresData = (to, from, next) => {
  if (hasData() > 0) {
    next();
  } else {
    next({ name: "Home" });
  }
};
