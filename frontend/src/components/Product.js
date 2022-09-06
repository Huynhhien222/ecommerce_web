import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  //<Card style={{ width: '15rem' }} className='rounded text-white ' bg='success'>
  return (
    <div className='each-row'>
    
    <Card className='my-3 p-3 rounded text-white ' bg='dark'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='card-title' bg='dark'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</Card.Text>
      </Card.Body>
    </Card>
    </div>

  );
};

export default Product;
