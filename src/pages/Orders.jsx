import React from 'react';

import Card from "../components/Card";
import AppContext from '../context';
import axios from "axios";


function Orders() {
    // const { onAddToFavorit, onAddToCart } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchOrder() {
      try {
        const {data} = await axios.get('https://624e91f177abd9e37c88446a.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
  } catch (error) {
    alert('Ошибка при запросе заказов');
    console.log(error);
  }
   
    }

  fetchOrder();
  }, []);

  return(
    <section>
  <div className="content p-40">
  <div className="d-flex align-center justify-between mb-40">    
    <h1>Мои заказы</h1>
</div>

  <div className="d-flex flex-wrap">
  {(isLoading ? [...Array(8)] : orders).map((item, index) => (
  <Card
    key={index} 
    loading={isLoading} 
    {...item}
  />
  ))}
 
</div>
</div>
</section>
  );
}

export default Orders;