import React,{useState} from 'react'
import { ACTIONS } from '../Reducer/reducer'

export default function Todo({id,title,iscompelete,dispatch}) {
    const [showCloseIcon, setshowCloseIcon] = useState(false)
    
    const toggleTodo = () =>{
        dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id : id}})
        
        

    }
    const deleteTodo = () => {
        dispatch({type:ACTIONS.DELETE_TODO, payload : {id : id }} )
        

    }

    return (
        <div className={`todo-item`} onMouseOver={() => {setshowCloseIcon(true)}} onMouseOut={() =>{setshowCloseIcon(false)}}>
            <div onClick={toggleTodo} className={`check-box ${iscompelete ? 'checked-todo':'check-box'} `}>
                {iscompelete ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                        <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>
                    </svg>
                    :null
                }
                
            </div>
            <p className={`${iscompelete ? ('text-light-400 dark:text-dark-500 line-through') : ('text-light-500 dark:text-dark-300')}`}>{title}</p>

            
            <svg onClick={deleteTodo} className={`ml-auto mr-2 transition duration-500 ${showCloseIcon?'scale-100':'scale-0'} `} xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
            </svg>
                
            

        </div>
    )
}
