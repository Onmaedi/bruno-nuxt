<template>
  <section>
    <NavBar />
    <b-container>
      <h1>
        {{ movie.title }}
      </h1>
    </b-container>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    movie() {
      return this.$store.state.movies.single_movie
    },
  },
  mounted() {
    this.$store.commit('movies/findId', this.id)
  },
}
</script>

<style></style>
