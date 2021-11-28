import axios from "axios";
import React, {Component} from "react";
export default class Post extends Component{
    state={
        Post:[],
        postsObject:{
            title:"",
            body:"",
            userId:1,
        }

    };
    
    onChangeHandler=(event)=> {
        const {name,value} =event.target;
        const postsObjectCopy=this.state.postsObject;
        postsObjectCopy[name]=value;
        this.setState({postsObject:postsObjectCopy});
    };
    onformSubmitClick=(event)=> {
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state.postsObject).then((Response)=>{
            console.log(Response);
            this.fetchData();
            alert("Created");
            this.setState({postsObject:{title:"",body:"",userId:1,},
        });
        });
    };

    onDeleteClickHandler =(id) =>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+ id).then((Response)=>{
          console.log(Response);
          this.fetchData();
          alert("Deleted")
        });
    }
    render(){
        return(
       <>
       <h1>I am in Post</h1>
       <form onSubmit={this.onformSubmitClick}>
           <lable>Title</lable>
           <input name="title" value={this.state.postsObject.title}
           onChange= {this.onChangeHandler}/>
           
           <label>Body</label>
          <input name="body" value={this.state.postsObject.body}
           onChange= {this.onChangeHandler}/>
           <button type="Submit">Submit</button>
       </form>

       {this.state.Post.map((posts,Index) =>(
          <div key={Index}>
           <div>
               {Index+1},{posts.title}
           </div>
           <button onClick={()=> {
               this.onDeleteClickHandler(Post.id);
               
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
    axios.get("https://jsonplaceholder.typicode.com/posts").then((Response)=> {
        console.log(Response.data);
        this.setState({Post:Response.data});
    });
}
}
