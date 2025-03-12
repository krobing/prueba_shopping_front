'use client'

import { Table, TableBody, TableCell, TableHead, TableRow } from 'flowbite-react'

import { useReducerCart } from '../../hooks/useCart'

// Custom components
import { HeadCell } from '@/components/ui/table'
import AddedProduct from './AddedProduct'

export default function CartProducts() {
  const [{ addedProducts }] = useReducerCart()

  return (
    <div className="mx-auto w-full overflow-auto lg:w-2/3">
      <Table>
        <TableHead>
          <HeadCell className="p-4">
            <span className="sr-only">Imagen</span>
          </HeadCell>
          <HeadCell>Nombre del producto</HeadCell>
          <HeadCell>Precio</HeadCell>
          <HeadCell className="w-10">
            <span className="sr-only">Editar</span>
          </HeadCell>
        </TableHead>

        <TableBody className="divide-y">
          {addedProducts.map((addedProd) => (
            <AddedProduct key={addedProd.id} product={addedProd} />
          ))}

          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="text-right">
              <span className="sr-only">Total</span>
            </TableCell>
            <TableCell className="text-right text-gray-800">Total</TableCell>
            <TableCell colSpan={2}>
              ${addedProducts.reduce((acc, addedProd) => acc + addedProd.price, 0)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
