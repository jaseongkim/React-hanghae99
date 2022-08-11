import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Comment from "../comment/Comment";
import { useEffect, useState } from "react";
import {
  __getTodosThunk,
  __updateTodoThunk,
} from "../../redux/modules/todosSlice";
import "./style.css";

export default function Detail() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let [todo] = useState();
  let [editBody, setEditBody] = useState("");
  const [edit, setEdit] = useState(false);
  const { todos } = useSelector((state) => state.todos);
  const { id } = useParams();

  todo = todos.find((x) => x.id === Number(id));

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  useEffect(() => {
    setEditBody(todo?.content);
  }, [todo]);

  const onEditHandler = () => {
    setEdit(true);
  };

  const onSubmitHandler = () => {
    dispatch(
      __updateTodoThunk({
        ...todo,
        content: editBody,
      })
    );
    setEditBody(editBody);
    setEdit(false);
  };

  const onChangeHandler = (event) => {
    setEditBody(event.target.value);
  };

  return (
    <div className="whole-detail">
      <div className="detail-box">
        <span className="title-detail">상세보기</span>
        <div className="idnum">
          <div>id : {todo?.id}</div>
          {!edit && <BtnBox onClick={() => navigate(-1)}>이전으로</BtnBox>}
        </div>
        <div className="detail-title">{todo?.title}</div>
        <div className="contNrevbut">
          {edit ? (
            <>
              <Textarea value={editBody} onChange={onChangeHandler}></Textarea>
            </>
          ) : (
            <main className="detail-content" style={{ marginLeft: "30px" }}>
              {todo?.content}
            </main>
          )}

          <div style={{ float: "right" }}>
            {edit ? (
              <div
                className="button-save"
                // style={{ marginRight: "30px" }}
                onClick={onSubmitHandler}
              >
                저장하기
              </div>
            ) : (
              <div
                className="button-revise"
                // style={{ marginRight: "30px" }}
                onClick={onEditHandler}
              >
                수정하기
              </div>
            )}
          </div>
        </div>
      </div>
      <Comment></Comment>
    </div>
  );
}

// const Box2 = styled.div`
//   width: 500px;
//   height: 300px;
//   border: 1px solid rgb(238, 238, 238);
// `;
// const Box3 = styled.div`
//   display: flex;
//   height: 80px;
//   justify-content: space-between;
//   padding: 0px 24px;
//   align-items: center;
// `;

const BtnBox = styled.button`
  /* border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px; */
  height: 42px;
  width: 68px;
  border-radius: 12px;
  border: 2px solid rgb(160, 213, 246);
  padding-left: 7px;
  cursor: pointer;
  font-size: 14px;
`;

const Textarea = styled.textarea`
  width: 500px;
  height: 50px;
  border: 2px solid #8671c6;
  padding: 12px;
  font-size: 14px;
  margin-bottom: 20px;
`;
