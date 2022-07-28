import { useState } from 'react';
import List from '../list/List';
import './style.css'

function Form(){

  let [todo,setTodo] = useState([])
  let [title, setTitle] = useState("")
  let [body, setBody] = useState("")
  let [count, setCount] = useState(0)

  const onChangeHandler=(event)=>{
    const inputValue = event.target.value;
    setTitle(inputValue)
    
  }
  const onChangeHandler1=(event)=>{
    const inputValue =event.target.value;
    setBody(inputValue)
  }

  const onClickHandler=(event)=>{
    event.preventDefault();
    let initial = {id:0, title:"", body:"", isDone:false}
    let copy = todo
    initial.title = title
    initial.body = body
    initial.id = count
    copy.push(initial)
    setTodo(copy)
    setCount(count+=1)
    setTitle("")
    setBody("")
  }
  
  return(
    <>
      <form className='form' onSubmit={()=>{}}>
        
        <label>제목</label>
        <input type="text" onChange={onChangeHandler} value={title}></input>
        
        <label>내용</label>
        <input type="text" onChange={onChangeHandler1} value={body}></input>

        <button onClick={onClickHandler}>추가하기</button>

      </form>
      <List todo={todo} setTodo={setTodo}></List>
    </>
  )
}

export default Form;