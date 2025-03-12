import Link from 'next/link'
import { LuArrowLeft } from 'react-icons/lu'
import { Button } from 'flowbite-react'

import { ContentSection } from '@/components/containers'
import CartProducts from './inc/CartProducts'

export default function ShopCartPage() {
  return (
    <ContentSection>
      <div className="mb-15 flex w-full flex-col text-center">
        <h1 className="title-font mb-2 text-3xl font-medium text-gray-900 sm:text-4xl">
          Productos agregados
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          Productos que has agregado al carrito de compras, compruébalos y finaliza tu
          compra.
        </p>
      </div>

      <div className="mx-auto mb-4 flex w-full pr-4 lg:w-2/3">
        <Link
          className="ml-auto inline-flex items-center text-sub-dominant-link lg:mb-0"
          href="/shop/products"
        >
          <LuArrowLeft className="mr-2" />
          Ir a productos
        </Link>
      </div>

      <CartProducts />

      <div className="mx-auto mt-4 flex w-full pl-4 lg:w-2/3">
        <Button className="ml-auto bg-sub-dominant hover:enabled:bg-sub-dominant-dark">
          Comprar
        </Button>
      </div>
    </ContentSection>
  )
}
