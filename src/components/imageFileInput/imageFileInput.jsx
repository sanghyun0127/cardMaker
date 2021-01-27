import React, { useRef } from "react";
import styles from "./imageFileInput.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  //image/* === 확장자는 상관없지만 image 파일이어야 한다
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    //파일 바뀐거 알림 => imageUploader.js
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;

/* 
index.js 에서 받아서 쭉 내려보낸다
*/
