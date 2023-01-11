<template>
  <div class="bg-secondary">
    <div class="container bg-head">
      <p class="font-color-red pt-3">netflixroutlette</p>
      <h1 class="text-white d-flex justify-content-start pt-5 pl-5">FIND YOUR MOVIE</h1>
      <div class="d-flex py-5 pl-5 line-height-50">
        <BaseInput
          class="custom-input line-height-50"
          placeholder="Search"
          @input="(event) => (pattern.searchValue = event.target.value)"
        ></BaseInput>
        <BaseButton class="btn-red" @click="onGet()">Search</BaseButton>
      </div>
      <div class="d-flex">
        <h5 class="text-white text-uppercase line-height-57">search by</h5>
        <BaseToggleButton
          item1="title"
          item2="cengre"
          @click="pattern.isTitle = !pattern.isTitle"
        ></BaseToggleButton>
      </div>
    </div>
    <div class="sort-field container">
      <div class="d-flex justify-content-end">
        <h5 class="text-white text-uppercase line-height-57">sort by</h5>
        <BaseToggleButton item1="release date" item2="rating"></BaseToggleButton>
      </div>
    </div>
    <div class="container bg-head">
      <div class="row py-5">
        <div
          v-for="item in movieLists"
          :key="item?.Title"
          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
        >
          <movie-card
            :img-src="item?.Poster"
            :published-year="item?.Year"
            :title="item?.Title"
            :genre="item?.Genre"
          ></movie-card>
        </div>
      </div>
    </div>
    <div class="footer">
      <p class="text-center font-color-red py-3">netflixroutlette</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import axios from 'axios'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseToggleButton from '@/components/BaseToggleButton.vue'
import MovieCard from '@/components/MovieCard.vue'

