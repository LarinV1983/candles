import React from 'react';
import axios from 'axios';
import Infomation from '../infomation';
import AppContext from '../../context';
import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = [], opened}) {
  const {cartItems, setCartItems} = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);


   const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://624e91f177abd9e37c88446a.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://624e91f177abd9e37c88446a.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа');
    }
    setIsLoading(false);
  };

	 return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина <img width={14} height={14} onClick={onClose} className="cu-p" src="img/cross.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    ></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img width={12} height={12}
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/cross.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Стоимость доставки:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 25} руб. </b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ <img width={14} height={14} src="img/sign.svg" alt="Arrow" />
              </button>
            </div>
          </div>
):(
      <Infomation 
      title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая" }
      description={
        isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
       : "Добавьте хотя бы один товар, чтобы сделать заказ."}
      image={isOrderComplete ? '/img/thumbs-up-font.svg' : '/img/basket.svg'}
      />
    )}
    </div>
  </div>
	);
}

export default Drawer;