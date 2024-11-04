import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ApiFetchAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch('https://dummyjson.com/products');
       
        const result = await response.json();
        setData(result.products);
     
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>API Data</h1>
      <ul className="product-ul container">
        {data.map((item) => (
          <li className="product-li" key={item.id}>
            {item.images && item.images.length > 0 && (
              <img src={item.images[0]} alt={item.title} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
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
    </div>
  );
};

export default ApiFetchAll;
