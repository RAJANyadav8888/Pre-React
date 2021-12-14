import axios from "axios";
import { useEffect, useState } from "react"

 export default () =>{
     const[postList,setPostList]=useState([]);
      const[name,setName]=useState("");
      const[email,setEmail]=useState("");
     const [postObject,setPostObject]=useState("");
     const [isEditMode,setEditMode]=useState(false);
     const [postId,setPostId]=useState(0);
     const [selectedPostId,setSelectedPostId]=useState(-1);
      const[nameEditMode,setNameEditMode]=useState("");
     const [emailEdit,setEmailEditMode]=useState("");
     const [editObject,setEditObject]=useState({
         name:"",
         email:"",
     });


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
                setPostList(response.data);
            }
        });
     };


     const onResetEditRow =()=>{
       setSelectedPostId(-1);
       setEditObject({name:"",
       email:"",})
     }

     const onUpdateClickRow=()=>{

      if(selectedPostId >0){
             axios.put("https://jsonplaceholder.typicode.com/users/"+selectedPostId,{
                id:selectedPostId,
                 // name,
                 // email,
    
                 ...editObject,
                 userId:1,
             }).then((response) =>{
                 if(response){
                     fetchData();
                     alert("updated");
                     onRest();
                 }
                 });
             }
        // }
       onResetEditRow();
     }

    //  const onTitleChange =(event) =>{
    //      setTitle(event.target.value);
    //  };
    //  const onBodyChange =(event) =>{
    //     setBody(event.target.value);
    // };
    // const onDelete =(event) =>{
    //     setBody(event.target.value);
    // };
    // const onTitleEditMode =(event) =>{
    //     setTitleEditMode(event.target.value);
    // };

    const onEmailEditMode =(event) =>{
        setEmailEditMode(event.target.value);
    };
      const onEditObjectChangeHandler =(event) =>{
        //   const titleold={
        //       name:"a",
        //       email:"b",
        //   };

        
        //     const tileNew={
        //         title:titleold.title,
        //         body:titleold.body,
        //         ...titleold,
        //         title:"c",
        //     };
          
        if(event){
            const{name,value}=event.target;
            setEditObject({
                ...editObject,
                [name]:value,
            });
        };



      }

      const onPostObjectChangeHandler=(event)=>{
        if(event){
            const{name,value}=event.target;
            setPostObject({
                ...postObject,
                [name]:value,
            });
        }

      };
    const onFromSubmit =(event) =>{
         event.preventDefault();//what is
    //  console.log(title,body);
        if(!isEditMode){
        axios.post("https://jsonplaceholder.typicode.com/users",{
           ...postObject,
            userId:1,
        }).then((response) =>{
            console.log(response);
            alert("Added");
            //fetch the data again
            fetchData();
            //reset form
            // setTitle("");
            // setBody("");
            setPostObject({
                name:"",
                email:"",


            });
        });
     } //else{
    // if(postId >0){
    //     axios.put("https://jsonplaceholder.typicode.com/posts/"+postId,{
    //         id:postId,
    //         // title,
    //         // body,

    //         ...postObject,
    //         userId:1,
    //     }).then((response) =>{
    //         if(response){
    //             fetchData();
    //             alert("updated");
    //             onRest();
    //         }
    //         });
    //     }
    // }
    }

    const onDeleteHandler =(id)=>{
        
            axios.delete("https://jsonplaceholder.typicode.com/users/"+id).then((response)=>{
            console.log(response);
            alert("Deleted");
            fetchData();
        })
    }
      const onEdit =(postObject) =>{
          console.log(postObject);
        //   setEditMode(true);
        //   setTitle(postObject.title);
        //   setBody(postObject.body);
        //   setPostId(postObject.id);
          setSelectedPostId(postObject.id);
        //   setTitleEditMode(postObject.title);
        //   setBodyEditMode(postObject.body);
          setEditObject({
              ...postObject,
          })
      };
      
      
      const onRest=(event) =>{
          if (event){
              event.preventDefault();
            }
          setEditMode(false);
          setPostObject({
            name:"",
            email:"",


        });
      };
     return(
         <>
         <h1>From HookSample</h1>
         <h1>Post From</h1>
         <form onSubmit={onFromSubmit}>
         <label> Name: </label>
             <input name="name" value={postObject.name} onChange={onPostObjectChangeHandler}/>
       
            <label>Email: </label>
               <input name="email" value={postObject.email} onChange={onPostObjectChangeHandler}/>

               <button type="submit">{isEditMode ? "update" : "submit"}</button>
               {isEditMode && <button onClick={onRest}>Rest:</button>}
         </form>
         <table className={"table"}>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Email</th>
                 </tr>
                
             </thead>
             <tbody>
                 {postList.map((post,index) =>{
                     return(
                         <tr key={post.id}>
                             <td>{post.id}</td>
                             <td>{selectedPostId===post.id ? (<input name="name" value={editObject.name} onChange={onEditObjectChangeHandler}/>
                             ):(
                                 post.name
                             )}</td>
                             <td>{selectedPostId===post.id ? (<input name="email" value={editObject.email} onChange={onEditObjectChangeHandler}/>):(
                                 post.email
                             )}
                             </td>
                             <td>
                                 {selectedPostId===post.id ?
                                  (<>
                                  <button onClick={onUpdateClickRow}>Update</button>
                                 <button onClick={onResetEditRow}>Reset</button>
                                 </>
                                 ) 
                                 :(
                                 <>
                                 <button onClick={()=>
                                 onDeleteHandler(post.id)}>
                                     Delete
                                 </button>
                                 <button onClick={()=>{
                                onEdit(post)
                              }}>Edit:</button>

                                 
                                 </>
                                 )}
                                 </td>
                             {/* <button onClick={onDeleteHandler}>Delete:</button>
                         
                              <button onClick={()=>{
                                onEdit(post)
                              }}>Edit:</button>
                              </tr> */}
                              </tr>
                     );
                 })}
             </tbody>
         </table>
         </>
     );
        
    
};