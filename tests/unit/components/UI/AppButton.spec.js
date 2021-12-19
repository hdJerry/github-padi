import { shallowMount } from "@vue/test-utils";
import AppButton from "../../../../src/components/UI/AppButton.vue";

describe("AppButton", () => {
  it.todo("should mount without error");
  it("should mount", () => {
    let wrapper = shallowMount(AppButton);
    expect(wrapper).toBeTruthy();
  });
});
