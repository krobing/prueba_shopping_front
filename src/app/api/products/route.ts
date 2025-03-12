export const dynamic = 'force-static'

export async function GET() {
  const res = await import('@/data/products.json')
  const products = res.default

  return new Response(JSON.stringify(products), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
