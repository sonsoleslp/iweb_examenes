import React, { Component } from 'react';

export default class MyItem extends Component {
	render(){
		return <li>
		<p><b>{this.props.productName}</b> - <i>{this.props.productPrice}€</i></p>
		<img src={this.props.productPicture}/><br/>
		<button onClick={e=>{this.props.onToggleSelect(this.props.position)}}>
		{this.props.productIsSelected ? "QUITAR":"AÑADIR"}</button>
		</li>
	}
}