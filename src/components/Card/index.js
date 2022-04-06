import React from 'react';
import styles from './Card.module.scss';

  function Card(props) {
    const[isAdd, setIsAdd] = React.useState(false);

    const onPlus = () => {
      setIsAdd(! isAdd);
    }

    return (    
   <div className={styles.card}>
   <div className={styles.favorite} onClick ={props.onClickFavorite}>
      <img width={11} heidth={11} src="img/menu-burger.svg" alt="Unliked"/>
    </div>
    <img width={133} heidth={112} src={props.imageUrl} alt=""/>
    <h5>{props.title}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <span>Цена:</span>
        <b>{props.price} руб.</b>
      </div>
      <button className="button" onClick ={onPlus}>
      <img width={11} heidth={11} 
      src={isAdd ? "img/menu-burger.svg":"img/cross.svg"} alt="Plus"/></button>
    </div>
  </div>
  );
}

export default Card;
