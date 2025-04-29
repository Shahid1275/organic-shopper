import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Product = () => {
  const {productId} = useParams();
  const {products} = useSelector((state) => state.shop);
  const [productsData, setProductsData] = useState(false);

  const fetchProductsData = async () =>{

  }
  useEffect(() => {
    fetchProductsData();
  }, [])

  return (
    <div>Product</div>
  )
}

export default Product