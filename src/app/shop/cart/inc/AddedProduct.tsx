import { useCallback, type MouseEvent } from 'react'
import Image from 'next/image'
import { TableCell, TableRow } from 'flowbite-react'

import { Product } from '@/app/models/product.model'
import { useReducerCart } from '../../hooks/useCart'

type Props = {
  product: Product
}

export default function AddedProduct({
  product: { id: productId, name, price, image },
}: Props) {
  const dispatch = useReducerCart()[1]

  const handleRemoveFromCart = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } })
    },
    [dispatch, productId],
  )

  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell className="p-4">
        <figure className="h-10 w-15">
          <Image
            src={`/assets/images/${image}`}
            alt={name}
            width={340}
            height={280}
            style={{
              width: '100%',
              height: '40px',
              objectFit: 'cover',
            }}
          />
        </figure>
      </TableCell>
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {name}
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>
        <a
          href="#"
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          onClick={handleRemoveFromCart}
        >
          Quitar
        </a>
      </TableCell>
    </TableRow>
  )
}
