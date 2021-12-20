import { shallowMount } from "@vue/test-utils";
import AppInput from "../../../../src/components/UI/AppInput.vue";

describe("AppInput", () => {
  it.todo("should mount without error");
  it("should mount", async () => {
    let wrapper = shallowMount(AppInput, {
      props: {
        type: "search",
        id: "searchuser",
      },
    });
    expect(wrapper).toBeTruthy();
    await wrapper.setProps({
      modelValue: "Jerry",
    });
    let input = await wrapper.find("#searchuser");
    expect(input.element.value).toBe("Jerry");
  });
});
