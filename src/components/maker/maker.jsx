import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput, cardRepository }) => {
  /*user id 별로 DB관리*/
  const historyState = useHistory().location.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState.id);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };
  //firebase DB sync useEffect
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  //로그인 useEffect
  useEffect(() => {
    authService.onAuthChange((user) => {
      //유저가 아니면 (로그아웃하면) 홈(로그인 창)으로 이동
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [userId, authService, history]);

  // 중요! => 이전 것들을 전부다 받아오지 말고 해당하는 것만 받아서 새로운 걸로 return
  // create이나 update나 logic이 똑같으므로 위에 있는 addCard 를 여기에 합쳐버리기
  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
