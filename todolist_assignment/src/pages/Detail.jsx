import { useSelector } from "react-redux";
import {useNavigate, useParams} from "react-router-dom"
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Box1 = styled.div`
  order: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box2 = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid rgb(238, 238, 238);
  
`;
const Box3 = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
`;

const BtnBox = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

function Detail(){

  let navigate = useNavigate();

  const {todos}  = useSelector((state) => state.todos);
  console.log(todos)
  
  let num = useParams()
  
  let copy = todos.find(x => x.id === Number(num.id))
  console.log(copy)
  
  return(
    
    // <div style={{display:"block"}}>
    //   <div>상세페이지</div>
    //   <button onClick={()=>navigate(-1)}>뒤로가기</button>
    //   <div>{copy[0].id}</div>
    //   <div>{copy[0].title}</div>
    //   <div>{copy[0].body}</div>
    // </div>

    <Container>
      <Box1>
        <Box2>
          <Box3>
            <div>id : {copy.id}</div>
            <BtnBox onClick={()=>navigate(-1)}>이전으로</BtnBox>
          </Box3>
          <h1 style={{marginLeft:"30px"}}>{copy.title}</h1>
          <main style={{marginLeft:"30px"}}>{copy.body}</main>
        </Box2>
      </Box1>
    </Container>
    
  )
}
export default Detail;