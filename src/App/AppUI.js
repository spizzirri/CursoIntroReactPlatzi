import React, {Fragment} from 'react';
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import CreateTodoButton from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import Modal from '../Modal';
import TodoForm from '../TodoForm';

function AppUI(){

    const value = React.useContext(TodoContext);

    return (
        <Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {value.error && <p>Desespérate, hubo un error</p>}
                {value.loading && <p> Estamos cargando, no desesperes... </p>}
                {(!value.loading && !value.searchedTodos.length) && <p>Crea tu primer TODO</p>}

                {value.searchedTodos.map( todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={()=>value.toggleTodo(todo.text)}
                    onDelete={()=>value.deleteTodo(todo.text)}/>
                ))}
            </TodoList>
            { !!value.openModal && 
                <Modal> 
                    <TodoForm />
                </Modal>
            }
            <CreateTodoButton setOpenModal={value.setOpenModal}/>
        </Fragment>
    )
}

export default AppUI;