import React,{Component} from "react";
export default class ErrorBoundry extends Component{

    state={
        hasError:false,
    };
    static getDerivedStateFromError(error){
        return{
            hasError:true,
        }
    }

    componentDidCatch(error,info){

        //server error to serrv er via  service
        console.log(error);
        console.log(info);
    }
    render(){
        if(this.state.hasError){
            return<h1>Somthing Went WRONG please check</h1>;
        }else {
            return this.props.children;
        }
    }
}