const apikey = '8036c8bd'
export default defineComponent({
  name: 'HomePage',
  components: { BaseInput, BaseButton, BaseToggleButton, MovieCard },
  setup() {
    const state = reactive({
      pattern: {
        isTitle: true,
        searchValue: 'dogs',
      },
    })
    return { ...toRefs(state) }
  },
  data(): {
    movieLists: Array<JSON>
  } {
    return {
      movieLists: [
        {
          Actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
          Awards: 'Won 1 Oscar. 70 wins & 75 nominations total',
          BoxOffice: '$107,928,762',
          Country: 'United States',
          DVD: '20 Aug 2002',
          Director: 'Quentin Tarantino',
          Genre: 'Crime, Drama',
          Language: 'English, Spanish, French',
          Metascore: '94',
          Plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
          Production: 'N/A',
          Rated: 'R',
          Ratings: [
            { Source: 'Internet Movie Database', Value: '8.9/10' },
            { Source: 'Rotten Tomatoes', Value: '92%' },
          ],
          Released: '14 Oct 1994',
          Response: 'True',
          Runtime: '154 min',
          Title: 'Pulp Fiction',
          Type: 'movie',
          Website: 'N/A',
          Writer: 'Quentin Tarantino, Roger Avary',
          Year: '1994',
          imdbID: 'tt0110912',
          imdbRating: '8.9',
          imdbVotes: '2,052,525',
        },
        {
          Actors: 'Rami Malek, Lucy Boynton, Gwilym Lee',
          Awards: 'Won 4 Oscars. 48 wins & 80 nominations total',
          BoxOffice: '$216,668,042',
          Country: 'United Kingdom, United States',
          DVD: '22 Jan 2019',
          Director: 'Bryan Singer',
          Genre: 'Biography, Drama, Music',
          Language: 'English, British Sign ',
          Metascore: '49',
          Plot: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg',
          Production: 'N/A',
          Rated: 'PG-13',
          Ratings: [
            { Source: 'Internet Movie Database', Value: '7.9/10' },
            { Source: 'Rotten Tomatoes', Value: '60%' },
          ],
          Released: '02 Nov 2018',
          Response: 'True',
          Runtime: '134 min',
          Title: 'Bohemian Rhapsody',
          Type: 'movie',
          Website: 'N/A',
          Writer: 'Anthony McCarten, Peter Morgan',
          Year: '2018',
          imdbID: 'tt1727824',
          imdbRating: '7.9',
          imdbVotes: '539,401',
        },
        {
          Actors: 'Mathew Baynton, Simon Farnaby, Martha Howe-Douglas',
          Awards: 'N/A',
          BoxOffice: 'N/A',
          Country: 'United Kingdom',
          DVD: '18 Nov 2016',
          Director: 'Richard Bracewell',
          Genre: 'Comedy, Family, History',
          Language: 'English',
          Metascore: '60',
          Plot: "What really happened during Shakespeare's 'Lost Years'? Hopeless lute-player Bill Shakespeare leaves his home to follow his dream.",
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNjkxOTkzNDgwMF5BMl5BanBnXkFtZTgwNDQxNTg4NzE@._V1_SX300.jpg',
          Production: 'BBC Films',
          Rated: 'Not Rated',
          Ratings: [
            { Source: 'Internet Movie Database', Value: '6.5/10' },
            { Source: 'Rotten Tomatoes', Value: '90%' },
          ],
          Released: '18 Sep 2015',
          Response: 'True',
          Runtime: '94 min',
          Title: 'Bill',
          Type: 'movie',
          Website: 'N/A',
          Writer: 'Laurence Rickard, Ben Willbond',
          Year: '2015',
          imdbID: 'tt2978576',
          imdbRating: '6.5',
          imdbVotes: '2,825',
        },
        {
          Actors: 'Sam Elliott, Timothy Hutton, James Cromwell',
          Awards: 'N/A',
          BoxOffice: 'N/A',
          Country: 'United States',
          DVD: '03 Oct 2006',
          Director: 'Robert Markowitz',
          Genre: 'Thriller',
          Language: 'English',
          Metascore: 'N/A',
          Plot: 'A C.I.A. Agent steps in to stop a former Special Forces Operative on a for-hire mission that poses a global threat.',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg',
          Production: 'N/A',
          Rated: 'Not Rated',
          Ratings: [{ Source: 'Internet Movie Database', Value: '5.6/10' }],
          Released: '09 Apr 2006',
          Response: 'True',
          Runtime: '92 min',
          Title: 'Avenger',
          Type: 'movie',
          Website: 'N/A',
          Writer: 'Alan Sharp, Frederick Forsyth',
          Year: '2006',
          imdbID: 'tt0473445',
          imdbRating: '5.6',
          imdbVotes: '994',
        },
        {
          Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
          Awards: 'Won 4 Oscars. 158 wins & 220 nominations total',
          BoxOffice: '$292,587,330',
          Country: 'United States, United Kingdom',
          DVD: '07 Dec 2010',
          Director: 'Christopher Nolan',
          Genre: 'Action, Adventure, Sci-Fi',
          Language: 'English, Japanese, French',
          Metascore: '74',
          Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
          Production: 'N/A',
          Rated: 'PG-13',
          Ratings: [
            { Source: 'Internet Movie Database', Value: '8.8/10' },
            { Source: 'Rotten Tomatoes', Value: '87%' },
          ],
          Released: '16 Jul 2010',
          Response: 'True',
          Runtime: '148 min',
          Title: 'Inception',
          Type: 'movie',
          Website: 'N/A',
          Writer: 'Christopher Nolan',
          Year: '2010',
          imdbID: 'tt1375666',
          imdbRating: '8.8',
          imdbVotes: '2,349,837',
        },
        {
          Actors: 'Dragos Bucur, Gheorghe Visu, Vlad Ivanov',
          Awards: '16 wins & 16 nominations',
          BoxOffice: 'N/A',
          Country: 'Romania, France, Bulgaria, Qatar',
          DVD: '02 Nov 2021',
          Director: 'Bogdan Mirica',
          Genre: 'Drama, Thriller',
          Language: 'Romanian',
          Metascore: '55',
          Plot: 'Roman returns to the land he has just inherited from his grandfather. Fully decided to sell this vast but desolate property, he is warned by the local cop that his grandfather was a local crime lord and his men will not let go of ...',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BYWJiYjI1MzEtMzQzOS00ZjkxLWI3NDAtMzNkODhjYjM0Y2ExXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg',
          Production: 'N/A',
          Rated: 'N/A',
          Ratings: [
            { Source: 'Internet Movie Database', Value: '7.0/10' },
            { Source: 'Rotten Tomatoes', Value: '67%' },
          ],
          Released: '10 Sep 2021',
          Response: 'True',
          Runtime: '104 min',
          Title: 'Dogs',
          Type: 'movie',
          Website: 'N/A',
          Writer: 'Bogdan Mirica',
          Year: '2016',
          imdbID: 'tt5088794',
          imdbRating: '7.0',
          imdbVotes: '2,975',
        },
      ],
    }
  },
  methods: {
    onGet() {
      axios
        .get(
          `http://www.omdbapi.com/?${this.pattern.isTitle ? 't' : 's'}=${
            this.pattern.searchValue
          }&apikey=${apikey}`
        )
        .then((response) => {
          if (this.pattern.isTitle) {
            this.movieLists = [response.data]
          } else {
            this.movieLists = response.data.Search
          }
        })
    },
  },
})
</script>
<style lang="scss">
.font-color-red {
  color: rgb(235 104 104);
}

.bg-head {
  background-color: rgb(51, 47, 47);
}

.btn-red {
  background-color: rgb(235 104 104);
  color: white;
  text-transform: uppercase;
  padding: 10px 50px 10px 50px;
  border-radius: 6px;
  border-color: transparent;
}

.custom-input {
  height: 45px;
  background: #83817f;
  margin-right: 4px;
  border-radius: 4px;
  border: 1px solod;
  border-color: transparent;
  width: 450px;
  color: white;
}

.line-height-50 {
  line-height: 50px;
}

.sort-field {
  padding-top: 10px;
  padding-bottom: 10px;
}

.line-height-57 {
  line-height: 57px;
}
</style>
