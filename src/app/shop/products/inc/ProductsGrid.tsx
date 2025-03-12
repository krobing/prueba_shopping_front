import { use } from 'react'

import ProductCard from './ProductCard'
import { Product } from '@/app/models/product.model'

type Props = {
  products: Promise<Product[]>
}

export default function ProductsGrid({ products }: Props) {
  const allProducts = use(products)

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
