import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { createTodo } from "../../redux/modules/todos";
import { useSelector } from "react-redux";

import "./style.css";

let number = 3;
function Form() {

  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  // redux 에서 객체 꺼내오기

  const my_todo = useSelector((state) => state.todos.todos);
  
  console.log(my_todo)

  const [todo, setTodo] = useState(initialState);
  
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    // 리덕스에 객체 넣기
    dispatch(createTodo({ ...todo, id: number }))
    // setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
