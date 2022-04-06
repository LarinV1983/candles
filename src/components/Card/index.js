   import styles from './Card.module.scss';
   function Card(props) {
    const onClickButton = () => {
      alert(props.title);
    };

    return (    
   <div className={styles.card}>
   <div className={styles.favorite}>
      <img width={11} heidth={11} src="img/menu-burger.svg" alt="Unliked"/>
    </div>
    <img width={133} heidth={112} src={props.imageUrl} alt=""/>
    <h5>{props.title}</h5>
    <div className="d-flex justify-between">
      <div className="d-flex flex-column align-center">
        <span>Цена:</span>
        <b>{props.price} руб.</b>
      </div>
      <button className="button" onClick ={onClickButton}>
      <img width={11} heidth={11} src="img/cross.svg" alt=""/></button>
    </div>
  </div>
  );
}

export default Card;
