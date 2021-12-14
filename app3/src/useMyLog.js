import { useEffect } from "react";
export default(value) =>{
    //useEffect
    useEffect (()=>{
        console.log(value);//API call to log it at server side 
    },[value])
}