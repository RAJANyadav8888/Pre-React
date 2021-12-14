import React,{Component,} from "react";
import { PersonConsumer } from "./PersonContext";
export default class ContextConsumerChild extends Component{
    render(){
        return(
            <>
            <h1>In ContextConsumerChild</h1>
            <PersonConsumer>
                {
                    (value) =>{
                        return(
                            <h2>the latest value is context is name is {value.name}  and age is {""} {value.age}{""}</h2>
                        )
                    }
                }
            </PersonConsumer>
            
            </>
        )
    }

}