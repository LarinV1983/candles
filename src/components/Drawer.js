function Drawer({onClose, onRemove, items = []}) {
	return (
		    <div className="overlay">
          <div className="drawer">
        <h2 className=" d-flex justify-between mb-30 ">Корзина 
        <img onClick ={onClose} className="removeBtn cu-p" width={11} heidth={11} src="img/cross.svg" alt=""/>
        </h2>

        {items.length > 0 ? (
          <div className ="d-flex flex-column flex">
          <div className="Items">
        {items.map((obj)=>(  
      <div className="cartItem mb-20 d-flex align-center">
        <img className="mr-20" width={70} heidth={70} src={obj.imageUrl} alt=""/> 
        
        <div className="mr-20">
          <p className="mb-5">{obj.title}</p>
          <b>{obj.price}</b>
        </div>
        <img onClick={() => onRemove(obj.id)}
        className="removeBtn" width={11} heidth={11} src="img/cross.svg" alt=""/> 
        </div>
         ))}
      </div>
        <div className="cartTotalBlock">
        <ul >
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
):(

        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width={120} heidth={120} src="img/menu-burger.svg" alt=""/>
        <h2>Корзина пустая</h2>
        <p className="opacity-6">Добавьте хотя бы один товар, чтобы сделать заказ.</p>
        <button className="greenButton">
          <img width={11} heidth={11} src="img/cross.svg" alt=""/>
          Вернутся назад
        </button>
        </div>
    )}
    </div>
  </div>
	);
}

export default Drawer;