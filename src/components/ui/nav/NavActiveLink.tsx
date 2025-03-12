'use client'

import { type LinkProps } from 'next/link'
import type { RouteType } from 'next/dist/lib/load-custom-routes'
import { atoms, css } from 'next-yak'
import { usePathname } from 'next/navigation'

import { NavLink } from './nav-styles'

type NavActiveLinkProps = Omit<LinkProps<RouteType>, 'href'> & {
  path: LinkProps<RouteType>['href']
}

export default function NavActiveLink({ path, children, ...props }: NavActiveLinkProps) {
  const currentPath = usePathname()

  return (
    <NavLink
      href={path}
      css={css`
        ${path === currentPath ? atoms('text-dominant hover:text-dominant-dark') : ''}
      `}
      {...props}
    >
      {children}
    </NavLink>
  )
}
