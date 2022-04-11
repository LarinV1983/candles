import React from 'react';
import styles from './Card.module.scss';

  function Card({id, onFavorite, onClickFavorite,
   title, imageUrl, price, onPlus, favor=false}) {
    const[isAdd, setIsAdd] = React.useState(false);
    const[isFavorite, setIsFavorite] = React.useState(favor);


    const onClickPlus = () => {
      onPlus({title, imageUrl, price});
      setIsAdd(! isAdd);
    }

    const onClickFavorit = () => {
      onFavorite({id, title, imageUrl, price});
      setIsFavorite(!isFavorite);
    }

    return (    
   <div className={styles.card}>
   <div className={styles.favorite} onClick ={onClickFavorit}>
      <img width={11} heidth={11} src={isFavorite ? "img/cross.svg":"img/menu-burger.svg"} alt="Unliked"/>
    </div>
    <img width={133} heidth={112} src={imageUrl} alt=""/>
    <h5>{title}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <span>Цена:</span>
        <b>{price} руб.</b>
      </div>
      <button className="button" onClick ={onClickPlus}>
      <img width={11} heidth={11} 
      src={isAdd ? "img/menu-burger.svg":"img/cross.svg"} alt="Plus"/></button>
    </div>
  </div>
  );
}

export default Card;
