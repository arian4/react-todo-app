import { useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
import { reducer } from './Reducer/reducer';
import useDarkMode from './useDarkMode';

const TABS = {
  'ALL' : 'all',
  'ACTIVE' : 'active',
  'COMPELETED'  :'compeleted'
  
}
function App() {
  const {theme,setTheme} = useDarkMode()
  const [state, dispatch] = useReducer(reducer, {todos:[] , current_tab : TABS.ALL})
  
  const SetTodos = (state) => {
    
    switch (state.current_tab) {
      case TABS.ALL:
        
        return state.todos
        
      case TABS.ACTIVE :
        
        return state.todos.filter(todo => todo.compelete === false)
      
      case TABS.COMPELETED:
        
        return state.todos.filter(todo => todo.compelete ===true)
      
      

    
      default:
        return state.todos;
    }
  }
  return (
    <main className="font-body flex  justify-center relative min-h-screen dark:bg-dark-100" >
      <picture>
        <source  media="(max-width:640px)" srcset={theme === 'light' ? ("images/bg-mobile-light.jpg"):('images/bg-mobile-dark.jpg')} alt="bg-mobile"/>
        <img className="w-full h-1/3 sm:h-max absolute top-0 left-0" src={theme === 'light' ? ("images/bg-desktop-light.jpg"):('images/bg-desktop-dark.jpg')} alt="bg-desktop"></img>

      </picture>
      <section className="absolute z-20 w-11/12 top-5 sm:w-3/5 sm:top-12 md:top-8 xl: xl:w-1/3 xl:top-1/4 ">
        <Header theme = {theme} setTheme = {setTheme} />
        {/* todo input */}
        <TodoInput dispatch={dispatch} />
        {/* todo list */}
        <div className="bg-white dark:bg-dark-200 shadow-md rounded-md">
          {
            SetTodos(state).map((todo) =>{
              return(
                <Todo key={todo.id} id={todo.id} title = {todo.title} iscompelete={todo.compelete} dispatch={dispatch} />
              )
            })
          }
          
          {state.todos.length > 0 ? <Footer todos_length = {state.todos.length} dispatch={dispatch} /> : null }
          
          

        </div>

      </section>
    </main>
  );
}

export default App;
