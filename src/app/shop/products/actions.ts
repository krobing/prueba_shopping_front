'use server'

import { notFound } from 'next/navigation'
import type { Product } from '@/app/models/product.model'

const apiUrl = `${process.env.NEXT_APP_URL}/api`

export const fetchProducts = async (): Promise<Product[]> => {
  const resp = await fetch(`${apiUrl}/products`)

  if (!resp.ok) {
    notFound()
  }

  const data = await resp.json()
  return data
}
