import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'flowbite-react'
import { HiShoppingCart } from 'react-icons/hi'

import shoppingBagLogo from '../../public/assets/shopping-bag.svg'

export default function Header() {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
          <Image alt="Logo shop bag" src={shoppingBagLogo} width={40} />
          <span className="ml-3 text-xl">Shopping</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>

        <Link href="/shop/cart">
          <Button
            dir="rtl"
            size="md"
            gradientDuoTone="purpleToBlue"
            pill
            className="fixed bottom-4 right-4 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full md:relative md:bottom-auto md:right-auto md:z-auto md:block md:h-auto md:w-auto"
          >
            <HiShoppingCart className="h-5 w-5" />
            <span className="top-0auto absolute end-auto -me-1 -mt-1 flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500/75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-red-600"></span>
            </span>
          </Button>
        </Link>
      </div>
    </header>
  )
}
