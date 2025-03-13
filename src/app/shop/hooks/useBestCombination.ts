'use client'

import { useCallback, useState } from 'react'
import { Product } from '@/app/models/product.model'

export default function useBestCombination(products: Product[], initBudget: number) {
  const [bestProducts, setBestProducts] = useState(products)

  const setBudget = useCallback(
    (budget: number) => {
      const filterSum: number[] = []
      const filterProducts: Array<Product[]> = []
      let nearestIdx = -1

      let x = 0
      for (let i = 0; i < products.length; i++) {
        const prod = products[i]

        if (prod.price <= budget) {
          filterSum[x] = prod.price
          filterProducts[x] = []
          filterProducts[x].push(prod)

          for (let j = 0; j < products.length && j !== i; j++) {
            const nextProd = products[j]

            if (filterSum[x] + nextProd.price <= budget) {
              filterSum[x] += nextProd.price
              filterProducts[x].push(nextProd)
            }
          }

          x++
        }
      }

      filterSum.forEach((sum, index, sumArr) => {
        if (index + 1 < sumArr.length) {
          if (sum > sumArr[index + 1]) {
            sumArr[index] = sumArr[index + 1]
            sumArr[index + 1] = sum

            if (nearestIdx === -1) {
              nearestIdx = index
            }
          } else {
            nearestIdx = index + 1
          }
        } else if (nearestIdx === -1) {
          nearestIdx = index
        }
      })

      if (nearestIdx > -1) setBestProducts(filterProducts[nearestIdx])
    },
    [products],
  )

  setBudget(initBudget)

  return { bestProducts, setBudget, setBestProducts }
}
