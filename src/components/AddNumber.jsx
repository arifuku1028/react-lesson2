import React from "react";
import { useState } from "react";

export const AddNumber = () => {
  const containerYellowStyle = {
    border: "solid 1px #ddd",
    backgroundColor: "yellow",
    padding: "8px",
    color: "green",
  };

  const [arr, setArr] = useState([1, 2]);

  const onClickAdd = () => {
    const newArr = [...arr];
    newArr.push(arr.length + 1);
    setArr(newArr);
  };

  return (
    <div style={containerYellowStyle}>
      <button onClick={onClickAdd}>追加</button>
      <button onClick={() => setArr([1, 2])}>リセット</button>
      {arr.map((val) => (
        <p key={val}>{val}</p>
      ))}
    </div>
  );
};
