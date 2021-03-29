import { mount } from '@vue/test-utils'
import index from '@/pages/index'

describe('Index', () => {
  test('testing index', () => {
    const wrapper = mount(index, {
      // Ant design elements
      stubs: {
        ASelect: true,
        ASelectOption: true,
        AIcon: true,
      },
      mocks: {
        $fetch: {},
        $fetchState: {
          pending: true,
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
