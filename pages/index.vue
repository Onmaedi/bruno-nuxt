<template>
  <div>
    <NavBar />
    <b-container>
      <br />
      <b-row class="justify-content-center">
        <MovieCard
          v-for="movie of movies"
          :id="movie.id"
          :key="movie.id"
          :title="movie.title"
          :image="movie.image"
          synopsis="This is an synopsis"
          class="mr-2"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import MovieCard from '@/components/MovieCard'

export default {
  components: {
    MovieCard,
    NavBar,
  },

  computed: {
    movies() {
      return this.$store.state.movies.titles
    },
  },
  mounted() {
    this.$store.commit('movies/all')
  },
}
</script>

<style></style>
