// import React, { useEffect, useState } from 'react'; 

// function Todo() {
//   const[editTitle,setEditTitle]=useState("");
//   const[editDescription,setEditDescription]=useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [todos, setTodos] = useState([]);
//   const[editId,setEditId]=useState(-1);
//   const apiUrl = "http://localhost:8000";
//   const handleEditCancel=()=>{
//     setEditId(-1)
//   }
//   const handleDelete=(id)=>{
//     if(window.confirm('Are you sure to Delete')){
//       fetch(apiUrl+'/todos/'+id,{
//         method:"DELETE"}).then(()=>{
//          const updatedTodos= todos.filter((item)=>item._id!==id);
//          setTodos(updatedTodos)
//         })
//     }
//   }
//   const handleEdit=(item)=>{
    
//       setEditId(item._id);
//       setEditTitle(item.title);
//      setEditDescription(item.description)
//   }
//   const handleUpdate=()=>{setError("");
//     fetch(apiUrl + "/todos", {
//       method: "PUT",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ editTitle, editDescription }),
//     })
//       .then((res) => {
//         if (res.ok) {
//        const updatedTodos=   todos.map((item)=>{
//             if(item._id==editId){
//               item.title=editTitle;
//               item.description=editDescription
//             }
//             return item;
//           })
//           setTodos(updatedTodos);
//           setMessage("Item updated successfully");
//           setTimeout(() => {
//             setMessage("");
//           }, 3000);
//           setEditId(-1)
//         } else {
//           setError("Unable to create todo item");
//         }
//       })
//       .catch(() => {
//         setError("An error occurred while creating the todo item");
//       });}

//   const handleSubmit = () => {
//     setError("");
//     fetch(apiUrl + "/todos", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title, description }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           setTodos([...todos, { title, description }]);
//           setMessage("Item added successfully");
//           setTimeout(() => {
//             setMessage("");
//           }, 3000);
//         } else {
//           setError("Unable to create todo item");
//         }
//       })
//       .catch(() => {
//         setError("An error occurred while creating the todo item");
//       });
//   };

//   useEffect(() => {
//     getItems();
//   }, []);

//   const getItems = () => {
//     fetch(apiUrl + "/todos")
//       .then((res) => res.json())
//       .then((res) => { setTodos(res); });
//   };

//   return (
//     <>
//       <div className="row p-3 bg-success text-light">
//         <h1>Todo Component Works</h1>
//       </div>
//       <div className="row">
//         <h3>Add Item</h3>
//         {message && <p className="text-success">{message}</p>}
//         <div className="form-group d-flex gap-2">
//           <input
//             placeholder="Title"
//             className="form-control"
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             value={editTitle}
//           />
//           <input
//             placeholder="Description"
//             className="form-control"
//             type="text"
//             onChange={(e) => setDescription(e.target.value)}
//             value={editDescription}
//           />
//           <button className="btn btn-outline-secondary" onClick={handleSubmit}>
//             Submit
//           </button>
//         </div>
//         {error && <p className="text-danger">{error}</p>}
//       </div>
//       <div className="row mt-3">
//         <h3>Tasks</h3>
//         <ul className="list-group w-100">
//           {todos.map((item) => (
//             <li className="list-group-item bg-info w-100 mb-3 me-2" key={item.title} style={{ display: 'block' }}>
//               <div className="d-flex flex-column">
//                 {
//                 editId==-1||editId!==item._id?<><span className="fw-bold">{item.title}</span><span>{item.description}</span></>:
//                 <div className="form-group d-flex gap-2">
//           <input
//             placeholder="Title"
//             className="form-control"
//             type="text"
//             onChange={(e) => setEditTitle(e.target.value)}
//             value={title}
//           />
//           <input
//             placeholder="Description"
//             className="form-control"
//             type="text"
//             onChange={(e) => setEditDescription(e.target.value)}
//             value={description}
//           />
         
//         </div>

                  
                
//                 }
                
//               </div>
//               <div className="d-flex gap-2">
//                {editId==-1||editId!==item._id? <button className="btn btn-warning" onClick={()=>handleEdit(item)}>Edit</button>:
//                <button onclick={handleUpdate}>UPDATE</button>
//                }
//                {editId==-1?<button className="btn btn-danger"onClick={()=>handleDelete(item._id)}>Delete</button>:
//                <button className='btn btn-danger' onClick={handleEditCancel}>Cancel</button>
//               }
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Todo;
// import { useState,useEffect } from "react";
// function Todo1(){
//     const[title,setTitle]=useState("");
//     const[description,setDescription]=useState("");
//     const[editTitle,setEditTitle]=useState("");
//     const[editDescription,setEditDescription]=useState("");
//     const[todos2,setTodos2]=useState([]);
//     const[message,setMessage]=useState("");
//     const[error,setError]=useState("");
//     const[editId,setEditId]=useState(-1)

