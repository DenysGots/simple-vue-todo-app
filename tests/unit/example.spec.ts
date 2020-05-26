import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";

describe("TodoList", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(TodoList);
    expect(wrapper.element).toBeTruthy();
  });
});
