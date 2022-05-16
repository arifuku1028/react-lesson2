/* eslint-disable react/prop-types */

export const Message = (props) => {
  const { color, children = "ゲスト" } = props;
  return <p style={{ color }}>{`こんにちは!${children}さん`}</p>;
};
