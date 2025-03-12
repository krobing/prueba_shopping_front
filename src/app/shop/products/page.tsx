import { Suspense } from 'react'

// components
import { ContentSection } from '@/components/containers'
import { PropagateLoader } from '@/components/ui/loaders'
import ProductsGrid from './inc/ProductsGrid'

// actions
import { fetchProducts } from './actions'

export default function ShopProductsPage() {
  const products = fetchProducts()

  return (
    <ContentSection>
      <Suspense fallback={<PropagateLoader />}>
        <ProductsGrid products={products} />
      </Suspense>
    </ContentSection>
  )
}
