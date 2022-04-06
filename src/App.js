import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
{title: 'Свеча ароматическая IQTRAVELS "Цветочный букет - Соевая свеча"', price: 400, imageUrl:"img/candles/1.webp"},
{title: 'Свеча ароматическая AROMANTIQUE "Шоколадное суфле"', price: 210, imageUrl:"img/candles/2.webp"},
{title: 'Свеча ароматическая Aroma Doma "Роскошный цветок"', price: 422, imageUrl:"img/candles/3.webp"},
{title: 'Свеча ароматическая AROMANTIQUE "Ежевичный щербет"', price: 215, imageUrl:"img/candles/4.webp"},
];

function App() {
  return (
  <div className ="wrapper">
    <Drawer/>
    <Header/>

<section>
  <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40">    
    <h1>Все свечи</h1>
  <div className="serch-block d-flex">
    <img width={18} heidth={18} src="img/menu-burger.svg" alt=""/>
    <input type="text" placeholder="Поиск..."/>
  </div>
</div>

<div className="d-flex">

  {arr.map((obj) => (
  <Card 
    title={obj.title}
    price={obj.price}
    imageUrl={obj.imageUrl}
    onClickPlus={()=>console.log('нажали плюс')}
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
