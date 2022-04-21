import React from 'react';
import AppContext from '../context';

import {Link} from 'react-router-dom';


function Header(props) {
  const {cartItems} = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

	return (
		<header className="d-flex justify-between align-center p-40">
  <Link to ="/">
  <div className = "d-flex align-center">
  <img width={50} heidth={50} src="img/christmas_candle_background.png" alt="Logotype"/>
  <div className = "headerinfo">
    <h3 className="text-uppercase">Свечи ароматические</h3>
    <p className="opacity-5">Магазин по продаже ароматических свечей</p>
  </div>
  </div>
</Link>
  <ul className="d-flex"> 
    <li onClick={props.onClickCart} className="mr-30 cu-p shopping-cart">
<img  width={21} heidth={21} src="img/default-shopping-cart.svg" alt="Корзина"/>      
<span>{totalPrice} руб.</span>
    </li>
    <li className="mr-20 cu-p">
      <Link to ="/favorites">
        <img width={21} heidth={21} src="img/default_heart.svg" alt="Закладки"/>    
      </Link>
    </li>
      <li>
    <Link to ="/orders">
        <img width={21} heidth={21} src="img/user.svg" alt="Пользователь"/>    
      </Link>
      </li>
  </ul>
  </header>
		);
}

export default Header;