import './style.css'

function Todo(props){

  const onClickHandlerDelete=(event, todoChange)=>{
    event.preventDefault();
    
    let copy = props.todo.filter(x => x !==todoChange)
    props.setTodo(copy)
  }
  
  function onClickHandlerChange(event, todoChange){
    event.preventDefault();
  
    let copy = props.todo.map(function(x){
      if(x.id === todoChange) {
        x.isDone = !x.isDone;
      }
      return x
    })
    props.setTodo(copy)
    console.log(copy)
  }

  return(
    <>
      <div className="outputW">Working...
        {
          props.todo.filter(x=>x.isDone === false).map(function(todo){
            return (
              <div className='inputW' key = {todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button onClick={(e)=>{onClickHandlerDelete(e, todo)}}>삭제하기</button>
                <button onClick={(e)=>{onClickHandlerChange(e, todo.id)}}>완료</button>
              </div>
            )
          })
        }
      </div>
      <div className="outputW">Done..!
        {
         props.todo.filter(x=>x.isDone === true).map(function(todo){
            return (
              <div className='inputW' key = {todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button onClick={(e)=>{onClickHandlerDelete(e, todo)}}>삭제하기</button>
                <button onClick={(e)=>{onClickHandlerChange(e, todo.id)}}>취소</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Todo;