import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "./routes/store";

function ToDo({ text, deleteToDo, id }) {
  return (
    <li>
      <Link to={`/vanilla-redux/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>Del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
