   function Card() {
    return (    
   <div className="card">
    <div className="favorite">
      <img width={11} heidth={11} src="img/menu-burger.svg" alt="Unliked"/>
    </div>
    <img width={133} heidth={112} src="img/candles/menu-burger.svg" alt=""/>
    <h5>jrjrjrrjrjrjrrjrjrjrjrjrjrjj</h5>
    <div className="d-flex justify-between">
      <div className="d-flex flex-column align-center">
        <span>Цена:</span>
        <b>12 999руб.</b>
      </div>
      <button className="button"><img width={11} heidth={11} src="img/cross.svg" alt=""/></button>
    </div>
  </div>
  );
}

export default Card;
