import { useGetProductsQuery } from '../redux/slices/productsApi.slice'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/product.component'
import Loader from '../components/loader.component'
import Message from '../components/message.component'

const Home = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
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
      )}
    </>
  )
}

export default Home
