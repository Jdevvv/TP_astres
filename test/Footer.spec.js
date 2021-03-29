import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  test('testing footer', () => {
    const wrapper = mount(Footer)
    expect(wrapper.vm).toBeTruthy()
  })
})
