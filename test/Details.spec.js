import { mount } from '@vue/test-utils'
import details from '@/pages/_id.vue'

describe('Details', () => {
  test('testing details', () => {
    const wrapper = mount(details, {
      // Ant design elements
      stubs: {
        AButton: true,
      },
      mocks: {
        $fetch: {},
        $fetchState: {
          pending: true,
        },
        $route: {
          params: {
            id: true,
          },
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
