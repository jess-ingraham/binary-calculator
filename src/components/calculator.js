import React from 'react';
import {Bit} from './bits';
import {Total} from './total';

export class Calculator extends React.Component{
	//calculator will have all the needed bit children and the total children
	//when one bit is clicked, that bit will change to 1 and the total will be updated

	constructor(props){
		super(props);
		//state
		this.state = {
			bits:[0,0,0,0,0,0,0,0],
			total:0
		};

		//bind functions
		this.updateTotal = this.updateTotal.bind(this);
		this.renderBits = this.renderBits.bind(this);
		this.handleBitChange = this.handleBitChange.bind(this);
	}

	updateTotal(){
		const newTotal = this.state.bits.reduce((acc, val, ind)=>{
			console.log(acc, val, ind);
			if(val === 1){
				return acc + Math.pow(2, ind);
			}
			else{
				return acc;
			}
		});

		this.setState({total: newTotal});
	}

	handleBitChange(ind){
		console.log(`Bit ${ind} clicked, the value is ${Math.pow(2, ind)}`);
		const newBits = this.state.bits.map((val, index)=>{
			if(index === ind){
				return val === 0 ? 1 : 0;
			}
			else{
				return val;
			}
		});

		const newTotal = newBits.reduce((acc, val, ind)=>{
			console.log(acc, val, ind);
			if(val === 1){
				return acc + Math.pow(2, ind);
			}
			else{
				return acc;
			}
		});

		this.setState({bits: newBits, total:newTotal});
		//this.updateTotal();
	}

	renderBits(){
		const elems = this.state.bits.map((val, index)=>{
			return <Bit onClick={this.handleBitChange} value = {val} index = {index} />;
		});

		//console.log(elems);
		return elems;
	}



	//for each bit in the array, need to render a bit with the value

	render(){
		return (
			<div>
				<ul>
					{this.renderBits()}

				</ul>

				<div>
					<Total total={this.state.total}/>
				</div>

			</div>);
	}

}