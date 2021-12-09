
import React, { Component } from "react";
import { connect } from "react-redux";

class CourseForm extends Component{
    state={
        coursename:"",
        coursefee:0,
    }
    onValueChangeHandler=(event)=>{
        const {name , value}= event.target;
        this.setState({[name]:value});

    }
    onSubmitChangeHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.addCourse(this.state);
       
    }
    render(){
        return(
            <>
            <form onSubmit={this.onSubmitChangeHandler} >
                <label>CourseName:</label>
                <input
                 name={"coursename"}
                 value={this.state.coursename}
                 onChange={this.onValueChangeHandler}
                />
                <br/>
                <br/>
                <label>CourseFee:</label>
                <input
                name={"coursefee"}
                value={this.state.coursefee}
                onChange={this.onValueChangeHandler}/>
                <br/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            </>

        )
    }
}
 const  mapStateToProps=(state)=>{
return{};
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addCourse:(payload)=>dispatch({type:"COURSE_ADD",payload:payload})
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseForm);