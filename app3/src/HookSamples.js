import axios from "axios";
import { useEffect, useState } from "react"

 export default () =>{
     const[postList,setPostList]=useState([]);
    //  const[name,setName]=useState("");
    //  const[email,setEmail]=useState("");
     const [postObject,setPostObject]=useState("");
     const [isEditMode,setEditMode]=useState(false);
     const [postId,setPostId]=useState(0);
     const [selectedPostId,setSelectedPostId]=useState(-1);
    //  const[titleEditMode,setTitleEditMode]=useState("");
     const [bodyEdit,setBodyEditMode]=useState("");
     const [editObject,setEditObject]=useState({
         title:"",
         body:"",
     });


     useEffect(() =>{
        //code to fetch deta from server
       fetchData();
     },[]
      
     );
     const fetchData =() =>{
         //code to fetch data from server
         axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data);
            if(response && response.data){
                setPostList(response.data);
            }
        });
     };


     const onResetEditRow =()=>{
       setSelectedPostId(-1);
       setEditObject({title:"",
       body:"",})
     }

     const onUpdateClickRow=()=>{

      if(selectedPostId >0){
             axios.put("https://jsonplaceholder.typicode.com/posts/"+selectedPostId,{
                id:selectedPostId,
                 
    
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

    const onBodyEditMode =(event) =>{
        setBodyEditMode(event.target.value);
    };
      const onEditObjectChangeHandler =(event) =>{
        //   const titleold={
        //       title:"a",
        //       body:"b",
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
        axios.post("https://jsonplaceholder.typicode.com/posts",{
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
                title:"",
                body:"",


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
        
            axios.delete("https://jsonplaceholder.typicode.com/posts/"+id).then((response)=>{
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
            title:"",
            body:"",


        });
      };
     return(
         <>
         <h1>From HookSample</h1>
         <h1>Post From</h1>
         <form onSubmit={onFromSubmit}>
         <label> Title: </label>
             <input name="title" value={postObject.title} onChange={onPostObjectChangeHandler}/>
       
            <label>Body: </label>
               <input name="body" value={postObject.body} onChange={onPostObjectChangeHandler}/>

               <button type="submit">{isEditMode ? "update" : "submit"}</button>
               {isEditMode && <button onClick={onRest}>Rest:</button>}
         </form>
         <table className={"table"}>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Title</th>
                     <th>Body</th>
                 </tr>
                
             </thead>
             <tbody>
                 {postList.map((post,index) =>{
                     return(
                         <tr key={post.id}>
                             <td>{post.id}</td>
                             <td>{selectedPostId===post.id ? (<input name="title" value={editObject.title} onChange={onEditObjectChangeHandler}/>
                             ):(
                                 post.title
                             )}</td>
                             <td>{selectedPostId===post.id ? (<input name="body" value={editObject.body} onChange={onEditObjectChangeHandler}/>):(
                                 post.body
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