import React from 'react';
import ReactDOM from 'react-dom';
import './TodoApp.css';
import TodoList from './components/TodoList';
import { useTodoContext } from './components/TodoContext';

const TodoApp = () => {
    const {
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
        handleCheckboxChange
    } = useTodoContext();

    return (
        <div className="main-container">
            <div className="upper-container">
                <p>Today</p>
                <button onClick={openPortal}>+</button>
            </div>

            {isPortalOpen &&
                ReactDOM.createPortal(
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Add Todo</h2>
                            <textarea
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                        </div>
                        <div className="footer">
                            <button onClick={closePortal}>Cancel</button>
                            <button onClick={handleSubmit}>Done</button>
                        </div>
                    </div>,
                    document.body
                )}

            <TodoList
                todos={listTodo}
                startEditing={startEditing}
                saveEdit={saveEdit}
                deleteListItem={deleteListItem}
                editingIndex={editingIndex}
                editText={editText}
                setEditText={setEditText}
                handleCheckboxChange={handleCheckboxChange}
            />
        </div>
    );
};

export default TodoApp;
