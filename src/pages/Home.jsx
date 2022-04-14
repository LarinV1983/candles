import React from "react";

import Card from "../components/Card";


function Home({items, 
          searchValue,
          setSearchValue,
          onChangeSearchInput,
          onAddFavorites,
          onAddToCart,
          cartItems,
        }) {
	return(
		<section>
  <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40">    
    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все свечи'}</h1>
  <div className="serch-block d-flex">
    <img width={18} heidth={18} src="img/menu-burger.svg" alt=""/>
    <input type="text" onChange={onChangeSearchInput} placeholder="Поиск..."/>
  </div>
</div>

<div className="d-flex flex-wrap">
  {items
    .filter((item) => item.title.toLowerCase()
    .includes(searchValue.toLowerCase())).map((item, index) => (
  <Card
    key={index} 
    title={item.title}
    price={item.price}
    imageUrl={item.imageUrl}
    onPlus={(obj)=> onAddToCart(obj)}
    onFavorite={(obj)=> onAddFavorites(obj)}
    added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
    loading
  />
  ))}
 
</div>
</div>
</section>
	);
}

export default Home;