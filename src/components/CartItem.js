import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const CartItem = ({ product }) => {
  //Initializing dispatch
  const dispatch = useDispatch()

  return (
    <li>
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <div className="info">
        <span className="quantity">x{product.quantity}</span>
        <span className="sum">{product.price * product.quantity}:-</span>
      </div>

      <span className="actions">
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
        {/* This is adding functionality to the + sign once there is an existing item in the cart */}
        <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
      </span>
    </li>
  )
}
