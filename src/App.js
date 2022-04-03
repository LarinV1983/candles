import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


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
    <Card/>
</div>
</div>
</section>
</div>
  ); 
}

export default App;
