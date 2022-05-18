/** @jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { css } from "@emotion/react";

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

  const containerStyle = css`
    background-color: skyblue;
    border: green dotted 2px;
    border-radius: 5px;
    padding: 5px 20px;
    margin: 20px auto;
    white-space: pre-wrap;
    text-align: center;
  `;

  return (
    <div {...getRootProps()} css={containerStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ここにファイルをドロップしてください...</p>
      ) : (
        <p>{dndText}</p>
      )}
    </div>
  );
};
