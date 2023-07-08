import React, { Component } from 'react'
import './WatchItem.css'
export class WatchItem extends Component {
  render() {
    // console.log(this.props)
    const movie = this.props.movie;
    return (
		<div className={'watch-item ' + (movie.isDone ? 'done' : '')}>
			<p
				className='content'
				onClick={() => this.props.onToggle(movie.id)}
			>
				{movie.title}
			</p>
			<span className='delete-btn'>X</span>
		</div>
	);
  }
}

export default WatchItem