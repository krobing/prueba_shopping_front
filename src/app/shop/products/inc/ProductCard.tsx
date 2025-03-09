import { Button, Card } from 'flowbite-react'

export default function ProductCard() {
  return (
    <Card
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="https://dummyimage.com/420x260"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      <div className="flex flex-wrap items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <Button
          size="md"
          className="mt-1 w-full bg-sub-dominant tracking-wide hover:enabled:bg-sub-dominant-dark xs:w-auto"
        >
          Agregar al carrito
        </Button>
      </div>
    </Card>
  )
}
