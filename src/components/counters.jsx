import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		return (
			<div>
				<button onClick={()=>this.props.onReset()} className="btn btn-primary btn-sm">Reset</button>
				{this.props.counters.map(counter => 
					<Counter key = {counter.id} onDelete={this.props.onDelete}
					 counter = {counter}
					 onDecrement={this.props.onDecrement}
					 onIncrement={this.props.onIncrement}>
						<h3>#Counter {counter.id}</h3>
					</Counter>
					)}
			</div>
		);
	}

}

export default Counters;

