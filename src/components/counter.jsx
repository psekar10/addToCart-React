import React, {Component} from 'react';

class Counter extends Component {
	state = {
		count: this.props.counter.value,
		tags: ['tag1','tag2','tag3']
	};
	styles = {
		fontSize: 10,
		fontWeight: 'bold'
	}
	render() {
		return (
			<React.Fragment>
				{this.props.children}
				<div className="row">

					<div className="col-1">
						<span className={this.getBadge()}>{this.formatCount()}</span>
					</div>
					<div className="col">
						<button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
						<button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value ===0 ? true: false}>-</button>
						<button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm ">X</button>
						<ul>
							{this.getList()}
						</ul>
					</div>
				</div>
				
			</React.Fragment>
		);
	}
	getDisabled() {
		const label = "disabled";
		return label;
	}
	getList(){
		let lists = this.state.tags;
		let arr = lists.map(x => <li key={x}>{x}</li>);
		let arr1 = (lists.length === 0) ? <p>NO tags</p> : arr;
		return arr1;
	}
	getBadge(){
		let classes = "badge  m-2 ";
		classes += (this.props.counter.value===0) ? "badge-warning" : "badge-primary" ;
		return classes;
	}
	formatCount() {
		let count = this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
		return count;
	}
}

export default Counter;