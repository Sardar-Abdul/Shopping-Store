import React, {useState, useEffect} from 'react'
import Items from './Items'

function Shop() {
  const [product, setProduct] = useState([])
  const [fetchingData, setFetchingData] = useState(false)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    setFetchingData(true)
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setFetchingData(false)
    setProduct(data);
  }

  if (fetchingData) {
    return <div><strong>Please be pateient, data is being loaded...</strong></div>
  }

  
  return (
    <div>
      {product.map(item => <Items key = {item.id} product = {item}/>)}
    </div>
  )
}

export default Shop
