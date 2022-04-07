import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from 'react';


// const arr = [
// {title: 'Свеча ароматическая IQTRAVELS "Цветочный букет - Соевая свеча"', price: 400, imageUrl:"img/candles/1.webp"},
// {title: 'Свеча ароматическая AROMANTIQUE "Шоколадное суфле"', price: 210, imageUrl:"img/candles/2.webp"},
// {title: 'Свеча ароматическая Aroma Doma "Роскошный цветок"', price: 422, imageUrl:"img/candles/3.webp"},
// {title: 'Свеча ароматическая AROMANTIQUE "Ежевичный щербет"', price: 215, imageUrl:"img/candles/4.webp"}
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(()=>{
     fetch('https://624e91f177abd9e37c88446a.mockapi.io/items')
  .then((res)=> {
    return res.json();
  }).then(json => {
    setItems(json);
  });
}, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };
  
  return (
  <div className ="wrapper">
    {cartOpen ? <Drawer items={cartItems} onClose= {() => setCartOpen(false)}/> : null}
    <Header onClickCart = {() => setCartOpen(true)} 
    />

<section>
  <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40">    
    <h1>Все свечи</h1>
  <div className="serch-block d-flex">
    <img width={18} heidth={18} src="img/menu-burger.svg" alt=""/>
    <input type="text" placeholder="Поиск..."/>
  </div>
</div>

<div className="d-flex flex-wrap">

  {items.map((item) => (
  <Card 
    title={item.title}
    price={item.price}
    imageUrl={item.imageUrl}
    onPlus={(obj)=> onAddToCart(obj)}
    onClickFavorite={()=>console.log('добовили в закладки')}

  />
  ))}
 
</div>
</div>
</section>
</div>
  ); 
}

export default App;
