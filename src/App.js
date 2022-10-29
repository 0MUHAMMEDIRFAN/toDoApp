import './App.css';
import { useState } from 'react';

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
// localStorage.getItem("mode") ? document.body.classList.add("light") : document.body.classList.remove("light");
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

// console.log(time())
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState("")

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
        <i className="bx bxs-adjust " onClick={() => {
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
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>

      {/* Input section */}

      <div className="input">
        <input id="mainInput" value={toDo} onChange={(event) => setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          if (toDo !== "") {
            setToDos([...toDos, { id: Date.now(), time: time(), text: toDo, status: false }]);
            setToDo("");
          }
        }} className="fas fa-plus"></i>
      </div>

      {/* fist-list section         */}

      <div className="status">
        <div>
          <div className="completed lists"> <h3 className="heading">Completed</h3>
            {
              toDos.map((obj) => {
                if (obj.status) {
                  return (
                    <div className="listContainer">

                      <div className="activityContainer">
                        <h4 className="text">{obj.text}</h4>
                        <i className="fa-solid fa-trash-can last" onClick={() => {
                          if (window.confirm("Do You want to Permanantly delete ?")) {
                            setToDos(toDos.filter((obj2) => {
                              if (obj2.id === obj.id) {
                                return null;
                              }
                              return obj2
                            }))
                          }
                        }}></i>
                      </div>
                      <div className="timeContainer">
                        <p className='time'>{obj.time}</p>
                      </div>
                    </div>
                  )
                }
                return null;
              })}
          </div>
        </div>
        <div>

          {/* Middle-list section */}

          <div className="active lists"><h3 className="heading">Active Task</h3>
            {
              toDos.map((obj) => {
                if (obj.status === false) {
                  return (
                    <div className="listContainer">

                      <div className="activityContainer">
                        <i className='fa-solid fa-check' onClick={() => {
                          setToDos(toDos.filter((obj2) => {
                            if (obj2.id === obj.id) {
                              obj2.status = !obj.status
                            }
                            return obj2
                          }))
                        }}></i>
                        <h4 className="text">{obj.text}</h4>
                        <i className='fa-solid fa-xmark last' onClick={() => {
                          setToDos(toDos.filter((obj3) => {
                            if (obj3.id === obj.id) {
                              obj3.status = undefined;
                            }
                            // console.log(obj)
                            return obj3
                          }))
                        }}></i>
                      </div>
                      <div className="timeContainer">
                        <p className='time'>{obj.time}</p>
                      </div>
                    </div>
                  )
                }
                return null;
              })}
          </div>
        </div>

        {/* Last-list section */}

        <div>
          <div className="removed lists"><h3 className="heading">Cancelled</h3>
            {
              toDos.map((obj) => {
                if (obj.status === undefined) {
                  return (
                    <div className="listContainer">

                      <div className="activityContainer">
                        <h4 className='text'>{obj.text}</h4>
                        <i className="fa-solid fa-rotate-left last" onClick={() => {
                          setToDos(toDos.filter((obj4) => {
                            if (obj4.id === obj.id) {
                              obj4.status = false;
                            }
                            return obj4;
                          }))
                        }}></i>
                        <i className="fa-solid fa-trash-can last" onClick={() => {
                          if (window.confirm("Do You want to Permanantly delete ?")) {
                            setToDos(toDos.filter((obj2) => {
                              if (obj2.id === obj.id) {
                                return null;
                              }
                              return obj2
                            }))
                          }
                        }}></i>
                      </div>
                      <div className="timeContainer">
                        <p className='time'>{obj.time}</p>
                      </div>
                    </div>
                  )
                }
                return null;
              })
            }
          </div>
        </div>
      </div>

    </div>
  );

}

export default App;