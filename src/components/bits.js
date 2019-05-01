import React from 'react';

export class Bit extends React.Component{
	//the bit is stateless and will just know it if it set to 0 or 1
	//the default is 0
	//the bit will also hold it's own exponent
	//props = {index:i, value=0}
	constructor(props){
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(evt){

		this.props.onClick(this.props.index);
	}

	render(){
		return <li onClick = {this.onClick}>{this.props.value}</li>;
	}

}