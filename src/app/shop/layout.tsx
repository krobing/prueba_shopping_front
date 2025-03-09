import { Container, MainWrapper } from '@/components/containers'
import Header from '@/components/Header'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainWrapper>
      <Header />
      <Container>{children}</Container>
    </MainWrapper>
  )
}
