import { useState } from "react";

export const ShowInputContent = () => {
  const containerTBMargin = {
    margin: "20px 0",
  };

  const [text, setText] = useState("");
  const onChangeText = (e) => setText(e.target.value);
  const onClickButton = () => {
    alert(text);
  };
  return (
    <div style={containerTBMargin}>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickButton}>表示</button>
      <button onClick={() => setText("")}>リセット</button>
    </div>
  );
};
