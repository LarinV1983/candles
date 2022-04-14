import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';

  function Card({
    id, onFavorite, title, 
    imageUrl, price, onPlus, favor=false,
    added=false, loading=false
  }) 

  {
    const[isAdd, setIsAdd] = React.useState(added);
    const[isFavorite, setIsFavorite] = React.useState(favor);


    const onClickPlus = () => {
      onPlus({id, title, imageUrl, price});
      setIsAdd(! isAdd);
    };

    const onClickFavorit = () => {
      onFavorite({id, title, imageUrl, price});
      setIsFavorite(!isFavorite);
    };

    return (
      <div className={styles.card}>
    {loading ? (
      <ContentLoader   
    speed={2}
    width={150}
    height={265}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    >
    <rect x="203" y="40" rx="0" ry="0" width="0" height="23" /> 
    <rect x="191" y="112" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="10" ry="10" width="150" height="137" /> 
    <rect x="0" y="153" rx="10" ry="10" width="150" height="15" /> 
    <rect x="0" y="178" rx="10" ry="10" width="100" height="15" /> 
    <rect x="118" y="215" rx="10" ry="10" width="32" height="32" /> 
    <rect x="0" y="222" rx="10" ry="10" width="84" height="22" />
  </ContentLoader>
  ) : (
  <>
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
    {/*  </div>*/}
      </>
    )}
    </div>
  );
}

export default Card;
