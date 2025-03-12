import Link from 'next/link'
import { atoms, styled } from 'next-yak'

export const NavMenu = styled.nav`
  ${atoms('flex flex-wrap items-center justify-center text-base md:ml-auto')}
`

export const NavLink = styled(Link)`
  ${atoms('mr-5 hover:text-gray-900')}
`
