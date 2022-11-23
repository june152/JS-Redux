import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../ToDo";
import { add } from "./store";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Submit</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
});

//이놈들은 React의 Props 안으로 전달된다.
//Props 안에 들어가는 store의 state
function mapStateToProps(state) {
  return { toDos: state };
}
//Props 안에 들어가는 dispatch, 받은 state를 바꿀 수 있게된다.
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}
