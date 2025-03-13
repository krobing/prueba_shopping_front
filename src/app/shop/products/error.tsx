'use client'

import { Button } from 'flowbite-react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex w-full flex-auto items-center justify-center bg-gray-200 px-16 md:px-0">
      <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-8 shadow-2xl md:px-8 lg:px-24">
        <p className="text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl">
          500
        </p>
        <p className="mt-4 text-2xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-5xl">
          Error de servidor
        </p>
        <p className="mt-8 border-y-2 py-2 text-center text-gray-500">{error.message}</p>

        <Button
          className="mt-2 border-b-4 border-sub-dominant-dark bg-sub-dominant hover:enabled:bg-sub-dominant-light"
          onClick={() => reset()}
        >
          Intentar nuevamente
        </Button>
      </div>
    </div>
  )
}
