import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import Product from './Product'
import { Row, Col } from 'react-bootstrap'
import Paginate from './Paginate'

const SubProduct = ({ products }) => {
  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList
  //<Card style={{ width: '15rem' }} className='rounded text-white ' bg='success'>
  return (
    <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={20} md={8} lg={6} xl={2}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
  );
};

export default SubProduct;
