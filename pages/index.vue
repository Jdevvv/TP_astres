<template>
  <div class="container">
    <p v-if="$fetchState.pending">🪐 Récupération des planètes... 🪐</p>
    <p v-else-if="$fetchState.error">😥 Une erreur est survenue 😥</p>
    <a-table v-else :columns="columns" :data-source="stars">
      <a slot="name" slot-scope="name">{{ name }}</a>
      <span slot="isPlanet" slot-scope="isPlanet"
        ><a-tag :color="isPlanet ? 'green' : 'volcano'">
          {{ isPlanet.toString().toUpperCase() }}
        </a-tag></span
      >
      <span slot="mass" slot-scope="mass">{{
        mass ? mass.massValue : 'unknown'
      }}</span>
      <span slot="vol" slot-scope="vol">{{
        vol ? vol.volValue : 'unknown'
      }}</span>
      <a-button slot="more" type="primary"> Details </a-button>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Type',
    dataIndex: 'isPlanet',
    key: 'isPlanet',
    scopedSlots: { customRender: 'isPlanet' },
  },
  {
    title: 'Mass Value',
    dataIndex: 'mass',
    key: 'mass',
    scopedSlots: { customRender: 'mass' },
  },
  {
    title: 'Volume Value',
    key: 'vol',
    dataIndex: 'vol',
    scopedSlots: { customRender: 'vol' },
  },
  {
    title: 'More',
    key: 'more',
    scopedSlots: { customRender: 'more' },
  },
]

export default {
  data() {
    return {
      // data,
      columns,
      stars: [],
    }
  },
  async fetch() {
    this.stars = await this.$axios
      .get('https://api.le-systeme-solaire.net/rest/bodies')
      .then((res) => res.data.bodies)
  },
}
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ant-table-wrapper {
  width: 90%;
}
</style>
