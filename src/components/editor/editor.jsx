import React from "react";
import CardAddForm from "../cardAddForm/cardAddForm";
import CardEditForm from "../cardEditForm/cardEditForm";
import styles from "./editor.module.css";

//addCard는 editor에서 받아옴
const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <CardEditForm key={card.id} card={card} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
