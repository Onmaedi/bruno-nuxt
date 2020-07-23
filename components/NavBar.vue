<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <nuxt-link to="/">
      <b-navbar-brand>Movies</b-navbar-brand>
    </nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit="submit">
          <b-form-input
            v-model="form.title"
            :value="form.title"
            size="sm"
            class="mr-sm-2"
            placeholder="Procurar"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
      },
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      // TODO: change this for the api request
      if (!this.form.title) {
        this.$store.commit('movies/all')
      } else {
        this.$store.commit('movies/all')
        this.$store.commit('movies/find', this.form.title)
      }
    },
  },
}
</script>

<style></style>
