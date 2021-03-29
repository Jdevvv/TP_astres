import { mount } from '@vue/test-utils'
import favorites from '@/pages/favorites'

describe('Favorites', () => {
  test('testing favorites', () => {
    const wrapper = mount(favorites, {
      // Ant design elements
      stubs: {
        ATable: true,
      },
      mocks: {
        $store: {
          state: {
            favorites: {
              favorites: [],
            },
          },
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
