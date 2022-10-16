import './App.css';
import { useState } from 'react';

let date = new Date();
let day = date.getDay();
// let completed = document.querySelector(".completed");

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
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState("")
  // console.log(toDo);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input id="mainInput" value={toDo} onChange={(event) => setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          if (toDo !== "") {
            setToDos([...toDos, { id: Date(), text: toDo, status: false }]);
            setToDo("");
          }
        }} className="fas fa-plus"></i>
      </div>
      {/* <div className="todos">
        {toDos.map((obj) => {

          return (<div className="todo">
            <div className="left">
              <input onChange={(event) => {
                setToDos(toDos.filter((obj2) => {
                  if (obj2.id === obj.id) {
                    obj2.status = event.target.checked
                  }
                  return obj2
                }))
                // console.log(event.target.checked);
                console.log(obj);
              }}
                value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>)

        })}
      </div> */}
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
                        <i className="fa-solid fa-rotate-left last" onClick={() => {
                          // if(window.confirm()){
                          setToDos(toDos.filter((obj2) => {
                            if (obj2.id === obj.id) {
                              obj2.status = !obj.status
                            }
                            return obj2
                          }))
                        }}></i>
                      </div>
                      <div className="timeContainer">
                        <p className='time'>{obj.id}</p>
                      </div>
                    </div>
                  )
                }
                return null;
              })}
          </div>
        </div>
        <div>
          <div className="active lists"><h3 className="heading">Active Task</h3>

            {
              toDos.map((obj) => {
                if (obj.status === false) {
                  return (
                    <div className="listContainer">

                      <div className="activityContainer">
                        <i className='fa-regular fa-circle-check' onClick={() => {
                          setToDos(toDos.filter((obj2) => {
                            if (obj2.id === obj.id) {
                              obj2.status = !obj.status
                            }
                            return obj2
                          }))
                        }}></i>
                        <h4 className="text">{obj.text}</h4>
                        <i className='fa-solid fa-trash-can last' onClick={() => {
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
                        <p className='time'>{obj.id}</p>
                      </div>
                    </div>
                  )
                }
                return null;
              })}
          </div>
        </div>
        <div>
          <div className="removed lists"><h3 className="heading">Cancelled</h3>
            {
              toDos.map((obj) => {
                if (obj.status === undefined) {
                  return (
                    <div className="listContainer">

                      <div className="activityContainer">
                        <h4 className='text'>{obj.text}</h4>
                        <i className="fa-solid fa-trash-can-arrow-up last" onClick={() => {
                          setToDos(toDos.filter((obj4) => {
                            if (obj4.id === obj.id) {
                              obj4.status = false;
                            }
                            return obj4;
                          }))
                        }}></i>
                      </div>
                      <div className="timeContainer">
                        <p className='time'>{obj.id}</p>
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