'use client'

import { Container, MainWrapper } from '@/components/containers'
import Header from '@/components/Header'
import createCartProvider from './context/CartState'

const CartProvider = createCartProvider()

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainWrapper>
      <CartProvider>
        <Header />
        <Container>{children}</Container>
      </CartProvider>
    </MainWrapper>
  )
}
