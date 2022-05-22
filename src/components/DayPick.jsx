/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { css } from "@emotion/react";

export const DayPick = () => {
  const [selectedDay, setSelectedDay] = useState();

  return (
    <div css={containerStyle}>
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={
          selectedDay ? (
            <p>{format(selectedDay, "PP")} が選択されています</p>
          ) : (
            <p>日付を選択してください。</p>
          )
        }
      />
    </div>
  );
};

const containerStyle = css`
  display: flex;
  justify-content: center;
  text-align: center;
`;
