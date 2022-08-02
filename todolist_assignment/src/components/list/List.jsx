import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
import { useDispatch, useSelector} from "react-redux";
import { deleteTodo,updateTodo } from "../../redux/modules/todos";

function List() {

  let dispatch = useDispatch();

  const my_todo = useSelector((state) => state.todos.todos);
  
  const onDeleteHanlder = (todoId) => {

    // const newTodos = todos.filter((todo) => {
    //   return todo.id !== todoId;
    // });

    // setTodos(newTodos);

    dispatch(deleteTodo(todoId))
  };

  const onEditHandler = (todoId) => {
    // const newTodos = todos.map((todo) => {
    //   if (todo.id === todoId) {
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone,
    //     };
    //   } else {
    //     return { ...todo };
    //   }
    // });

    // setTodos(newTodos);

    dispatch(updateTodo(todoId))
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {my_todo.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                // setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {my_todo.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                // setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
