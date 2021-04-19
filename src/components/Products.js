import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  // TODO - fetch all products from the store
  //Once the store is set the products will be displayed
  const allProducts = useSelector((store) => store.products)

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
