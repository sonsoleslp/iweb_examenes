import React from 'react';
export default class Product extends React.Component {
	render() {
		return (
			<div className="product">
				<img src={this.props.imgUrl}/>
				<h2>{this.props.name}</h2>
				<p>{this.props.price} € </p>
				<div className="quantity">
					<button onClick={this.props.remove}>-</button>
					<span>{this.props.quantity}</span>
					<button onClick={this.props.add}>+</button>
				</div>
			</div>
			);
		}
	}