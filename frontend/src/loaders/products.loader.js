import axios from 'axios'

const fetchProducts = async () => {
  const { data } = await axios.get('/api/products')

  return data
}

export default fetchProducts
