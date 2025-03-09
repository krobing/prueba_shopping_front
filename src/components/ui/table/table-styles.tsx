import { atoms, styled } from 'next-yak'
import { TableHeadCell } from 'flowbite-react'

export const HeadCell = styled(TableHeadCell)`
  ${atoms('bg-gray-100 py-4 dark:bg-gray-700')}
`
