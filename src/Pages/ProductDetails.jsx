// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row,Col } from 'antd';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      
        const response = await fetch(`https://dummyjson.com/products/${id}`);
       
        const result = await response.json();
        setProduct(result);
     
    };

    fetchProduct();
  }, [id]);

 

  return (
    <div>
      <>
      <ul className='product1-ul '>
      {product && (
        
          <Row>
            <Col sm-1 className='border m-5'>
          <img src={product.images[0]} alt={product.title} style={{ width: '250px' }} />
            </Col>

            <Col sm-11 className=' product1-li border'>
            <div>
              <li>
                <h1>{product.title}</h1>
                <p>Price: ${product.price}</p>
                <p>Discount: {product.discountPercentage}%</p>
                <p>Description: {product.description.slice(0,104)}</p>
              </li>
            </div>
            </Col>
          </Row>
          
          
        
      )}
      </ul>
      </>
    </div>
    
  );
};

export default ProductDetails;
