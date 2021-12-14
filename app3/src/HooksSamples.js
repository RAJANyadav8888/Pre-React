import axios from "axios";
import { useEffect, useState } from "react"




 export default () =>{
    const[userList,setUserList]=useState([]);
    // const[name,setName]=useState("");
    // const[userName,setUserName]=useState("");
    // const[email,setEmail]=useState("");
    const[userObject,setUserObject]=useState("");
    const[isEditMode,setEditMode]=useState(false);
    const[userId,setUserId]=useState(0);
    const[selectedUserId,setSelectedUserId]=useState(-1);
     const[userNameEdit,setUserNameEditMode]=useState("");
     const[emailEdit,setEmailEditMode]=useState("");
     const[editObject,setEditObject]=useState({
         name:"",
         userName:"",
         email:"",
     })

    useEffect(() =>{
        //code to fetch deta from server
       fetchData();
     },[]
      
     );
     const fetchData =() =>{
        //code to fetch data from server
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
           console.log(response.data);
           if(response && response.data){
            setUserList(response.data);
           }
       });
    };

//     const onNameChange =(event) =>{
//         setName(event.target.value);
//     };
//     const onUserNameChange =(event) =>{
//         setUserName(event.target.value);
//    };

//    const onEmailChange =(event) =>{
//     setEmail(event.target.value);
// };

// const onUserNameEditMode =() =>{
//     setUserNameEditMode(event.target.value);
// }

// const onEmailEditMode =() =>{
//     setEmailEditMode(event.target.value);
// }

const onEditObjectChangeHandler =(event) =>{
    if(event){
        const{name,value}=event.target;
        setEditObject({
            ...editObject,
            [name]:value,
        });
    };
}

 const onUserObjectChangeHandler =(event) =>
 {
     if(event){
         const{name,value}=event.target;
         setUserObject({
             ...userObject,
             [name]:value,
         });
     }
};
const onDeleteHandler=(id)=>{
   
  
    axios.delete("https://jsonplaceholder.typicode.com/users/"+id).then((response) =>{
        console.log(response.data);
        alert("Deleted");
        //fetch the data again
        fetchData();
        //reset form
        
    });
};

const onFromSubmit =(event) =>{
    event.preventDefault();//what is
    // console.log(name,userName,email);
    if(!isEditMode){
    axios.post("https://jsonplaceholder.typicode.com/users",{
        ...userObject,
        
        Id:1,
    }).then((response) =>{
        console.log(response);
        alert("Added");
        //fetch the data again
        fetchData();
        //reset form
        // setName("");
        // setUserName("");
        // setEmail("");
        setUserObject({
            name:"",
            userName:"",
            email:"",
        })
    });
}
// else{
//     if(userId >0){
//        axios.put("https://jsonplaceholder.typicode.com/users/"+userId,{
//            id:userId,
//            name,
//         userName,
//            userId:1,
//        }).then((response) =>{
//            if(response){
//                fetchData();
//                alert("updated");
//                onRest();
//            }
//            });
//        }
//     }
    }
    const onEdit =(userObject) =>{
        console.log(userObject);
    //     setEditMode(true);
    //     setName(userObject.name);
    //     setUserName(userObject.userName);
    //     setEmail(userObject.email);
    //    setUserId(userObject.id);
    setSelectedUserId(userObject.id);

    setEditObject({
        ...userObject,
    })
       
    };

    const onRest=(event) =>{
        if (event){
            event.preventDefault();
          }
        setEditMode(false);
        // setName("");
        // setUserName("");
        // setEmail("");
        setUserObject({
            name:"",
            userName:"",
            email:"",
        })
    };

    const onRestEditRow=()=>{
        setSelectedUserId(-1);
        setEditObject({
            name:"",
            userName:"",
            email:"",
        });
    };

 const onUpdateResetRow=() =>{
     if(selectedUserId>0)
     {
     axios.put("https://jsonplaceholder.typicode.com/users/"+selectedUserId,{
                   id:selectedUserId,
                //    name,
                // userName,
                ...editObject,
                   userId:1,
               }).then((response) =>{
                   if(response){
                       fetchData();
                       alert("updated");
                       onRestEditRow();
                   }
                   });
               }
            }
        


return(
    <>
    <h1>From HookSample</h1>
    <h1>User From</h1>
    <form onSubmit={onFromSubmit}>
    <label> Name: </label>
        <input name="name" value={userObject.name} onChange={onUserObjectChangeHandler}/>
  
       <label>UserName: </label>
          <input name="userName" value={userObject.userName} onChange={onUserObjectChangeHandler}/>

          <label>Email: </label>
          <input name="email" value={userObject.email} onChange={onUserObjectChangeHandler}/>
          <button type="submit">{isEditMode ? "update" : "submit"}</button>
               {isEditMode && <button onClick={onRest}>Rest:</button>}
    </form>
    <table  class="table table-success table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                {/* <th>City</th>
                <th>lat</th>
                <th>Option</th> */}
               
            </tr>
           
        </thead>
        <tbody>
            {userList.map((user,index) =>{
                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{selectedUserId===user.id ? (<input name="name" value={editObject.name}
                        onChange={onEditObjectChangeHandler}/>):(
                            user.name)}</td>
                        <td>{selectedUserId===user.id ? (<input name="userName" value={editObject.userName}
                        onChange={onEditObjectChangeHandler}/>):(
                            user.username)}</td>
                        <td>{selectedUserId===user.id ? (<input name="email" value={editObject.email}
                        onChange={onEditObjectChangeHandler}/>):(
                            user.email)}</td>

                             <td>
                                 {selectedUserId===user.id ?
                                  (<>
                                  <button onClick={onUpdateResetRow}>Update</button>
                                 <button onClick={onRestEditRow}>Reset</button>
                                 </>
                                 ) 
                                 :(
                                 <>
                                 <button onClick={()=>
                                 onDeleteHandler(user.id)}>
                                     Delete
                                 </button>
                                 <button onClick={()=>{
                                onEdit(user)
                              }}>Edit:</button>

                                 
                                 </>
                                 )}
                                 </td>

                        {/* <td>{user.address.city}</td>
                        <td>{user.address.geo.lat}</td> */}
                        {/* <button onClick={onDeleteHandler}>Delete:</button>
                        <button onClick={()=>{
                                onEdit(user)
                              }}>Edit:</button> */}
                        </tr>
                        
                );
            })}
        </tbody>
    </table>
    </>
);
   


 }