'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Card } from 'flowbite-react'
import { Product } from '@/app/models/product.model'
import { useReducerCart } from '../../hooks/useCart'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const [{ addedProducts }, dispatch] = useReducerCart()
  const [added, setAdded] = useState(false)
  const { name, price, image } = product

  useEffect(() => {
    setAdded(addedProducts.some((addedProd) => addedProd.id === product.id))
  }, [addedProducts, product.id])

  const handleAddToCart = useCallback(() => {
    dispatch({ type: 'ADD_TO_CART', payload: { product } })
  }, [dispatch, product])

  return (
    <Card
      className="overflow-hidden"
      renderImage={() => (
        <figure className="h-70 w-full">
          <Image
            src={`/assets/images/${image}`}
            alt={name}
            width={340}
            height={280}
            style={{
              width: '100%',
              height: '280px',
              objectFit: 'cover',
            }}
          />
        </figure>
      )}
    >
      <a href="#">
        <h5 className="h-20 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <div className="flex flex-wrap items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
        <Button
          size="md"
          className="mt-1 w-full bg-sub-dominant tracking-wide hover:enabled:bg-sub-dominant-dark xs:w-auto"
          disabled={added}
          onClick={handleAddToCart}
        >
          {added ? 'Se agrego al carrito' : 'Agregar al carrito'}
        </Button>
      </div>
    </Card>
  )
}
