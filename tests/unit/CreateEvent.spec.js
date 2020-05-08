import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent.vue";

describe("CreateEvent", () => {
  test("it has an <h1> heading ", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.get("h1").text()).toBe("Create an Event");
  });

  test("it contains a form element ", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("form")).toBe(true);
  });

  test("it has an <h1> heading ", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("h1")).toBe(true);
  });
  test("it should contain a title input field", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("input[type='title'][type='text']")).toBe(true);
  });
  test("it should contain submit input field", () => {
    const wrapper = mount(CreateEvent);

    expect(wrapper.contains("input[type='submit'][value='create']")).toBe(true);
  });
  test("it should contain an input field for the title with the placeholder 'Add a Title' ", () => {
    const wrapper = mount(CreateEvent);

    const titleInput = wrapper.get("input[name='title']");

    expect(titleInput.attributes("placeholder")).toBe("Add a Title");
  });
});