//     useEffect(()=>{
//         getItems();
//     },[]);
//     const getItems=()=>{
//         fetch("http://localhost:8000/todos1")
//         .then((res)=>res.json()).then(res=>setTodos2(res))
//     }
//     const handleSubmit=()=>{
//       setError="";
//       fetch("http://localhost:8000/todos1",{
//         method:'POST',
//         headers:{
//           "Content-type":"application/json"
//         },
//         body:JSON.stringify({title,description})
//       }).then((res)=>{
//         if(res.ok){
//           setTodos2([...todos2,{title,description}]);
//           setMessage("Item added successfully"); // Show a success message
//         setTimeout(() => setMessage(""), 3000)

//         }
//         else {
//           setError("Unable to create todo item"); // Show an error if the request failed
//         }
//       })
//       .catch(() => setError("An error occurred while creating the todo item"));
//     }

//     const handleUpdate = () => {
//       setError(""); // Reset any previous errors
//       fetch("http://localhost:8000/todos1/" + editId, {
//         method: "PUT", // Sends a PUT request to update the todo
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title: editTitle, description: editDescription }), // Sends the updated title and description
//       })
//         .then((res) => {
//           if (res.ok) { // If the response is successful
//             const updatedTodos = todos2.map((item) => {
//               if (item._id === editId) { // Update the specific todo in the list
//                 item.title = editTitle;
//                 item.description = editDescription;
//               }
//               return item;
//             });
//             setTodos2(updatedTodos); // Set the updated list of todos
//             setMessage("Item updated successfully"); // Show a success message
//             setTimeout(() => setMessage(""), 3000); // Clear the message after 3 seconds
//             setEditId(-1); // Reset edit mode
//           } else {
//             setError("Unable to update todo item"); // Show an error if the request failed
//           }
//         })
//         .catch(() => setError("An error occurred while updating the todo item")); // Handle any network errors
//     };
//     const handleEdit = (item) => {
//       setEditId(item._id); // Set the ID of the todo being edited
//       setEditTitle(item.title); // Set the current title for editing
//       setEditDescription(item.description); // Set the current description for editing
//     };
//     // Delete a todo item
// const handleDelete = (id) => {
//   if (window.confirm("Are you sure to delete?")) { // Ask for confirmation before deleting
//     fetch("http://localhost:8000/todos1/" + id, {
//       method: "DELETE", // Sends a DELETE request to remove the todo
//     }).then(() => {
//       const updatedTodos = todos2.filter((item) => item._id !== id); // Remove the deleted todo from the list
//       setTodos2(updatedTodos); // Set the updated list
//     });
//   }
// };


//     return (
//         <> {/*div1*/}
//           <div className="row p-3 bg-success text-light">
//             <h1>Todo Component Works</h1>
//           </div>
//       {/*div2*/}
//           {/* Form to add a new todo */}
//           <div className="row">
//             <h3>Add Item</h3>
//             {message && <p className="text-success">{message}</p>}
//             <div className="form-group d-flex gap-2">
//               {/* Input for title */}
//               <input
//                 placeholder="Title"
//                 className="form-control"
//                 type="text"
//                 onChange={(e) => setTitle(e.target.value)} // Handle title input
//                 value={editId === -1 ? title : editTitle}  // If editing, show editTitle
//               />
//               {/* Input for description */}
//               <input
//                 placeholder="Description"
//                 className="form-control"
//                 type="text"
//                 onChange={(e) => setDescription(e.target.value)} // Handle description input
//                 value={editId === -1 ? description : editDescription}  // If editing, show editDescription
//               />
//               {/* Submit button */}
//               <button className="btn btn-outline-secondary" onClick={handleSubmit}>
//                 Submit
//               </button>
//             </div>

//             {error && <p className="text-danger">{error}</p>}
//           </div>
//       {/*div3*/}
//           {/* List of todos */}
//           <div className="row mt-3">
//             <h3>Tasks</h3>
//             <ul className="list-group w-100">
//               {todos2.map((item) => (
//                 <li className="list-group-item bg-info w-100 mb-3" key={item._id}>
//                   <div className="d-flex flex-column">
//                     {editId === item._id ? (
//                       <>
//                         {/* Editing input fields */}
//                         <input
//                           className="form-control"
//                           value={editTitle}
//                           onChange={(e) => setEditTitle(e.target.value)}
//                         />
//                         <input
//                           className="form-control"
//                           value={editDescription}
//                           onChange={(e) => setEditDescription(e.target.value)}
//                         />
//                       </>
//                     ) : (
//                       <>
//                         {/* Displaying todo */}
//                         <span className="fw-bold">{item.title}</span>
//                         <span>{item.description}</span>
//                       </>
//                     )}
//                   </div>
      
