import React, { Component } from "react";
import CourseForm from "./CourseForm";
import CourseList  from "./CourseList";


export default class Course extends Component{

    render(){
        return(
            <>
            <h1>In  Course</h1>
            <CourseForm/>
            <CourseList/>
            </>
        )
    }
}