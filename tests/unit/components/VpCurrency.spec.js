import { mount } from "@vue/test-utils";
import VpCurrency from "@/components/VpCurrency";

describe("Component VpCurrency", () => {
  it("should be rendered without props", () => {
    const component = mount(VpCurrency);
    expect(component.html()).toBeDefined();
  });
});
