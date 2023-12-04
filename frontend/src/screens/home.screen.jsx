import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/product.component'

const Home = () => {
  const [products, setProducts] = useState(useLoaderData())

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
