import React, {Component} from "react";
export default class DynamicClass extends Component{
    state={
        isTrue:true,
        colorlist:["red","yellow","green","blue","orange"],
        incrementer:0,
        
        };
        onclickhandler=()=>{
        this.setState({isTrue:!this.state.isTrue});
        }
        onclickUpdatehandler=()=>{
        console.log("In handler");
        console.log((this.state.incrementer+1)%5);
        this.setState({incrementer:(this.state.incrementer+1)%5});
        }
        render(){
        return (
        
        <>
        <h1 className="my-class">In Dymnamic class</h1>
        <div className={this.state.isTrue?"my-true-div":"my-false-div"}>
        In div with {this.state.isTrue?"true":"false"} condition
        </div>
        <div style={{backgroundColor:this.state.colorlist[this.state.incrementer]}}>
        In dynamic style div
        </div>
        
        {/* <button onClick={this.onclickhandler}> toggle</button> */}
        <button onClick={this.onclickUpdatehandler}> Update</button>
        </>
        );
        }
        
        }