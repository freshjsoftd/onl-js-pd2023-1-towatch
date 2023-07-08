import './App.css';
import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';

import React, { Component } from 'react';

/* const moviesArray = [
  {
    id: 1,
    title: 'Movie 1',
    isDone: false,
  },
  {
    id: 2,
    title: 'Movie 2',
    isDone: false,
  },
  {
    id: 3,
    title: 'Movie 3',
    isDone: false,
  },
  {
    id: 4,
    title: 'Movie 4',
    isDone: false,
  },
] */

export class App extends Component {
	state = {
		toWatchMovies: [
			{
				id: 1,
				title: 'Movie 1',
				isDone: false,
			},
			{
				id: 2,
				title: 'Movie 2',
				isDone: false,
			},
			{
				id: 3,
				title: 'Movie 3',
				isDone: false,
			},
			{
				id: 4,
				title: 'Movie 4',
				isDone: false,
			},
		]
	};
  toggleToWatch = (id) => {
    this.setState({
		toWatchMovies: this.state.toWatchMovies.map((movie) => {
			if (movie.id !== id) {
				return movie;
			}
			return { ...movie, isDone: !movie.isDone };
		}),
	});
  }
	render() {
		// console.log(this.setState);
		return (
			<>
				<WatchList
					movies={this.state.toWatchMovies}
					onToggle={this.toggleToWatch}
				/>
				<WatchForm />
			</>
		);
	}
}

export default App;
