import firebaseApp from "./firebaseSetting";

class CardRepository {
  // 모두 maker에서 사용
  //실시간 sync
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    // 'value' === 값이 변경될 때마다
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    //sync 됐으면 끈다
    return () => ref.off();
  }

  saveCard(userId, card) {
    //firebase Docs Read and Write Data참고
    //userId 안에 cards 안에 card.id 안에 card를 저장
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    //firebase Docs Read and Write Data참고
    //userId 안에 cards 안에 card.id 안에 card를 저장
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}
export default CardRepository;
