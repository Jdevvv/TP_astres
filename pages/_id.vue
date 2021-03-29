<template>
  <div class="content">
    <a-button type="primary" class="back-button" @click="$router.go(-1)"
      >Back</a-button
    >
    <p v-if="$fetchState.pending">🪐 Chargement de la planète... 🪐</p>
    <p v-else-if="$fetchState.error">😥 Une erreur est survenue 😥</p>
    <div v-else>
      <a-icon
        type="heart"
        :style="{ fontSize: '28px', color: '#ff0000' }"
        :theme="filled ? 'filled' : 'outlined'"
        class="fav-button"
        @click="likePlanet"
      />
      <a-descriptions :title="star.name">
        <a-descriptions-item label="name">
          {{ star.name }}
        </a-descriptions-item>
        <a-descriptions-item label="englishName">{{
          star.englishName
        }}</a-descriptions-item>
        <a-descriptions-item label="isPlanet">
          {{ star.isPlanet }}</a-descriptions-item
        >

        <a-descriptions-item label="semimajorAxis"
          >{{ star.semimajorAxis }}
        </a-descriptions-item>
        <a-descriptions-item label="perihelion"
          >{{ star.perihelion }}
        </a-descriptions-item>
        <a-descriptions-item label="aphelion"
          >{{ star.aphelion }}
        </a-descriptions-item>
        <a-descriptions-item label="eccentricity"
          >{{ star.eccentricity }}
        </a-descriptions-item>
        <a-descriptions-item label="inclination"
          >{{ star.inclination }}
        </a-descriptions-item>
        <a-descriptions-item v-if="star.mass" label="mass">
          value: {{ star.mass.massValue }}, exponent:
          {{ star.mass.massExponent }}
        </a-descriptions-item>
        <a-descriptions-item v-if="star.vol" label="vol">
          value: {{ star.vol.volValue }}, exponent: {{ star.vol.volExponent }}
        </a-descriptions-item>
        <a-descriptions-item label="density">
          {{ star.density }}</a-descriptions-item
        >
        <a-descriptions-item label="gravity">
          {{ star.gravity }}</a-descriptions-item
        >
        <a-descriptions-item label="escape"
          >{{ star.escape }}
        </a-descriptions-item>
        <a-descriptions-item label="meanRadius">
          {{ star.meanRadius }}</a-descriptions-item
        >
        <a-descriptions-item label="equaRadius">
          {{ star.equaRadius }}</a-descriptions-item
        >
        <a-descriptions-item label="polarRadius">
          {{ star.polarRadius }}</a-descriptions-item
        >
        <a-descriptions-item label="flattening">
          {{ star.flattening }}</a-descriptions-item
        >
        <a-descriptions-item label="dimension"
          >{{ star.dimension }}
        </a-descriptions-item>
        <a-descriptions-item label="sideralOrbit">
          {{ star.sideralOrbit }}</a-descriptions-item
        >
        <a-descriptions-item label="sideralRotation"
          >{{ star.sideralRotation }}
        </a-descriptions-item>
        <a-descriptions-item v-if="star.aroundPlanet" label="vol">
          planet: {{ star.aroundPlanet.planet }}
        </a-descriptions-item>
        <a-descriptions-item label="discoveredBy"
          >{{ star.discoveredBy }}
        </a-descriptions-item>
        <a-descriptions-item label="discoveryDate">
          {{ star.discoveryDate }}</a-descriptions-item
        >
        <a-descriptions-item label="alternativeName">
          {{ star.alternativeName }}</a-descriptions-item
        >
        <a-descriptions-item label="axialTilt"
          >{{ star.axialTilt }}
        </a-descriptions-item>
        <a-descriptions-item v-if="star.moons">
          <a-collapse v-model="activeKey">
            <a-collapse-panel key="1" header="Moons list">
              <ul v-for="moon in star.moons" :key="moon.id">
                <li>
                  <nuxt-link :to="{ path: `/${slugify(moon.moon)}` }">{{
                    moon.moon
                  }}</nuxt-link>
                </li>
              </ul>
            </a-collapse-panel>
          </a-collapse>
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      filled: false,
      star: {},
    }
  },
  async fetch() {
    await this.$axios
      .get(`https://api.le-systeme-solaire.net/rest/bodies/${this.id}`)
      .then((res) => {
        this.star = res.data
        this.filled = this.$store.state.favorites.favorites.some(
          (el) => el.id === this.star.id
        )
      })
  },

  methods: {
    likePlanet() {
      this.filled = !this.filled

      if (!this.filled) {
        this.$store.commit('favorites/remove', this.star)
        this.$message.success('Removed from favorites!')
      } else {
        this.$store.commit('favorites/add', this.star)
        this.$message.success('Added to favorites!')
      }
    },

    slugify(str) {
      const map = {
        a: 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
        e: 'é|è|ê|ë|É|È|Ê|Ë',
        i: 'í|ì|î|ï|Í|Ì|Î|Ï',
        o: 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
        u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        c: 'ç|Ç',
        n: 'ñ|Ñ',
      }

      for (const pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern).toLowerCase()
      }

      return str
    },
  },
}
</script>

<style>
.ant-descriptions {
  width: 90%;
}

.back-button {
  margin-bottom: 24px;
}

.fav-button {
  margin-bottom: 12px;
}
</style>
