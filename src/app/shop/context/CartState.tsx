'use client'

import { createReducerCtx, ReducerCtxType } from '@/hooks/createReducerCtx'
import { Product } from '@/app/models/product.model'

// types declaration
export type StateShape = {
  addedProducts: Product[]
  isEmpty: boolean
}

export type ActionShape =
  | {
      type: 'ADD_TO_CART'
      payload: {
        product: Product
      }
    }
  | {
      type: 'REMOVE_FROM_CART'
      payload: {
        productId: number
      }
    }

// define initial state
const initialState: StateShape = {
  addedProducts: [],
  isEmpty: true,
}

const reducer = (state: StateShape, action: ActionShape): StateShape => {
  const addedProducts = state.addedProducts

  switch (action.type) {
    case 'ADD_TO_CART':
      const product = action.payload.product
      const hasProduct = addedProducts.some((addedProd) => addedProd.id === product.id)
      const updatedProducts = hasProduct ? addedProducts : [...addedProducts, product]

      return {
        ...state,
        addedProducts: updatedProducts,
        isEmpty: updatedProducts.length === 0,
      } // add product to cart
    case 'REMOVE_FROM_CART':
      const productId = action.payload.productId
      const changedProducts = addedProducts.filter(
        (addedProd) => addedProd.id !== productId,
      )

      return {
        ...state,
        addedProducts: changedProducts,
        isEmpty: changedProducts.length === 0,
      } // remove product from cart
    default:
      return state
  }
}

export let CartContext: React.Context<ReducerCtxType<StateShape, ActionShape>>

const createCartProvider = () => {
  const [ctx, CartProvider] = createReducerCtx(reducer, initialState)
  CartContext = ctx

  return CartProvider
}

export default createCartProvider
