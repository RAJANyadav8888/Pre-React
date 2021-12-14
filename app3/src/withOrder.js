import { useState } from "react";
export default(WrappedComponent) =>{
    //return test component
    return()=>{
        const [value,setValue]=useState(0);
        const onClickHandler =() =>{
            setValue(value +1);

        };
        return <WrappedComponent value={value} onClickHandler={onClickHandler}/>

        
    };
    
};