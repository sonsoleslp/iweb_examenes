import React, { Component } from 'react';
function ShoppingItem(props) {
	return <div className="ShoppingItem">
		<img src={props.url}/>
		<h2>{props.name}</h2> <h3>{props.price}</h3>
		{props.isOnSale ? <span>SALE!</span>: null}
		</div>;
}