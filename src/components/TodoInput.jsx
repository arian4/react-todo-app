import React,{useState} from 'react'
import { ACTIONS } from '../Reducer/reducer'

export default function TodoInput({dispatch}) {
    
    const [inputText, setinputText] = useState('')
    const AddTodo = () =>{
        if (!inputText)return
        
        dispatch({ type: ACTIONS.ADD_TODO, payload: {title : inputText} })
        setinputText('')
        
    }
    return (
        <div className="shadow-md flex items-center bg-white dark:bg-dark-200 my-3 py-4 px-2 rounded-md">
            <div onClick={AddTodo} className="h-6 w-6 rounded-full border-2 border-light-300 dark:border-dark-400 mr-2 cursor-pointer "></div>
            <input value={inputText} onChange={(e) => {setinputText(e.target.value)}} placeholder="Create a new todo ..." className="outline-0 w-full bg-transparent text-light-500 dark:text-dark-300"></input>
        </div>
  )
}
