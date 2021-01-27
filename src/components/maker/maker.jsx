import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "PSB",
      company: "BONDI",
      theme: "light",
      title: "CEO",
      email: "psb@bondi.com",
      message: "아몰랑",
      fileName: "psb",
      fileURL: null,
    },
    {
      id: "2",
      name: "ASH",
      company: "BONDI",
      theme: "dark",
      title: "Front-End Engineer",
      email: "ash@bondi.com",
      message: "조아요~",
      fileName: "ash",
      fileURL: null,
    },

    {
      id: "3",
      name: "JCY",
      company: "BONDI",
      theme: "colorful",
      title: "Back-End Engineer",
      email: "jcy@bondi.com",
      message: "창구는 아무것도 몰랑!",
      fileName: "jcy",
      fileURL: null,
    },
    {
      id: "4",
      name: "KHJ",
      company: "BONDI",
      theme: "colorful2",
      title: "Designer",
      email: "khj@bondi.com",
      message: "예헤님 너무 귀여워요♡",
      fileName: "khj",
      fileURL: null,
    },
  ]);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      //유저가 아니면 (로그아웃하면) 홈(로그인 창)으로 이동
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const update = [...cards, card];
    setCards(update);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
