import axios from 'axios'

const fetchProduct = async ({ params: { id } }) => {
  const { data } = await axios.get('/api/products/' + id)
  return data
}

export default fetchProduct
