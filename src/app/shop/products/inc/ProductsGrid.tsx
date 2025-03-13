'use client'

import { use } from 'react'

// Custom Components
import ProductCard from './ProductCard'
import { Product } from '@/app/models/product.model'
import BudgetFilter from './BudgetFilter'

// hooks
import useBestCombination from '../../hooks/useBestCombination'

type Props = {
  products: Promise<Product[]>
}

export default function ProductsGrid({ products }: Props) {
  const allProducts = use(products)
  const { bestProducts, setBudget, setBestProducts } = useBestCombination(allProducts, 0)

  const handleBudgetFilter = (budget: number) => {
    if (budget) {
      setBudget(budget)
    } else {
      setBestProducts(allProducts)
    }
  }

  return (
    <>
      <BudgetFilter onFilter={handleBudgetFilter} />
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
