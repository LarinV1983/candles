import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
{title: 'gfgfhfhgfh', price: 129, imageUrl:"img/menu-burger.svg"},
{title: 'klk', price: 14501, imageUrl:"img/menu-burger.svg"},
{title: 'klkDDD', price: 54561, imageUrl:"img/menu-burger.svg"},
{title: 'klGDGDDG', price: 2354541, imageUrl:"img/menu-burger.svg"},
];

function App() {
  return (
  <div className ="wrapper">
    <Drawer/>
    <Header/>

<section>
  <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40">    
    <h1>Все кросовки</h1>
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
  />
  ))}
 
</div>
</div>
</section>
</div>
  ); 
}

export default App;
