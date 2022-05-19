import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

export const Dropzone = () => {
  const [dndText, setDndText] = useState(
    "ここにファイルをドラッグアンドドロップしてくだい。\nまたは、クリックしてファイルを選択してください。\n複数ファイルもOKです。"
  );

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const fileNames = acceptedFiles.map((file) => file.name);
    setDndText(`${fileNames.join("\n")}\nがドラッグアンドドロップされました。`);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <SDiv {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ここにファイルをドロップしてください...</p>
      ) : (
        <p>{dndText}</p>
      )}
    </SDiv>
  );
};

const SDiv = styled.div`
  background-color: skyblue;
  border: green dotted 2px;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 20px auto;
  white-space: pre-wrap;
  text-align: center;
`;
