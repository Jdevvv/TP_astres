<template>
  <div class="content">
    <div>
      <a-table :columns="columns" :data-source="favorites">
        <nuxt-link
          slot="name"
          slot-scope="name, record"
          :to="{ path: `/${record.id}` }"
          >{{ name }}</nuxt-link
        >
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
        <a-button slot="more" slot-scope="record" type="primary">
          <nuxt-link :to="{ path: `/${record.id}` }"> Details</nuxt-link>
        </a-button>
      </a-table>
    </div>
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
    title: 'Planet',
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
      columns,
    }
  },
  computed: {
    favorites() {
      return this.$store.state.favorites.favorites
    },
  },
}
</script>
