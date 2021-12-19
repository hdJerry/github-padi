import { shallowMount } from "@vue/test-utils";
import Card from "../../../../src/components/UI/Card.vue";
import carddata from "./cardData";

describe("Card", () => {
  it.todo("should mount without error");
  it("should mount", async () => {
    const open = jest.spyOn(Card.methods, "open");
    let wrapper = shallowMount(Card, {
      props: {
        data: carddata,
      },
    });
    expect(wrapper).toBeTruthy();
    await wrapper.trigger("click");
    expect(open).toHaveBeenCalled();
  });
});
