import listTodo from "../TodoApp";
import setListTodo from "../TodoApp";

import React from 'react'

const deleteTodo = (key) => {
 
        let newListTodo = [...listTodo];
        newListTodo.splice(key, 1);
        setListTodo([...newListTodo]);
    
 

}

export default deleteTodo;
