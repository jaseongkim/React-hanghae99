// Action value
const CREATE_TODO = "CREATE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const GETTODOBYID = "GETTODOBYID";

// Action Creator
export const createTodo = (payload) => {
  return { type: CREATE_TODO, payload };
};
export const updateTodo = (payload) => {
  return { type: UPDATE_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const getTodoById = (payload) => {
  return { type: DELETE_TODO, payload };
};

// 초기 상태값
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트",
      body: "리액트",
      isDone: true,
    }
]};

const todos = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(function(todo){
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } 
          else {
            return { ...todo };
          }
        })
      };

    // case UPDATE_TODO:
    //   const newTodos = state.todos.map((todo) => {
    //     if (todo.id === action.payload) {
    //       todo.isDone = !todo.isDone
    //       return todo
    //     } else {
    //       return todo
    //     }
    //  });
    //   return {todos : newTodos} 

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => action.payload !== todo.id)
      };

    case GETTODOBYID:
      return {
        ...state,
        todos: state.todos.filter((todo) => action.payload === todo.id)
      }  

    default:
      return state;
  }
};

export default todos;