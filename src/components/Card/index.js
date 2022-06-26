import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from '../../context';

  function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
  }) 

  {
    const {isItemAdded} = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price };


    const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

    return (
      <div className={styles.card}>
    {loading ? (
      <ContentLoader   
    speed={2}
    width={155}
    height={250}
    viewBox="0 0 155 265"
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
  {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img width= {18} height={18} src={isFavorite ? 'img/active_heart.svg' : 'img/default_heart.svg'} alt="Unliked" />
            </div>
          )}
          <img className="product" width={100} height={100} src={imageUrl} alt="candles" />
          <h5>{title}</h5>
          <div className=" card_price d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img width= {18} height={18}
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? 'img/check-font.svg' : 'img/plus.svg'}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
