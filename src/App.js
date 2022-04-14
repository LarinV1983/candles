import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './pages/Home';
import Favorites from './pages/Favourites'
import {Routes, Route} from 'react-router-dom';

import axios from "axios";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(()=>{
    async function fetchData() {
   
      const cartResponse = await
      axios.get('https://624e91f177abd9e37c88446a.mockapi.io/cart');
  
      const favoritesResponse = await
      axios.get('https://624e91f177abd9e37c88446a.mockapi.io/favorites');

      const itemsResponse = await
      axios.get('https://624e91f177abd9e37c88446a.mockapi.io/items');

    setCartItems(cartResponse.data);
    setFavorites(favoritesResponse.data);
    setItems(itemsResponse.data);
  }

  fetchData();
  
}, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://624e91f177abd9e37c88446a.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) != Number(obj.id)));
      } else {
        axios.post('https://624e91f177abd9e37c88446a.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
        }

    }catch(error){
        alert(' Не удалось добовить товар');
        }
      };

  const onRemoveItem = (id) => {
     axios.delete(`https://624e91f177abd9e37c88446a.mockapi.io/cart/${id}`);
     setCartItems((prev) => prev.filter((item) => item.id !=id));
  };

    const onAddFavorites = async (obj) => {
      try {
      if (favorites.find((favObj) => favObj.id == obj.id)) {
        axios.delete(`https://624e91f177abd9e37c88446a.mockapi.io/favorites/${obj.id}`);
        // setFavorites((prev) => prev.filter((item) => item.id != obj.id));
      } else {
        const {data} = await axios.post('https://624e91f177abd9e37c88446a.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
        }
      } catch (error) {
        alert(' Не удалось добовить товар');
      }
    };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
  <div className ="wrapper">
    {cartOpen &&
     (<Drawer items={cartItems} onClose= {() => setCartOpen(false)} onRemove={onRemoveItem}/>
      )}
     <Header onClickCart = {() => setCartOpen(true)}/>

      <Routes>
        <Route  path="/" exact
          element={<Home 
          items={items}
          cartItems={cartItems} 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddFavorites={onAddFavorites}
          onAddToCart={onAddToCart}
        />}/>
      </Routes>

      <Routes>
        <Route exact path="/favorites" 
          element={<Favorites items={favorites} onAddFavorites={onAddFavorites}/>}/>
      </Routes>

</div>
  ); 
}

export default App;
