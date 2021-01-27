import React from "react";
import Button from "../button/button";
import ImageFileInput from "../imageFileInput/imageFileInput";
import styles from "./cardEditForm.module.css";

const CardEditForm = ({ card }) => {
  // card에서 정보 받아오기
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
        <option value="colorful2">colorful2</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name="message" value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
