import React from "react";
import TodoList from "./pages/TodoList";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />}/>
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
      </>
      
    
    
   
  )
}

export default App;
