import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  // useState 안의 obj 형식 중요!
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "PSB",
      company: "BONDI",
      theme: "light",
      title: "CEO",
      email: "psb@bondi.com",
      message: "수비드 닭가슴살",
      fileName: "psb",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "ASH",
      company: "BONDI",
      theme: "dark",
      title: "Front-End Engineer",
      email: "ash@bondi.com",
      message: "노브랜드 콜롬비아 아메리카노",
      fileName: "ash",
      fileURL: null,
    },
    3: {
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
    4: {
      id: "4",
      name: "KHJ",
      company: "BONDI",
      theme: "colorful2",
      title: "Designer",
      email: "khj@bondi.com",
      message: "삼각김밥",
      fileName: "khj",
      fileURL: null,
    },
  });

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

  // const addCard = (card) => {
  //   const update = [...cards, card];
  //   setCards(update);
  // };

  // 중요! => 이전 것들을 전부다 받아오지 말고 해당하는 것만 받아서 새로운 걸로 return
  // create이나 update나 logic이 똑같으므로 위에 있는 addCard 를 여기에 합쳐버리기
  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
