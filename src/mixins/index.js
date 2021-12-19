import { forkCouter, starCouter } from "../views/functions";
export default {
  methods: {
    stars(data) {
      return starCouter(data);
    },
    forks(data) {
      return forkCouter(data);
    },
  },
};
