import {createContext , useState} from "react";

export const ToDoContext = createContext(null)

export function ToDo({children}){
    const [toDos,setToDos] = useState(JSON.parse(localStorage.getItem("toDos")) || [])
    return(
        <ToDoContext.Provider value={{toDos,setToDos}}>
            {children}
        </ToDoContext.Provider>
    )

}