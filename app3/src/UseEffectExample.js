import {useEffect,userState} from "react";
import { useState } from "react/cjs/react.development";
import useMyLog from "./useMyLog";
import useUserStatus from "./useUserStatus";
export default ()=>{
    const[value,setValue]=useState(0);
    const[newvalue,setnewValue]=useState(0);
   // useMyLog(value);
    const userStatus=useUserStatus(value);
    
    const onClickHandler=()=>{
        setValue(value+1);
    };
    const onNewValueClickHandler=()=>{
        setnewValue(newvalue+1);
    };
    // useEffect(()=>{
    //    console.log("render");
    // });
    // //useEffect(()=>{
    //    console.log("renderd");
     // },[]);//execute bonly once after component is renderd
     
    // useEffect(()=>{
    //     console.log("value Updated");
    //     return()=>{
    //         console.log("clean up");
    //     };
    // },[value]);
    
    return(
        <>
     <h1>Use effect Example component</h1>
     <div>User Status:{userStatus}</div>
     <div>Value:{value}</div>
     <div>NewVlaue:{newvalue}</div>
     <button onClick={onClickHandler}>Click Me</button>
     <button onClick={onNewValueClickHandler}>Click me to update new value</button>
        </>
    );
};