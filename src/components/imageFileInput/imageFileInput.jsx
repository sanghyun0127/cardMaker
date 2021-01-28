import React, { memo, useRef, useState } from "react";
import styles from "./imageFileInput.module.css";

const ImageFileInput = memo(({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  /* input을 따로 클릭하게 하는 것은 힘들고 input을 안보이게 하고 버튼을 누르면 
  input이 클릭되게 만들기 
  1. button onClick에서 ref 실행시키기
  2. ref를 input에 주기
  */
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    //파일 바뀐거 알림 => imageUploader.js
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  //image/* === 확장자는 상관없지만 image 파일이어야 한다
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
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
});

export default ImageFileInput;

/* 
index.js 에서 받아서 쭉 내려보낸다
*/
