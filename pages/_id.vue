<template>
  <div class="container">
    <a-descriptions title="Star Info">
      <a-descriptions-item label="name"> {{ star.name }} </a-descriptions-item>
      <a-descriptions-item label="englishName">{{
        star.englishName
      }}</a-descriptions-item>
      <a-descriptions-item label="isPlanet">
        {{ star.name }}</a-descriptions-item
      >
      <a-descriptions-item label="moons">{{ star.moons }} </a-descriptions-item>
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
        value: {{ star.mass.massValue }}, exponent: {{ star.mass.massExponent }}
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
    </a-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      star: {},
    }
  },
  async fetch() {
    this.star = await this.$axios
      .get(`https://api.le-systeme-solaire.net/rest/bodies/${this.id}`)
      .then((res) => res.data)
  },
}
</script>

<style>
.ant-descriptions {
  width: 90%;
}
</style>
