import Todo from '../todo/Todo';
import './style.css'

function List(props){
  return (
    <div className = "list">
      <Todo todo = {props.todo} setTodo = {props.setTodo} />
    </div>
  )
}

export default List;