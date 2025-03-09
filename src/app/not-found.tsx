import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">404</h1>
      <div className="absolute rotate-12 rounded bg-sub-dominant px-2 text-sm">
        Pagina no encontrada
      </div>
      <div className="mt-5">
        <Link href="/shop/products">
          <button className="group relative inline-block text-sm font-medium text-sub-dominant focus:outline-none focus:ring active:text-sub-dominant-dark">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-sub-dominant transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative block border border-current bg-[#1A2238] px-8 py-3">
              Ir a productos {'>>'}
            </span>
          </button>
        </Link>
      </div>
    </main>
  )
}
