import React, {Component} from "react";
import TrueComponent from "./TrueComponent";
export default class ConditionComponent extends Component{
    state={
        showText:true,
    }
    onToggleshowText= () =>{
        this.setState({showText:!this.state.showText })
    }
    render(){
        return (<>
        {this.state.showText && <h1> from ConditionComponent </h1>}
        <button onClick={this.onToggleshowText}>{ this.state.showText ? "hide":"show"}</button>

         </>
        );
    }
}