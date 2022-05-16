import { useState } from "react";
import dayjs from "dayjs";

export const Time = () => {
  const timeFormat = "YYYY/M/D(ddd) H:m:s";
  const dateFormat = "YYYY/M/D(ddd)";
  const [gotTime, setGotTime] = useState(dayjs());

  return (
    <>
      <button onClick={() => setGotTime(dayjs())}>時刻を更新</button>
      <p>時刻は {gotTime.format(timeFormat)} です。</p>
      <p>1週間前は {gotTime.subtract(1, "week").format(dateFormat)} です。</p>
      <p>1週間後は {gotTime.add(1, "week").format(dateFormat)} です。</p>
      <p>月初は {gotTime.startOf("month").format(dateFormat)} です。</p>
      <p>月末は {gotTime.endOf("month").format(dateFormat)} です。</p>
    </>
  );
};
