import { shallowMount } from "@vue/test-utils";
import Card from "../../../../src/components/UI/Card.vue";
import carddata from "./cardData";

describe("Card", () => {
  it.todo("should mount without error");
  it("should mount", () => {
    let wrapper = shallowMount(Card, {
      props: {
        data: carddata,
      },
    });
    expect(wrapper).toBeTruthy();
  });
});
