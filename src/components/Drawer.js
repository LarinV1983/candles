function Drawer() {
	return (
		    <div style={{display: 'none'}} className="overlay">

		          <div className="drawer">
        <h2 className=" d-flex justify-between mb-30 ">Корзина 
        <img className="removeBtn cu-p" width={11} heidth={11} src="img/cross.svg" alt=""/>
        </h2>

        <div className="Items">
        <div className="cartItem mb-20 d-flex align-center">
        <img className="mr-20" width={70} heidth={70} src="img/candles/menu-burger.svg" alt=""/> 
        <div className="mr-20">
          <p className="mb-5"> dsdsdsdsdasdsdsadd</p>
          <b>12 999руб</b>
        </div>
        <img className="removeBtn" width={11} heidth={11} src="img/cross.svg" alt=""/>
        </div>
        <div className="cartItem mb-20 d-flex align-center">
        <img className="mr-20" width={70} heidth={70} src="img/candles/menu-burger.svg" alt=""/> 
        <div className="mr-20">
          <p className="mb-5"> dsdsdsdsdasdsdsadd</p>
          <b>12 999руб</b>
        </div>
        <img className="removeBtn" width={11} heidth={11} src="img/cross.svg" alt=""/>
        </div>
      </div>
      <ul className="cartTotalBlock">
          <li className="d-flex">
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>

          <li className="d-flex">
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton">Оформить заказ <img width={11} heidth={11} src="img/menu-burger.svg"/></button>
      </div>
     </div>
		);
}

export default Drawer;