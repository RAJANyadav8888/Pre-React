import React, {Component} from "react";
export default class ChildProperty extends Component{
    state={
        balance:0,
    }
    onChildProfit =() =>{
        this.setState({balance:this.state.balance+1})
        
    }
    onChildExpens =() =>{
        if(this.state.balance === 0){
            return;
        }
        this.setState({balance:this.state.balance-1})
        
    }
    render(){
        const onExpensClick =() =>{
            console.log("from onProfitClick");
            this.onChildExpens();
            onExpens();
        }
        const onProfitClick =() =>{
            console.log("from onProfitClick");
            this.onChildProfit();
            onProfit();
        }

        const {name,onProfit, onExpens}=this.props;
        return <>
        <h1>{name}:{this.state.balance}</h1>
       {/* <button onClick={onProfit}> Profit</button> */}
        <button onClick={ onExpensClick}> Expens</button>
        <button onClick={onProfitClick}> Profit</button>
        </>

    }
}