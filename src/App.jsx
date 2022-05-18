import { GetTime } from "./components/GetTime";
import { Dropzone } from "./components/Dropzone";
import { DayPick } from "./components/DayPick";
import { DragAndDrop } from "./components/DragAndDrop";

export const App = () => {
  return (
    <>
      <GetTime />
      <DayPick />
      <Dropzone />
      <DragAndDrop />
    </>
  );
};
