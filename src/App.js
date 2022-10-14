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
  case 7: day = "Sunday";
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
        <input value={toDo} onChange={(event) => setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
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
                // console.log(obj);
              }}
                value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>)

        })}
      </div>
      <div className="status">
        <div>
          <div className="completed lists"> <h3 className="heading">Completed</h3>
            {
              toDos.map((obj) => {
                if (obj.status) {
                  return (
                    <div className="subActive">
                      <h4 className="activities">{obj.text}</h4>
                      <i className="fa-solid fa-rotate-left" onClick={() => {
                        if(window.confirm()){
                        setToDos(toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = !obj.status
                          }
                          return obj2
                        }))
                        }}}></i>
                    </div>
                  )
                }
                return null;
              })}
          </div>
        </div>
        <div>
          <div className="active lists"><h3 className="heading">On going</h3>
            {
              toDos.map((obj) => {
                if (!obj.status) {
                  return (
                    <div className="subActive">
                      <i className='fa-regular fa-circle-check' onClick={() => {
                        setToDos(toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = !obj.status
                          }
                          return obj2
                        }))
                        }}></i>
                      <h4 className="activities">{obj.text}</h4>
                      <i className='fa-solid fa-trash-can' onClick={() => {

                      }}></i>
                    </div>
                  )
                }
                return null;
              })}
          </div>
        </div>
        <div>
          <div className="removed lists"><h3 className="heading">Removed</h3>
            <i className="fa-solid fa-trash-can-arrow-up"></i>
          </div>
        </div>
      </div>

    </div>
  );

}

export default App;