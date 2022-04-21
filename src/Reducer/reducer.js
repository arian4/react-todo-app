export const ACTIONS = {
    'ADD_TODO' : 'add-todo',
    'DELETE_TODO' : 'delete-todo',
    'TOGGLE_TODO' : 'toggle-todo',
    'CHANGE_TABS' : 'change-tabs',
    'CLEAR_COMPELETED_TODOS' : 'clear-compeleted-todos'
    
    
    
}
export const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return {...state ,todos:[...state.todos,NewTodo(action.payload.title)] }
      case ACTIONS.DELETE_TODO:
        
        return {...state ,todos:state.todos.filter((s)=>s.id !== action.payload.id) }
        
      case ACTIONS.TOGGLE_TODO:
        return(
          {...state , todos :state.todos.map(s => {
            if(s.id === action.payload.id){
              return  {...s,compelete : !s.compelete}
            }
            else{
              return s
            }
          })}
          
        )
        case ACTIONS.CHANGE_TABS:
          
          return {...state ,current_tab:action.payload.tab }
        case ACTIONS.CLEAR_COMPELETED_TODOS:
          return(
            {...state , todos : state.todos.filter(todo => todo.compelete !==true)}
          )

      
          
          
      


         

          
        
      default:
        return state;
    }
};

function NewTodo(title) {
    return {id : Date.now() ,title : title ,compelete : false}
    
}

