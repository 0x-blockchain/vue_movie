<template>
  <img :src="imgSrc" class="movie-screen" alt="movie" />
  <div class="d-flex justify-content-between">
    <h6 class="text-white line-height-50">{{ title }}</h6>
    <h6 class="text-white published-year">{{ publishedYear }}</h6>
  </div>
  <div>
    <p class="text-white">{{ genre }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MovieCard',
  props: {
    imgSrc: {
      type: String,
      default:
        'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    },

    title: {
      type: String,
      default: 'sample movie',
    },
    publishedYear: {
      type: String,
      default: '1998',
    },
    genre: {
      type: String,
      default: 'This is movie',
    },
  },
}
</script>
<style>
.card-bg {
  background-color: rgb(51, 47, 47);
}

.movie-screen {
  object-fit: cover;
  width: 100%;
  width: 300px;
  height: 444px;
}

.published-year {
  border: 1px solid;
  padding: 2px 9px;
  margin: 17px 0px;
}

.line-height-50 {
  line-height: 50px;
}
</style>
