import React, {Component} from "react";
import axios from "axios";
export default class todo extends Component{
    state={
      todo:[],
    }
    onDeleteClickHandler =(id) =>{
        axios.delete("https://jsonplaceholder.typicode.com/todos/"+ id).then((Response)=>{
          console.log(Response);
          this.fetchData();
          alert("Deleted")
        });
    }

    
    render(){
        return(
       <>
       <h1>I am in todo</h1>
       {this.state.todo.map((Todo,Index) =>(
          <div key={Index}>
           <div>
               {Index+1},{Todo.title}
           </div>
           <button onClick={()=> {
               this.onDeleteClickHandler(todo.id);
               
           }}>
               Deleted</button>
           <br/>
          </div> 
       ))}
       </>
        );
    };



    componentDidMount() {
        this.fetchData();
    }
    fetchData(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then((Response)=> {
            console.log(Response.data);
            this.setState({todo:Response.data});
        });
    }
}