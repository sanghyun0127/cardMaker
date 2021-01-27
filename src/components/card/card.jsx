import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = ({ card }) => {
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
  // img가 따로 없다면 default 이미지 사용
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    case "colorful2":
      return styles.colorful2;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
