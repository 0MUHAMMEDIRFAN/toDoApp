import "./Main.css";
import React, { useContext, useState } from 'react';
import { ToDoContext } from "../../Contexts/Context.js"

let date = new Date();
let day = date.getDay();
let mode;

if (localStorage.getItem("theme") == null) {
    mode = "true";
    localStorage.setItem("theme", mode)
} else if (localStorage.getItem("theme") === "true") {
    document.body.classList.remove("light");
    document.body.classList.add("light");
    mode = localStorage.getItem("theme");
} else {
    document.body.classList.remove("light");
    mode = localStorage.getItem("theme");
}

switch (day) {
    case 1: day = "Monday";
        break;
    case 2: day = "Tuesday";
        break;
    case 3: day = "Wednesday";
        break;
    case 4: day = "Thursday";
        break;
    case 5: day = "Friday";
        break;
    case 6: day = "Saturday";
        break;
    case 0: day = "Sunday";
        break;
    default: day = "Your Day";
}

function time() {
    let time = new Date();
    return time.toLocaleString();
}

function Main() {
    const { toDos, setToDos } = useContext(ToDoContext)
    const [toDo, setToDo] = useState("")
    // console.log(localStorage.getItem("toDos"))
    const add = (e) => {
        e.preventDefault();
        let newTodos = [...toDos, { id: Date.now(), time: time(), text: toDo, status: false }]
        if (toDo !== "") {
            setToDos(newTodos);
            setToDo("");
            localStorage.setItem("toDos", JSON.stringify(newTodos))
        }
        
    }
   

    return (
        <div className='app'>
            <div className="mainHeading">
                <div>
                    <i className='bx bxs-check-circle' style={{color:"#946c1d"}}  ></i>
                </div>
                <h1>ToDo List</h1>
                <i className="bx bx-moon " onClick={() => {
                    if (mode === "true") {
                        mode = "false"
                        document.body.classList.remove("light");
                    } else {
                        mode = "true";
                        document.body.classList.add("light")
                    }
                    localStorage.setItem("theme", mode)
                }}></i>
            </div>
            <div className="subHeading">
                <h2>Whoop, it's <span>{day}</span> 🌝 ☕ </h2>
            </div>
            <div className="input">
                <form className='form' onSubmit={add} action="">

                    <input id="mainInput" value={toDo} onChange={(event) => setToDo(event.target.value)} type="text" placeholder="Add item..." />
                    <i onClick={add} className="fas fa-plus"></i>
                </form>
            </div>

        </div>
    )
}

export default Main;