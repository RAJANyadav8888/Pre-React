import { ReactDom } from "react";
export default () =>{
    return ReactDom.createPortal(
        <h1>In PORTAL DEMO</h1>,
        document.getElementById("root-portal")

    );
};