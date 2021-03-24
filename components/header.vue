<template>
  <a-menu v-model="current" mode="horizontal">
    <a-menu-item key="list">
      <nuxt-link to="/"> <a-icon type="unordered-list" />All stars </nuxt-link>
    </a-menu-item>
    <a-menu-item key="favorites">
      <nuxt-link to="/favorites">
        <a-icon type="star" />Favorites</nuxt-link
      ></a-menu-item
    >
  </a-menu>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.ant-menu {
  margin-bottom: 32px;
  padding-left: 8%;
}
</style>
