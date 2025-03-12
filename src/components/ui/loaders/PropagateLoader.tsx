import { css, atoms } from 'next-yak'
import PropagateLoaderBase from 'react-spinners/PropagateLoader'
import type { LoaderSizeProps } from 'react-spinners/helpers/props'
import { useTheme } from '@/hooks/useTheme'

export default function PropagateLoader({ ...props }: LoaderSizeProps) {
  const theme = useTheme()

  return (
    <div
      css={css`
        ${atoms('flex flex-auto items-center justify-center')}
      `}
    >
      <PropagateLoaderBase
        color={theme.colors['sub-dominant'].DEFAULT}
        speedMultiplier={1.2}
        cssOverride={{
          display: 'block',
          margin: '0 auto',
        }}
        size={20}
        loading
        {...props}
      />
    </div>
  )
}