//                   {/* Edit and delete buttons */}
//                   <div className="d-flex gap-2">
//                     {editId === item._id ? (
//                       <>
//                         {/* Update and cancel buttons when editing */}
//                         <button className="btn btn-success" onClick={()=>
//                           handleUpdate(item)}>
//                           Update
//                         </button>
//                         <button className="btn btn-danger" onClick={() => setEditId(-1)}>
//                           Cancel
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         {/* Edit and delete buttons */}
//                         <button className="btn btn-warning" onClick={() => handleEdit(item)}>
//                           Edit
//                         </button>
//                         <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>
//                           Delete
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       );}
//       export default Todo1
import { useState, useEffect } from "react";

function Todo1() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [todos2, setTodos2] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(-1);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    fetch("http://localhost:8000/todos1")
      .then((res) => res.json())
      .then((res) => setTodos2(res));
  };

  const handleSubmit = () => {
    if (editId === -1) {
      // New todo creation
      setError("");
      fetch("http://localhost:8000/todos1", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })
        .then((res) => {
          if (res.ok) {
            setTodos2([...todos2, { title, description }]);
            setMessage("Item added successfully");
            setTimeout(() => setMessage(""), 3000);
            setTitle("");
            setDescription(""); // Clear the input fields
          } else {
            setError("Unable to create todo item");
          }
        })
        .catch(() => setError("An error occurred while creating the todo item"));
    } else {
      // Update existing todo
      handleUpdate();
    }
  };

  const handleUpdate=(id)=>{
    setError("");
        fetch("http://localhost:8000/todos1/"+id, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ editTitle, editDescription }),
        })
          .then((res) => {
            if (res.ok) {
           const updatedTodos=todos2.map((item)=>{
                if(item._id==editId){
                  item.title=editTitle;
                  item.description=editDescription
                }
                return item;
              })
              setTodos2(updatedTodos);
              setMessage("Item updated successfully");
              setTimeout(() => {
                setMessage("");
              }, 3000);
              setEditId(-1)
            } else {
              setError("Unable to create todo item");
            }
          })
          .catch(() => {
            setError("An error occurred while creating the todo item");
          });}
  const handleEdit = (item) => {
    setEditId(item._id);
    setEditTitle(item.title);
    setEditDescription(item.description);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      fetch("http://localhost:8000/todos1/" + id, {
        method: "DELETE",
      }).then(() => {
        const updatedTodos = todos2.filter((item) => item._id !== id);
        setTodos2(updatedTodos);
      });
    }
  };

  return (
    <>
      {/*div1*/}
      <div className="row p-3 bg-success text-light">
        <h1>Todo Component Works</h1>
      </div>
      {/*div2*/}
      {/* Form to add a new todo */}
      <div className="row">
        <h3>{editId === -1 ? "Add Item" : "Edit Item"}</h3>
        {message && <p className="text-success">{message}</p>}
        <div className="form-group d-flex gap-2">
          {/* Input for title */}
          <input
            placeholder="Title"
            className="form-control"
            type="text"
            onChange={(e) =>
              editId === -1 ? setTitle(e.target.value) : setEditTitle(e.target.value)
            }
            value={editId === -1 ? title : editTitle} // If editing, show editTitle
          />
          {/* Input for description */}
          <input
            placeholder="Description"
            className="form-control"
            type="text"
            onChange={(e) =>
              editId === -1
                ? setDescription(e.target.value)
                : setEditDescription(e.target.value)
            }
            value={editId === -1 ? description : editDescription} // If editing, show editDescription
          />
          {/* Submit button */}
          <button className="btn btn-outline-secondary" onClick={handleSubmit}>
            {editId === -1 ? "Submit" : "Update"}
          </button>
        </div>

        {error && <p className="text-danger">{error}</p>}
      </div>
      {/*div3*/}
      {/* List of todos */}
      <div className="row mt-3">
        <h3>Tasks</h3>
        <ul className="list-group w-100">
          {todos2.map((item) => (
            <li className="list-group-item bg-info w-100 mb-3" key={item._id}>
              <div className="d-flex flex-column">
                {editId === item._id ? (
                  <>
                    {/* Editing input fields */}
                    <input
                      className="form-control"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <input
                      className="form-control"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    {/* Displaying todo */}
                    <span className="fw-bold">{item.title}</span>
                    <span>{item.description}</span>
                  </>
                )}
              </div>

              {/* Edit and delete buttons */}
              <div className="d-flex gap-2">
                {editId === item._id ? (
                  <>
                    {/* Update and cancel buttons when editing */}
                    <button
                      className="btn btn-success"
                      onClick={() => handleUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => setEditId(-1)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    {/* Edit and delete buttons */}
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Todo1;
