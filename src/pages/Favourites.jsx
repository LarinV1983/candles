import Card from "../components/Card";

function Favorites({items, onAddFavorites}) {
  return(
    <section>
  <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40">    
    <h1>Избранное</h1>
</div>

  <div className="d-flex flex-wrap">
  {items
    .map((item) => (
  <Card
    key={item.title}
    id={item.id} 
    title={item.title}
    price={item.price}
    imageUrl={item.imageUrl}
    favor={true}
    onFavorite={onAddFavorites}
  />
  ))}
</div>
</div>
</section>
  );
}

export default Favorites;