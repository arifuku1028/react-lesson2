/** @jsxImportSource @emotion/react */
import { useState } from "react";
import dayjs from "dayjs";
import { css } from "@emotion/react";

export const CurrentDateTime = () => {
  const timeFormat = "YYYY/MM/DD(ddd) HH:mm:ss";
  const [currentDateTime, setCurrentDateTime] = useState(dayjs());

  return (
    <div css={containerStyle}>
      <p css={paragraphStyle}>
        時刻は{" "}
        <span css={timeTextStyle}>{currentDateTime.format(timeFormat)}</span>{" "}
        です。
      </p>
      <div css={buttonContainerStyle}>
        <button css={buttonStyle} onClick={() => setCurrentDateTime(dayjs())}>
          時刻を更新
        </button>
      </div>
    </div>
  );
};

const containerStyle = css`
  display: flex;
`;

const paragraphStyle = css`
  flex-grow: 0;
`;

const timeTextStyle = css`
  color: green;
  font-weight: 700;
  border-bottom: double 3px blue;
`;

const buttonContainerStyle = css`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const buttonStyle = css`
  color: green;
  background-color: orange;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
