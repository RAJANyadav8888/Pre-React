import React,{Component} from "react";
import { useState } from "react";
import OnlineOrderChild from "./OnlineOrderChild";
//import withOrder from "./withOrder";
const OnlineOrder =(props)=>{
    console.log(props);
    const status =[
        "Order Placed",
        "Pending",
        "Preparing",
        "out for Delivery",
        "Delivered",
    ];
    const [value ,setValue]=useState(0);
    const onClickHandler = ()=>{
       setValue(value+1);
    };
    return(
        <>
        <h1>Online order</h1>
        <div>Current Status:{status[value]}</div>
        <button onClick={onClickHandler}>Next Status</button>
        <OnlineOrderChild onClickHandler={onClickHandler}/>
        </>
    );
};

export  default OnlineOrder;