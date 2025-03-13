import { Suspense } from 'react'

// components
import { ContentSection } from '@/components/containers'
import { PropagateLoader } from '@/components/ui/loaders'
import ProductsGrid from './inc/ProductsGrid'

// data fetchers
import { fetchProducts } from '@/lib/fetcher'

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
