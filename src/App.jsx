import { CurrentDateTime } from "./components/CurrentDateTime";
import { Dropzone } from "./components/Dropzone";
import { DayPick } from "./components/DayPick";
import { DragAndDrop } from "./components/DragAndDrop";

export const App = () => {
  return (
    <>
      <CurrentDateTime />
      <DayPick />
      <Dropzone />
      <DragAndDrop />
    </>
  );
};
