import React from 'react';
import useLocalStorage from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1');
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if(!searchValue.length >= 1){
      searchedTodos = todos;
    }else{
      searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    }
  
    const toggleTodo = (text) => {
      const index = todos.findIndex(todo => todo.text === text);
  
      const newTodos = [...todos]
      newTodos[index].completed = !newTodos[index].completed;
      saveTodos(newTodos);
    }
  
    const deleteTodo = (text) => {
      const index = todos.findIndex(todo => todo.text === text);
  
      const newTodos = [...todos]
      newTodos.splice(index, 1);
      saveTodos(newTodos);
    }
  
    const addTodo = (text) => {
      const newTodo = {text, completed: false};
      const newTodos = [...todos];
      newTodos.push(newTodo);
      saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue, 
            setSearchValue,
            searchedTodos,
            toggleTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };