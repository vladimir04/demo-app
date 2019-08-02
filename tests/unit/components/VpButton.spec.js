import { mount } from "@vue/test-utils";
import VpButton from "@/components/VpButton";

describe("Component VpButton", () => {
  it("should be rendered without props", () => {
    const component = mount(VpButton);
    expect(component.html()).toBeDefined();
  });
});
