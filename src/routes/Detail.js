import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  //route때 받은 key값 및 value 값을 리턴받는다.
  const id = useParams();
  return <h1>Detail</h1>;
}
