import React from 'react'
import { useContext } from 'react';
import { ToDoContext } from '../../Contexts/Context';
import "./List.css"

// function time() {
//     let time = new Date();
//     return time.toLocaleString();
// }

function List() {
    const { toDos, setToDos } = useContext(ToDoContext)
    let check1 = true;
    let check2 = true;
    let check3 = true;

    const nothing = () => {
        return (
            <div className="listContainer">
                <div className="activityContainer">
                    <div className="nothing">
                        <h5 className="text">Nothing to show here</h5>
                    </div>
                </div>
            </div>
        )
    }

    function deleted(obj) {
        if (window.confirm("Do You want to Permanantly delete ?")) {
            let deleted = toDos.filter((obj2) => {
                if (obj2.id === obj.id) {
                    return null;
                }
                return obj2
            })
            setToDos(deleted);
            localStorage.setItem("toDos", JSON.stringify(deleted))
        }
    }

    return (
        <div className='app'>
            <div className="status">
                <div>
                    <div className="completed lists"> <h3 className="heading">Completed</h3>
                        {
                            toDos.map((obj) => {
                                if (obj.status) {
                                    check1 = false;
                                    return (
                                        <div className="listContainer">

                                            <div className="activityContainer">
                                                <h4 className="text">{obj.text}</h4>
                                                <i className="fa-solid fa-trash-can last" onClick={() => deleted(obj)}></i>
                                            </div>
                                            <div className="timeContainer">
                                                <p className='time'>{obj.time}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                return null;
                            })}
                        {check1 && nothing()}
                    </div>
                </div>
                <div>

                    {/* Middle-list section */}

                    <div className="active lists"><h3 className="heading">Active Task</h3>
                        {
                            toDos.map((obj) => {
                                if (obj.status === false) {
                                    check2 = false;
                                    return (
                                        <div className="listContainer">

                                            <div className="activityContainer">
                                                <i className='fa-solid fa-check' onClick={() => {
                                                    let completed = toDos.filter((obj2) => {
                                                        if (obj2.id === obj.id) {
                                                            obj2.status = !obj.status
                                                        }
                                                        return obj2
                                                    })
                                                    setToDos(completed)
                                                    localStorage.setItem("toDos", JSON.stringify(completed));
                                                }}></i>
                                                <h4 className="text">{obj.text}</h4>
                                                <i className='fa-solid fa-xmark last' onClick={() => {
                                                    let cancelled = toDos.filter((obj3) => {
                                                        if (obj3.id === obj.id) {
                                                            obj3.status = undefined;
                                                        }
                                                        return obj3
                                                    })
                                                    setToDos(cancelled)
                                                    localStorage.setItem("toDos", JSON.stringify(cancelled));
                                                }}></i>
                                            </div>
                                            <div className="timeContainer">
                                                <p className='time'>{obj.time}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                return null;
                            }
                            )

                        }
                        {check2 && nothing()}
                    </div>
                </div>

                {/* Last-list section */}

                <div>
                    <div className="removed lists"><h3 className="heading">Cancelled</h3>
                        {
                            toDos.map((obj) => {
                                if (obj.status === undefined) {
                                    check3 = false;
                                    return (
                                        <div className="listContainer">

                                            <div className="activityContainer">
                                                <h4 className='text'>{obj.text}</h4>
                                                <i className="fa-solid fa-rotate-left last" onClick={() => {
                                                    let retrieve = toDos.filter((obj4) => {
                                                        if (obj4.id === obj.id) {
                                                            obj4.status = false;
                                                        }
                                                        return obj4;
                                                    })
                                                    setToDos(retrieve);
                                                    localStorage.setItem("toDos", JSON.stringify(retrieve));
                                                }}></i>
                                                <i className="fa-solid fa-trash-can last" onClick={() => deleted(obj)}></i>
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
                        {check3 && nothing()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;
