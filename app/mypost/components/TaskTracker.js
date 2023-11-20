'use client'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
const Todo = () => {
 const [showForm, setshowform] = useState(false);
 const [showNew, setshowNew] = useState(true);
 const [showDelete, setshowDelete] = useState(true);
 const [toggleSubmit, settoggleSubmit] = useState(true);
 const [isEditItem, setisEditItem] = useState(null);
 const [showList, setshowList] = useState(true);
 const [editMessage, seteditMessage] = useState(false);
 const [deleteMessage, setdeleteMessage] = useState(false);
 const [deleteMessagesuccess, setdeleteMessagesuccess] = useState(false);
 const [inputTitle, setinputTitle] = useState("");
 const [inputDesc, setinputDesc] = useState("");
 const [inputDate, setinputDate] = useState(new Date());
 const [items, setitems] = useState([
   {
     id: "001",
     name: "Let's go",
     desc: "Enjoy the new journey",
     date: "",
     status: false,
   },
 ]);
 
 //   HANDLING INPUT FIELDS
 const handleInput = (e) => {
   setinputTitle(e.target.value);
 };
 const handleInputdesc = (e) => {
   setinputDesc(e.target.value);
 };
 const handleInputDate = (e) =>{
    setinputDate(e.target.value)
 };
 //   HANDLING INPUT FIELDS
 
 //   SUBMITTING FORM
 const handleSubmit = (e) => {
   setshowList(true);
   setshowNew(true);
 
   e.preventDefault();
   if (!inputTitle || !inputDesc) {
     alert("fill data");
     showList(false);
   } else if (inputTitle && !toggleSubmit) {
     setitems(
       items.map((elem) => {
         if (elem.id === isEditItem) {
           return { ...elem, name: inputTitle, desc: inputDesc, date: inputDate,};
         }
         return elem;
       })
     );
 
     setinputTitle("");
     setinputDesc("");
     setinputDate("");
     settoggleSubmit(true);
     setshowform(false);
     setshowDelete(true);
   } else {
     const allinputTitle = {
       id: new Date().getTime().toString(),
       name: inputTitle,
       desc: inputDesc,
       date: inputDate,
     };
     setitems([allinputTitle, ...items]);
     setinputTitle("");
     setinputDesc("");
     setinputDate("");
     setshowform(false);
   }
 };
 //   SUBMITTING FORM
 
 //   DELETE
 const handleDelete = (index) => {
   console.log(index);
   const updatedItems = items.filter((elem) => {
     return index !== elem.id;
   });
   setdeleteMessage(true);
 
   setTimeout(() => {
     setitems(updatedItems);
     setdeleteMessage(false);
   }, 2000);
   setdeleteMessagesuccess(false);
 };
 //   DELETE
 
 //   EDIT
 const handleEdit = (id) => {
   setshowList(false);
   setshowDelete(false);
   setshowNew(false);
   setshowform(true);
 
   settoggleSubmit(false);
   let newEditItem = items.find((elem) => {
     return elem.id === id;
   });
   setinputTitle(newEditItem.name);
   setinputDesc(newEditItem.desc);
   setinputDate(newEditItem.date);
   // setshowDelete(true)
 
   setisEditItem(id);
   console.log(newEditItem);
 };
 //   EDIT
 
 // ADD NEW TASK
 const handleAdd = () => {
   //   alert("hello")
   setshowform(true);
   setshowList(true);
   setshowNew(true);
 };
 const handleClose =()=>{
  setshowform(false);
 }
 // ADD NEW TASK
 return (
   <>
     {showNew ? (
       <div className="container">
         <div className="col-12 text-end">
           <button className="btn btn-primary " onClick={handleAdd}>
             New
           </button>
         </div>
       </div>
     ) : (
       ""
     )}
 
     {showForm ? (
       <>
         <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
           <div className="row">
             <div className="text-center">
               <h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
             </div>
             <form className="col-12 p-2" onSubmit={handleSubmit}>
               <label htmlFor="title" className="my-2">
                 Enter Title
               </label>
               <input
                 type="text"
                 name="title"
                 id="title"
                 placeholder="title"
                 className="w-100 my-1 p-2"
                 onChange={handleInput}
                 value={inputTitle}
               />
               <label className="my-2" htmlFor="description">
                 Enter
               </label>
               <input
                 type="text"
                 name="description"
                 id="description"
                 placeholder="Description"
                 className="w-100 my-1 p-2"
                 onChange={handleInputdesc}
                 value={inputDesc}
               />
               <lable className = "my-2" htmlFor="Date">
                Select date
               </lable>
               {/* <input type = "text"
                      name="date"
                      placeholder="Select Date"
                      className="w-100 my-1 p-2"
                      onChange={handleInputDate}
                      value={inputDate}> */}
                    <div>
                    <DatePicker
                      showTimeSelect
                      minTime={new Date(0, 0, 0, 12, 0)}
                      maxTime={new Date(0, 0, 0, 11, 59)}
                      selected={inputDate}
                      onChange={inputDate => setinputDate(inputDate)}
                      dateFormat="MMMM d, yyyy h:mmaa"
                    />
                  </div>
                      {/* </input> */}
               
               {/* <div className="text-center"> */}
               <button className="btn btn-primary my-2 m-2" onClick={handleClose}>
                  Close
               </button>
               {toggleSubmit ? (
                 <button className="btn btn-primary my-2">Save</button>
               ) : (
                 <button className="btn btn-primary my-2">Update</button>
               )}
               {/* </div> */}
             </form>
           </div>
         </div>
       </>
     ) : (
       ""
     )}
 
     {showList ? (
       <div className="container py-2 ">
         {deleteMessage ? (
           <p className="text-center text-danger">Item Deleted Successfully</p>
         ) : (
           ""
         )}
         {items.map((elem, index) => {
           return (
             <div
               className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
               key={elem.id}
             >
               <div className="col-12 d-flex justify-content-between align-items-center">
                 <div>
                   <h4>{elem.name}</h4>
                   <p>{elem.desc}</p>
                   <p>{elem.date.toString()}</p>
                 </div>
                   <button
                     className="btn btn-primary mx-2"
                     onClick={() => handleEdit(elem.id)}
                   >
                     Edit
                   </button>
                   {showDelete ? (
                     <button
                       className="btn btn-danger mx-2"
                       onClick={() => handleDelete(elem.id)}
                     >
                       Delete
                     </button>
                   ) : (
                     ""
                   )}
                 </div>
               </div>
            
           );
         })}
       </div>
     ) : (
       ""
     )}
   </>
 );
};
 
export default Todo;