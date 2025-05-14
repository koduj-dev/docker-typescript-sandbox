import { beforeAll, describe, expect, test } from 'vitest'
import { default as TodoItemComponent } from '../../src/components/Todo/TodoItem.vue'
import { mount } from '@vue/test-utils'
import Button from 'primevue/button'
import { TodoItem } from '../../src/types'

const defaultProps: TodoItem = {
  id: 5,
  title: 'Content',
  content: 'Todo Title',
  completed: false
};

function createWrapper(props: TodoItem) {
  return mount(TodoItemComponent, {
    props: {
      item: props
    }
  });
}

describe("TodoItem", () => {
  test("Test props", () => {
    const wrapper = createWrapper({
      ...defaultProps,
    });

    expect(wrapper.text()).contains('Content');
    expect(wrapper.text()).contains('Todo Title');

    expect(wrapper.text()).contains('❌');

    expect(wrapper.findAllComponents(Button).length).toBe(2);
  })

  test("Test props - title", () => {
    const wrapper = createWrapper({
      ...defaultProps, title: "Jinej titulek"
    });

    expect(wrapper.text()).contains('Jinej titulek');
  })

  test("Test props - completed", () => {
    const wrapper = createWrapper({
      ...defaultProps, completed: true
    });

    expect(wrapper.text()).contains('✅');

    expect(wrapper.findAllComponents(Button).length).toBe(1);
  })

  test("Test emit removeTodo", () => {
    const wrapper = createWrapper({
      ...defaultProps, completed: true
    });

    const buttons = wrapper.findAllComponents(Button).filter((b) => {
      return b.text() === 'Smazat';
    })

    expect(buttons.length).toBe(1);
    buttons[0].trigger('click');

    expect(wrapper.emitted().removeTodo.length).toBe(1);
  })
})
