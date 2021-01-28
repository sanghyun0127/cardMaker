import React from "react";
import CardAddForm from "../cardAddForm/cardAddForm";
import CardEditForm from "../cardEditForm/cardEditForm";
import styles from "./editor.module.css";

//addCard는 editor에서 받아옴
const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEditForm
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
