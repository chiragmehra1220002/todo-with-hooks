import React from "react";

const TodoList = ({
        todos,
      
        startEditing,
        saveEdit,
        deleteListItem,
        editingIndex,
        editText,
        setEditText,
        handleCheckboxChange
    }) => {
        return (
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-item" style={{ display: "flex", justifyContent: "space-between" }}>
                        {editingIndex === index ? (
                            <div className='div1'>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                   
                                />
                                <button
                                    onClick={saveEdit}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    position: "relative",
                                    fontSize: "18px",
                                    marginTop: "8px",
                                    // border:"1px solid lightgray",
                                }}
                            >
                                
                                <input id="check"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleCheckboxChange(index)}
                                    className="todo-checkbox"
                                />
                                {todo.completed ? (
                                    <span
                                        style={{
                                            textDecoration: "line-through",
                                            color: "#888",
                                        }}
                                    >
                                        {todo.text}
                                    </span>
                                ) : (
                                    <span style={{ color: "black" }}>{todo.text}</span>
                                )}
                                {todo.completed ? (
                                    <span
                                        style={{
                                            backgroundColor: "#61DEA4",
                                            fontSize: "18px",
                                            position: "absolute",
                                            color: "white",
                                            left:"270px",
                                            fontWeight:"bold",
                                            // right:"10px",
                                            // borderRadius:"15px",
                                        }}
                                    >
                                        Completed
                                    </span>
                                ) : (
                                    <span style={{ display: "flex", cursor: "pointer" }}>
                                        <i
                                            className="fa-regular fa-pen-to-square icon1"
                                            onClick={() => startEditing(index, todo.text)}
                                            style={{
                                                fontSize: "20px",
                                                color: "#61DEA4",
                                            }}
                               
                                        ></i>
    
                                        <i
                                            className="fa-solid fa-trash icon2"
                                            onClick={() => deleteListItem(index)}
                                           
                                           
                                        ></i>
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };
    
    
    
export default TodoList;
