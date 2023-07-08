import React, { Component } from 'react';
import './WatchList.css';
import WatchItem from '../WatchItem/WatchItem';

export class WatchList extends Component {
	render() {
    // console.log(this.props)
		return (
			<div className='watch-list'>
				{this.props.movies.map((movie) => {
          return (
            <WatchItem 
              key={movie.id}
              movie={movie}
              onToggle={this.props.onToggle}
            />
          )
        })}
			</div>
		);
	}
}

export default WatchList;
