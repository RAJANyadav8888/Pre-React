import axios, { Axios } from "axios";
import React,{Component} from "react";
export default class Post extends Component{
    state={
        posts:[],
        isEditMode:false,
        postObject:{
            title:"",
            body:"",
            userId:1,
        },
    }
    onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/" +id).then((response)=>{
            console.log(response);
            this.fetchData();
            alert("Deleted");
        });
    };
    onEditClickHandler=(id)=>{
        //get specific object by id from the list
        const editObject= this.state.posts.find((post)=>post.id===id);

        //set the object to state.postObject
        this.setState({postObject:editObject, isEditMode: true})
    };
    onCancelClickHandler=(event)=>{
        event.preventDefault();
        this.setState({
            postObject:{
                title:"",
                body:"",
                userId:1,
            },
            isEditMode:false,
        });

    };
    onChangeHandler=(event)=>{
        const{name, value}=event.target;
        const postObjectCopy=this.state.postObject;
        postObjectCopy[name]=value;
        this.setState({postObject:postObjectCopy})
    }
    onFormSubmitClick=(event)=>{
        event.preventDefault();
        console.log(this.state);

        if(this.state.isEditMode){
            //edit
            axios.put("https://jsonplaceholder.typicode.com/posts/" + this.state.postObject.id, this.state.postObject).then(
                (response)=>{
                    console.log(response);
                    this.fetchData();
                    alert("Updated");
                    this.resetState();
                    
                }
            )
        }else{
            //save
            axios.post("https://jsonplaceholder.typicode.com/posts", this.state.postObject).then((response)=>{
                console.log(response);
                this.fetchData();
                alert("Created");
                this.setState({postObject:{
                    title:"",
                    body:"",
                }})
            })

        }

        
    }
    
    resetState() {
        this.setState({
            postObject: {
                title: "",
                body: "",
                userId: 1,
            },
            isEditMode: false,
        });
    }

    render(){
        return(
            <>
            <h1>IN POST </h1>
            <form onSubmit={this.onFormSubmitClick}>
                <label>Title</label>
                <input name="title" value={this.state.postObject.title} onChange={this.onChangeHandler}></input>
                <label>Body</label>
                <input name="body" value={this.state.postObject.body} onChange={this.onChangeHandler}></input>
                <button type="submit">{this.state.isEditMode? "Update" :"Submit"}</button>
                <button onClick={this.onCancelClickHandler}>Cancel</button>
            </form>
            {this.state.posts.map((posts, index)=>(
                <div key={index}><div>{index+1}.{posts.title}</div>
                <button onClick={()=>{this.onDeleteClickHandler(posts.id)}}>Delete</button>
                <button onClick={()=>{this.onEditClickHandler(posts.id)}}>Edit</button>
                <br/>
                </div>
            ))}
            </>
        );
    }
    componentDidMount(){
        this.fetchData();
    }


    fetchData() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log(response.data);
            this.setState({ posts: response.data });

        });
    }
}