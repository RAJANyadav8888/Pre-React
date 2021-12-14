import React,{Component} from "react";
import ContextConsumerChild from "./ContextConsumerChild";
export default class ContextConsumer extends Component{
    render(){
        return(
            <>
            <h1>In ContextConsumer</h1>
            <ContextConsumerChild />
            </>
        )
    }

}