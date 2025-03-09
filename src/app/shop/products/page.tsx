import { ContentSection } from '@/components/containers'
import ProductCard from './inc/ProductCard'

export default function ShopProductsPage() {
  return (
    <ContentSection>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </ContentSection>
  )
}
