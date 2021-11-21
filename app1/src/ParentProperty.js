import React, {Component} from "react";
import ChildProperty from "./ChildPropertyComponent";
export default class ParentProperty extends Component{
    state={
        balance:0,
    }
    onProfit =() =>{
        this.setState({balance:this.state.balance+1})
        
    }
    onExpens =() =>{
        if(this.state.balance === 0){
            return;
        }
        this.setState({balance:this.state.balance-1})
    }
    render (){
        return <>
        <h1>Parent:{this.state.balance}</h1>
        <button onClick={this.onProfit}> family Profit</button>
        <button onClick={this.onExpens}> family Expens</button>
        <ChildProperty name="Rajan" onProfit={this.onProfit} onExpens={this.onExpens}/>
        <ChildProperty name="Lakhan" onProfit={this.onProfit} onExpens={this.onExpens}/>
    
        </>
    }
}