import React,{Component} from "react";
export default class ClassComponent extends Component{
    state={
        value:0,
    };

    onClickHandler =()=>{
        this.setState({value:this.state.value+1});
    };
    render(){
        return(
            <>
            <h1>value:{this.state.value}</h1>
            <button  onClick={this.onClickHandler}>Increment</button>
            </>
        );
    }
}