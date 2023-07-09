import React, { Component } from 'react';
import './WatchList.css';
import WatchItem from '../WatchItem/WatchItem';

export class WatchList extends Component {
	render() {
		return (
			<div className='watch-list'>
				{this.props.movies.map((movie) => {
          return (
            <WatchItem 
              key={movie.id}
              movie={movie}
              onToggle={this.props.onToggle}
              onDelete={this.props.onDelete}
            />
          )
        })}
			</div>
		);
	}
}

export default WatchList;
