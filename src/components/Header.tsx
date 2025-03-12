import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { HiShoppingCart } from 'react-icons/hi'

import { useReducerCart } from '@/app/shop/hooks/useCart'

// UI components
import { NavActiveLink, NavMenu } from '@/components/ui/nav'
import { Container } from '@/components/containers'

// Logo
import shoppingBagLogo from '../../public/assets/shopping-bag.svg'

export default function Header() {
  const [{ isEmpty: isCartEmpty }] = useReducerCart()

  return (
    <header className="body-font text-gray-600">
      <Container className="flex-wrap items-center p-5 md:flex-row">
        <Link
          href="/shop/products"
          className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
        >
          <Image alt="Logo shop bag" src={shoppingBagLogo} width={40} />
          <span className="ml-3 text-xl">Shopping</span>
        </Link>

        <NavMenu>
          <NavActiveLink path="/shop/products">Productos</NavActiveLink>
        </NavMenu>

        <Link href="/shop/cart">
          <Button
            dir="rtl"
            size="md"
            gradientDuoTone="purpleToBlue"
            pill
            className="fixed bottom-4 right-4 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full md:relative md:bottom-auto md:right-auto md:z-auto md:block md:h-auto md:w-auto"
          >
            <HiShoppingCart className="h-5 w-5" />
            {!isCartEmpty && (
              <span className="absolute end-auto top-auto -me-1 -mt-1 flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500/75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-red-600"></span>
              </span>
            )}
          </Button>
        </Link>
      </Container>
    </header>
  )
}
