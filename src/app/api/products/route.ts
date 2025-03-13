import { fetchProducts } from '@/lib/fetcher'

export async function GET() {
  const data = await fetchProducts()

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
