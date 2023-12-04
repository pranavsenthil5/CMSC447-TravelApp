'use client'
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


var user_id = 1;
const Todo = (id) => {
  const [showForm, setShowForm] = useState(false);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDate, setInputDate] = useState(new Date());
  const [inputStatus, setInputStatus] = useState(false);
  const [showDelete, setShowDelete] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [deleteMessageSuccess, setDeleteMessageSuccess] = useState(false);
  const [check, setCheck] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    console.log("YO fetching tasks");
    try {
       // replace with the actual user ID
      const response = await fetch(`http://127.0.0.1:8080/api/task/all_from_collection/${id['id']}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        },
        mode: "cors",
      });
      const tasks = await response.json();
      setItems(tasks);

      console.log("YO tasks:", tasks);
      console.log("YO url:",`http://127.0.0.1:8080/api/task/all_from_collection/${id['id']}`);

    } catch (error) {
      console.error("YO Error fetching tasks:", error);
    }
  };

  const handleAdd = () => {
    setShowForm(true);
    setToggleSubmit(true);
    resetInputFields();
  };

  const handleInput = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputDesc = (e) => {
    setInputDesc(e.target.value);
  };

  const handleInputDate = (date) => {
    setInputDate(date);
    console.log("YO date",date);
  };

  const handleInputStatus = (e) => {
    setInputStatus(e.target.value);
  };


  const handleSubmit = (e) => {
    console.log("YO submitting form");
    e.preventDefault();
    if (!inputTitle || !inputDesc) {
      alert("Please fill in all fields");
    } else if (inputTitle && !toggleSubmit) {
      updateTask(isEditItem);
    } else {
      console.log("YO adding task");
      createTask();
      // refresh the list of tasks
      fetchTasks();
    }
    resetInputFields();
    setShowForm(false);
  };

  const createTask = () => {
    console.log("YO creating task");
    fetch("http://127.0.0.1:8080/api/task/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      mode: "cors",
      body: JSON.stringify({
        author: user_id,
        name: inputTitle,
        description: inputDesc,
        date: inputDate,
        collection_id: id['id'], 
        status: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        fetchTasks();
      })
      .catch((error) => console.error("Error creating task:", error));
  };

  const updateTask = (task_id) => {
    fetch(`http://127.0.0.1:8080/api/task/update/${task_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
      body: JSON.stringify({
        name: inputTitle,
        description: inputDesc,
        date: inputDate,
        collection_id: id['id'],
        status: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        fetchTasks();
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  const resetInputFields = () => {
    setInputTitle("");
    setInputDesc("");
    setInputDate(new Date());
    setInputStatus(false);
  };

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8080/api/task/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        fetchTasks();
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const handleEdit = (id) => {
    setShowForm(true);
    setToggleSubmit(false);
    let newEditItem = items.find((elem) => elem.id === id);
    setInputTitle(newEditItem.name);
    setInputDesc(newEditItem.description);
    setInputDate(new(Date));
    setInputStatus(newEditItem.status);
    setIsEditItem(id);
  };

  const handleMarkAsDone = (id) => {
    fetch(`http://127.0.0.1:8080/api/task/done/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      mode: "cors"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        fetchTasks();
      })
      .catch((error) => console.error("Error marking task as done:", error));
  };
 
  const handleMarkAsUndone = (id) => {
    fetch(`http://127.0.0.1:8080/api/task/undone/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      mode: "cors"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        fetchTasks();
      })
      .catch((error) => console.error("Error marking task as undone:", error));
  };

  return (
    <>
      {showForm ? null : (
        <div className="container">
          <div className="col-12 align-left">
            <button className="btn btn-primary" onClick={handleAdd}>
              New Task
            </button>
          </div>
        </div>
      )}
      {showForm ? (
       
        <div className="container border rounded shadow p-3 mb-5 bg-white rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{toggleSubmit ? "Add Task" : "Edit Task"}</h2>
          </div>
          <form className="p-4" onSubmit={handleSubmit}>
            <label htmlFor="title" className="my-2 text-gray-600">
              Enter Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="w-full my-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
              onChange={handleInput}
              value={inputTitle}
            />
            <label className="my-2 text-gray-600" htmlFor="description">
              Enter Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              className="w-full my-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
              onChange={handleInputDesc}
              value={inputDesc}
            />
            <label className="my-2 text-gray-600" htmlFor="Date">
              Select Date
            </label>
            <DatePicker
              showTimeSelect
              minTime={new Date(0, 0, 0, 12, 0)}
              maxTime={new Date(0, 0, 0, 11, 59)}
              selected={inputDate}
              onChange={handleInputDate}
              dateFormat="MMMM d, yyyy h:mmaa"
              className="w-full my-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
            />
            <div className="flex justify-end">
              <button
                className="btn btn-primary my-2 m-2 px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
                onClick={resetInputFields}
              >
                Close
              </button>
              {toggleSubmit ? (
                <button
                  className="btn btn-primary my-2 px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
                >
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-primary my-2 px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark"
                >
                  Update
                </button>
              )}
            </div>
          </form>
        </div>

      ) : null}

<div className="container py-2">
      {items.map((elem, index) => (
        <div className="border rounded-lg shadow-md p-4 mb-4 bg-white" key={elem.id}>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox text-primary"
                checked={elem.status}
                onChange={() => (elem.status ? handleMarkAsUndone(elem.id) : handleMarkAsDone(elem.id))}
              />
              <div>
                <h4 className={elem.status ? "line-through text-gray-600" : "text-black font-semibold"}>
                  {elem.name}
                </h4>
                <p className="text-gray-700">{elem.description}</p>
                <p className="text-gray-500">{elem.date.toString()}</p>
              </div>
            </div>
            <button
              className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-primary-dark"
              onClick={() => handleEdit(elem.id)}
            >
              Edit
            </button>
            {showDelete ? (
              <button
                className="px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-red-600"
                onClick={() => handleDelete(elem.id)}
              >
                Delete
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  </>
);
};

export default Todo;