import React from 'react';
import Product from './Product';
import {add, remove} from './actions';
import { connect } from 'react-redux';
class App extends React.Component {
render() {
 return <div>
    {
    this.props.products.map((product, index)=>{
     return <Product key={index}
       name={product.name}
       imgUrl={product.imgUrl}
       price={product.price}
       quantity={product.quantity}
       add={()=>this.props.dispatch(add(index))}
       remove={()=>this.props.dispatch(remove(index))} />
     })
    }
    <div>
     Total:
     {this.props.products.reduce((acc,product)=>{
        return acc + product.price*product.quantity},0)
     }
    </div>
 </div>
 }
}
function mapStateToProps(state) {
 return { ...state };
}
export default connect(mapStateToProps)(App);