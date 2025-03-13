import type { NextConfig } from 'next'
import { withYak } from 'next-yak/withYak'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: true,
  },
}

export default withYak(nextConfig)
