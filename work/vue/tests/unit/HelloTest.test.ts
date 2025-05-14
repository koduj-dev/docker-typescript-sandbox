import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloTest from '../../src/components/HelloTest.vue'
import { nextTick } from 'vue'

describe('Test první komponent', () => {
  test('komponenta má tlačíko', () => {
    const wrapper = mount(HelloTest)

    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.findAll('button').length).toBe(1);
  })

  test('Obsahuje text Hello test.', () => {
    const wrapper = mount(HelloTest)

    expect(wrapper.text()).contains('Hello test');

    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.find('button').text()).toBe("Klik.");
  })

  test('Klik na tlačítko emitne event', async () => {
    const wrapper = mount(HelloTest);

    const btn = wrapper.find('button');
    expect(btn.text()).toBe("Klik.");
    btn.trigger('click');
    btn.trigger('click');
    btn.trigger('click');

    expect(wrapper.emitted().testClick.length).toBe(3);

    await nextTick();

    expect(wrapper.find('#clickCounter').text()).toContain("Počet kliknutí: 3");
    expect(wrapper.text()).toContain("Počet kliknutí: 3");
  })

  test('test props', () => {
    const wrapper = mount(HelloTest, {
      props: {
        text: 'Náš prop text.',
      }
    });

    expect(wrapper.text()).toContain(wrapper.props().text);
  })
})

