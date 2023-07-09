import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';

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
		toWatchMovies: [],
	};

	saveToWatch = () => {
		localStorage.setItem(
			'movies',
			JSON.stringify(this.state.toWatchMovies)
		);
	};

	toggleToWatch = (id) => {
		this.saveToWatch();
		this.setState(() => {
			return {
				toWatchMovies: this.state.toWatchMovies.map((movie) => {
					if (movie.id !== id) {
						return movie;
					}
					return { ...movie, isDone: !movie.isDone };
				}),
			};
		});
		
	};

	addToWatch = (toWatch) => {
		toWatch.id = nanoid();
		this.setState({
			toWatchMovies: [toWatch, ...this.state.toWatchMovies],
		});
		this.saveToWatch();
	};

	deleteToWatch = (id) => {
		this.setState({
			toWatchMovies: [
				...this.state.toWatchMovies.filter((movie) => movie.id !== id),
			],
		});
		this.saveToWatch();
	};

	componentDidMount() {
		const fromLocalStorage = JSON.parse(
			localStorage.getItem(
				'movies',
				JSON.stringify(this.state.toWatchMovies)
			)
		);
		if (!fromLocalStorage) {
			this.setState({
				toWatchMovies: this.state.toWatchMovies,
			});
		} else {
			this.setState({
				toWatchMovies: [...fromLocalStorage],
			});
		}
	}

	render() {
		return (
			<>
				<WatchList
					movies={this.state.toWatchMovies}
					onToggle={this.toggleToWatch}
					onDelete={this.deleteToWatch}
				/>
				<WatchForm
					onSubmit={this.addToWatch}
					onSave={this.saveToWatch}
				/>
			</>
		);
	}
}

export default App;
