import axios, { Axios } from "axios";
import React,{Component} from "react";
export default class todo extends Component{
    state={
        users:[],
        isEditMode:false,
       userObj:{
           userid: 1,
           username: "",
           email: "",
           phoneNo:"",
       },
    };
    onClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" +id).then((response)=>{
            console.log(response);
            this.FetchMethod();
            alert("Deleted");


        });
    }
    onChangeHandler = (event) => {
        const {name,value}=event.target;
        const userObjectCopy=this.state.userObj;
        userObjectCopy[name]=value;
        this.setState({userObj:userObjectCopy});
    };
    onEditClickHandler = (id) => {
        const editObject=this.state.users.find((user) => user.id === id);
        if(editObject)
        {
            this.setState({
                userObj:editObject,isEditMode:true
            });
        }
    };
    resetState ()
    {
        this.setState({
            userObj:{
                username:"",
                email:"",
                userId:1,
                phoneNo:"",
            },
            isEditMode:false,
        });
    }
  
    onChangeHandler = (event) => {
        const {name,value}=event.target;
        const userObjectCopy=this.state.userObj;
        userObjectCopy[name]=value;
        this.setState({userObj:userObjectCopy});
    };

    onCancelClickHandler = (event) =>{
        event.preventDefault();
        this.resetState();
    }
    onFormSubmitClick = (event) => {
        event.preventDefault();
        if(this.state.isEditMode)
        {
            axios.put("https://jsonplaceholder.typicode.com/users/"+this.state.userObj.id,this.state.userObj)
            .then((response)=> {console.log(response);
                this.FetchMethod();
                alert("Updated");
                this.resetState();
            })
        }
        else{
            console.log(this.state);
            axios.post("https://jsonplaceholder.typicode.com/users",this.state.userObj)
            .then((response) => {console.log(response);
                this.FetchMethod();
                alert("Created");
                this.resetState();
            })

        }
    };

 render(){

    return(
        <>
            <h1>Hello I am USER</h1>
            <form onSubmit={this.onFormSubmitClick}>
                <label>USERNAME</label>
                <input
                    name="username"
                    value={this.state.userObj.username}
                    onChange={this.onChangeHandler}
                />
                <label>email</label>
                <input
                    name="email"
                    value={this.state.userObj.email}
                    onChange={this.onChangeHandler}
                />

                <button type="submit">{this.state.isEditMode ? "Update" : "Submit"}</button>
                <button onClick = {this.onCancelClickHandler}>Cancel</button>
            </form>
            {this.state.users.map((user,index)=>(
                <div key={index}>
                    <div>
                    {index+1}.{user.title}
                    </div>
                    <br/>
                    <button onClick={()=>{
                this.onClickHandler(user.id); }}>Delete</button>

                <button onClick={() =>{
                    this.onEditClickHandler(user.id);
                }}>Edit</button>

                </div>
                
                 ))}
            </>
    )
}
componentDidMount()
{
    this.FetchMethod();
}

FetchMethod() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
    });

}
};

    

    
    

