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
      name: "ASH",
      company: "BONDI",
      theme: "light",
      title: "Front-end Engineer",
      email: "ash@bondi.com",
      message: "I wanna die",
      fileName: "ash",
      fileURL: null,
    },
    {
      id: "2",
      name: "PSB",
      company: "BONDI",
      theme: "dark",
      title: "CEO",
      email: "psb@bondi.com",
      message: "so dabdab",
      fileName: "psb",
      fileURL: null,
    },
    {
      id: "3",
      name: "JCY",
      company: "BONDI",
      theme: "colorful",
      title: "Back-end Engineer",
      email: "jcy@bondi.com",
      message: "ChangGu knows nothing",
      fileName: "jcy",
      fileURL: null,
    },
    {
      id: "4",
      name: "KHJ",
      company: "BONDI",
      theme: "light",
      title: "Designer",
      email: "khj@bondi.com",
      message: "",
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
