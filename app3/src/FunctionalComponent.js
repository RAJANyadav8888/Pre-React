import {userState, useState} from "react";
export default () =>{
    //const statearr=usestatte(0);

    //const [value,setValue]=someArray;
    //console.log(someArray);
    //value:current Value
    //setValue:callback to update the value
    const [value,setValue]=useState(0);
    const [newVlaue,setNewValue]=useState(0);
    const onUpadateClickHandler =() =>{
        setValue(value+1);

    };

    const onUpadateNewValueClickHandler=()=>{
        setNewValue(newVlaue+1);
    };
    const onClickHandler=()=>{
        setValue(value+1);

    };
    const onClickHandler1=()=>{
        setValue(value-1);
    }
    return(
        <>
      
       

        <h2>Value:{value}</h2>
        <button onClick={onUpadateClickHandler}>Update</button>
        <button onClick={onUpadateNewValueClickHandler}>Update New value state</button>
        <button  onClick={onClickHandler}>Increement</button>
        <button  onClick={onClickHandler1}>Decrement</button>
        </>
    );
};