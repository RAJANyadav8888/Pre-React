import React, {Component} from "react";
export default class LifeCycle extends Component{
    constructor () {
        super();
        console.log(" in constructor");
    }
    render(){
        console.log(" In Render")
        return <h1>In LifeCycle</h1>;
    }
    componentDidMount(){
        console.log("in componentDidMount");
    }
}