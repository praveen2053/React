import React, { useEffect, useState } from 'react';
                                                                            import { Link } from 'react-router-dom';
const ApiFetch = () => {
  const [data, setData] = useState([]);
  const [error] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result.products);
    };
    
    fetchData();
  }, []);

  const displayedItems = data.slice(0, 3);

  return (
    <div>
      <h1>API Data</h1>
      {error && <p>Error: {error}</p>}
      <ul className="product-ul">
        {displayedItems.map((item) => (
          <li className="product-li" key={item.id}>
            {item.images && item.images.length > 0 && (
              <img src={item.images[0]} alt={item.title} style={{ width: '250px' }} />
            )}
            <h2>{item.title}</h2>
            <p>Discount Price: {item.discountPercentage}%</p>
            <p>Price: ${item.price}</p>
            <Link to={`/product/${item.id}`}>
              <button className='btn btn-dark'>View Product</button>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/apifetchall">
        <button className='btn btn-dark'>View all products</button>
      </Link>
    </div>
  );
};

export default ApiFetch;
