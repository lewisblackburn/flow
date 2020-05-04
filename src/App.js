import React, { Component } from 'react'
import './App.css'
import $ from 'jquery'
import { api } from './assests/config'
import Head from './components/Head'
import MovieRow from './components/MovieRow'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.trending()
  }

  trending() {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log('Fetched data')
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster = 'https://image.tmdb.org/t/p/w185' + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error('Failed to fetch data')
      }
    })
  }

  search(searchTerm) {
    if (searchTerm === '') {
      this.trending()
    }
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${api}`
    $.ajax({
      url: url,
      success: (searchResults) => {
        console.log('Fetched data')
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error('Failed to fetch data')
      }
    })
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value
    this.search(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <Head searchChangeHandler={this.searchChangeHandler.bind(this)} />
        <div className="Container">
          <div className="Movies">{this.state.rows}</div>
        </div>
      </div>
    )
  }
}

export default App
