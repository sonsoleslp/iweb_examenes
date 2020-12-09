import React from 'react';
export default class CustomButton extends React.Component {
  render(){
    return <button onClick={this.props.buttonFunction}>
          Button {this.props.index} :  {this.props.buttonName}
      </button>
  }
}
