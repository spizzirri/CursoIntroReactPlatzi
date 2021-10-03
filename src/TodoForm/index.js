import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const value = React.useContext(TodoContext);

    const onCancel = ()=>{
        value.setOpenModal(false);
    }

    const onAdd = (event)=>{
        event.preventDefault();
        value.addTodo(newTodoValue);
        value.setOpenModal(false);
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Nuevo TODO"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel" 
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export default TodoForm;