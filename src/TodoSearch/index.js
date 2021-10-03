import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){


    const value = React.useContext(TodoContext);

    const onSearchValueChange = (event)=>{
        value.setSearchValue(event.target.value)
    }

    return (
        <input placeholder="Cebolla"
               value={value.searchValue} 
               onChange={onSearchValueChange}
        />
    )
}

export default TodoSearch;