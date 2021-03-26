import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('testing header', () => {
    const wrapper = mount(Header, {
      // Ant design elements
      stubs: {
        NuxtLink: true,
        AMenu: true,
        AMenuItem: true,
        AIcon: true,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
