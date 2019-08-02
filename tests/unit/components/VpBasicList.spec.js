import { shallowMount } from "@vue/test-utils";
import VpBasicList from "@/components/VpBasicList";

describe("Component VpBasicList", () => {
  it("should render a li for each item in props.items", () => {
    const items = ["", ""];
    const component = shallowMount(VpBasicList, {
      propsData: { items }
    });
    expect(component.findAll("li")).toHaveLength(items.length);
  });
});
