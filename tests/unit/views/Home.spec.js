import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import Home from "../../../src/views/Home.vue";

describe("Home", () => {
  it.todo("Should mount Home");
  let store;
  beforeEach(() => {
    process.env = Object.assign(process.env, {
      VUE_APP_GITHUB_KEY: "value",
    });

    store = createStore({
      mutations: {
        setData: jest.fn(),
      },
    });
  });
  it("should mount", async () => {
    let wrapper = shallowMount(Home, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
