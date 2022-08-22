import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
// import SubProduct from '../components/SubProduct'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'  


const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <div class="home-screen">
      <Meta />
      {!keyword ? (
        <>
        <ProductCarousel />
        {/* <SubProduct /> */}
        </>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <div>
          <Row>
            {products.map((product) => (
              //<Col key={product._id}  xl={4}>
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
          </div>
        </>
      )}
      </div>
    </>
  )
}

export default HomeScreen
// <Col key={product._id} sm={12} md={6} lg={4} xl={3}>