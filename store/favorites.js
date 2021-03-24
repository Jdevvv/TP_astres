export const state = () => ({
  favorites: [],
})

export const mutations = {
  add(state, star) {
    state.favorites.push(star)
  },
  remove(state, { star }) {
    state.favorites.splice(state.favorites.indexOf(star), 1)
  },
}
