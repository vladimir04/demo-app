import { mount } from "@vue/test-utils";
import Home from "@/views/Home";

describe("Component Home", () => {
  it("should be rendered without props", () => {
    const component = mount(Home);
    expect(component.html()).toBeDefined();
  });
});
