'use server'

import type { Product } from '@/app/models/product.model'

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`

export const fetchProducts = async (): Promise<Product[]> => {
  // const res = await import('@/data/products.json')
  // const products = res.default

  const resp = await fetch(`${apiUrl}/products`, {
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!resp.ok) {
    throw new Error('Hubo un error al cargar los productos')
  }

  const data = await resp.json()
  const products = data.data

  return products
}
