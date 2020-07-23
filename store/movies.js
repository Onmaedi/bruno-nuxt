export const state = () => ({
  titles: [],
  counter: 0,
  single_movie: {},
})

export const mutations = {
  // TODO: convert to api find all movies
  all(state) {
    state.titles = [
      {
        title: 'Avengers 1',
        id: 1,
        image: 'https://picsum.photos/600/300/?image=25',
        synopsis: 'This is an synopsis',
      },
      {
        title: 'Avengers 2',
        id: 2,
        image: 'https://picsum.photos/600/300/?image=25',
        synopsis: 'This is an synopsis',
      },
    ]
  },
  find(state, title) {
    // TODO: convert to api request
    state.titles = state.titles.filter((movie) => movie.title === title)
  },

  findId(state, paramId) {
    // TODO: convert to api request single movie
    const titulos = [
      {
        title: 'Avengers 1',
        id: 1,
        image: 'https://picsum.photos/600/300/?image=25',
        synopsis: 'This is an synopsis',
      },
      {
        title: 'Avengers 2',
        id: 2,
        image: 'https://picsum.photos/600/300/?image=25',
        synopsis: 'This is an synopsis',
      },
    ]

    state.single_movie = titulos.find((item) => item.id === Number(paramId))
  },
}
