import React from "react";

import Card from "../components/Card";


function Home({
          items,
          searchValue,
          setSearchValue,
          onChangeSearchInput,
          onAddToFavorite,
          onAddToCart,
          isLoading,
        }) {
	
	 const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

 return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };

	return(
		<section>
  <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все свечи'}</h1>
        <div className="serch-block d-flex">
          <img className="" width={18} height={18} src="img/search.svg" alt="Search"/>
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="img/cross.svg"
              alt="Clear"
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
</section>
	);
}

export default Home;