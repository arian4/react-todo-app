import React,{useState} from 'react'
import { ACTIONS } from '../Reducer/reducer'

export default function Footer({todos_length,dispatch}) {
  const [activeTab, setActiveTab] = useState("0");
  
  const showAllTodos = () => {
    
    dispatch({type : ACTIONS.CHANGE_TABS , payload : {tab : 'all'}})
    setActiveTab('0')

  }
  const showActiveTodos = () => {
    dispatch({type : ACTIONS.CHANGE_TABS , payload : {tab : 'active'}})
    setActiveTab('1')
  }
  const showcompeletedTodos = () => {
    dispatch({type : ACTIONS.CHANGE_TABS , payload : {tab : 'compeleted'}})
    setActiveTab('2')
  }

  const clearcompeletedTodos = () => {
    dispatch({type : ACTIONS.CLEAR_COMPELETED_TODOS })

  }
  
  return (
    <div className="py-4 px-2 flex items-center justify-between text-xs cursor-pointer">
        <p className="text-light-400">{todos_length} items left</p>

        <div className="flex items-center">
            <p onClick={showAllTodos} className={`${activeTab === '0' ? 'active-tab':'tab'}`}>All</p>
            <p onClick={showActiveTodos} className={`mx-2 ${activeTab === '1' ? 'active-tab':'tab'}`}>Active</p>
            <p onClick={showcompeletedTodos} className={`${activeTab === '2' ? 'active-tab':'tab'}`}>Completed</p>
        </div>
        
        <p onClick={clearcompeletedTodos} className="text-light-400 transition dark:hover:text-light-100  hover:text-light-500">Clear Completed</p>
    </div>
  )
}
