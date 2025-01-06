import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => {
    return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
    const [isPortalOpen, setIsPortalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [listTodo, setListTodo] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const openPortal = () => {
        setIsPortalOpen(true);
    };

    const closePortal = () => {
        setIsPortalOpen(false);
        setInputValue('');
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            setListTodo([
                ...listTodo,
                { text: inputValue, completed: false }
            ]);
        }
        closePortal();
    };

    const startEditing = (index, currentText) => {
        setEditingIndex(index);
        setEditText(currentText);
    };

    const saveEdit = () => {
        if (editText !== '') {
            const newListTodo = [...listTodo];
            newListTodo[editingIndex].text = editText;
            setListTodo(newListTodo);
            setEditingIndex(null);
            setEditText('');
        }
    };

    const deleteListItem = (index) => {
        const newListTodo = listTodo.filter((_, i) => i !== index);
        setListTodo(newListTodo);
    };

    const handleCheckboxChange = (index) => {
        const newListTodo = [...listTodo];
        newListTodo[index].completed = !newListTodo[index].completed;
        setListTodo(newListTodo);
    };

    return (
        <TodoContext.Provider
            value={{
                isPortalOpen,
                inputValue,
                listTodo,
                editingIndex,
                editText,
                setInputValue,
                setEditText,
                openPortal,
                closePortal,
                handleSubmit,
                startEditing,
                saveEdit,
                deleteListItem,
                handleCheckboxChange,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
