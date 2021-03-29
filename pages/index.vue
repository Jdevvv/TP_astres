<template>
  <div class="content">
    <div class="filters">
      <div>Filters</div>
      <a-select v-model="filterPlanet" @change="$fetch">
        <a-select-option value="all"> All </a-select-option>
        <a-select-option value="planet"> Planet </a-select-option>
        <a-select-option value="not planet"> Not planet </a-select-option>
      </a-select>

      <a-select v-model="filterMoons" @change="$fetch">
        <a-select-option value="all"> All </a-select-option>
        <a-select-option value="moons"> Moons </a-select-option>
        <a-select-option value="not moons"> Not Moons </a-select-option>
      </a-select>
    </div>
    <div>
      <p v-if="$fetchState.pending">🪐 Chargement des planètes... 🪐</p>
      <p v-else-if="$fetchState.error">😥 Une erreur est survenue 😥</p>
      <a-table v-else :columns="columns" :data-source="stars">
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
      stars: [],
      filterPlanet: 'all',
      filterMoons: 'all',
    }
  },
  async fetch() {
    await this.$axios
      .get('https://api.le-systeme-solaire.net/rest/bodies')
      .then((res) => {
        this.stars = res.data.bodies

        if (this.filterPlanet !== 'all' && this.filterMoons !== 'all') {
          this.stars = this.stars.filter((item) =>
            this.filterPlanet === 'planet'
              ? item.isPlanet === true
              : item.isPlanet === false && this.filterMoons === 'true'
              ? item.moons !== null
              : item.moons === null
          )
        }

        if (this.filterPlanet !== 'all') {
          this.stars = this.stars.filter((item) => {
            return this.filterPlanet === 'planet'
              ? item.isPlanet !== false
              : item.isPlanet === false
          })
        }

        if (this.filterMoons !== 'all') {
          this.stars = this.stars.filter((item) => {
            return this.filterMoons === 'moons'
              ? item.moons !== null
              : item.moons === null
          })
        }
      })
  },
}
</script>

<style scoped>
.filters {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.filters div {
  margin-right: 12px;
}

.ant-select {
  width: 150px;
}
</style>
