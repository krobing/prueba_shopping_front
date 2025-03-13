'use client'

import { FormEvent, useCallback, useRef } from 'react'
import { CustomFlowbiteTheme, Label, TextInput } from 'flowbite-react'

const InputCustomTheme: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: { base: 'placeholder-slate-400' },
  },
}

type Props = {
  onFilter?: (budget: number) => void
}

export default function BudgetFilter({ onFilter = () => {} }: Props) {
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const bounce = useCallback((fn: () => void, ms = 1000) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    timeout.current = setTimeout(fn, ms)
  }, [])

  const handleInput = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value
      bounce(() => onFilter(parseFloat(value) || 0))
    },
    [bounce, onFilter],
  )

  return (
    <div className="mb-3 inline-flex gap-2">
      <Label htmlFor="budget-filter" value="Filtrar por presupuesto:" />
      <TextInput
        id="budget-filter"
        type="number"
        placeholder="Ej: 400"
        onInput={handleInput}
        theme={InputCustomTheme}
      />
    </div>
  )
}
