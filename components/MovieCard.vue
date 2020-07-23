<template>
  <b-card
    :title="title"
    :img-src="image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text> {{ synopsis.slice(0, 40) }}... </b-card-text>
    <nuxt-link :to="`/read/${id}`">
      <b-button variant="primary">Ler mais</b-button>
    </nuxt-link>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    synopsis: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
