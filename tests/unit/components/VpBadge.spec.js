import { mount } from "@vue/test-utils";
import VpBadge from "@/components/VpBadge";

describe("Component VpBadge", () => {
  it("should be rendered without props", () => {
    const component = mount(VpBadge);
    expect(component.html()).toBeDefined();
  });
});
