import { styled, atoms } from 'next-yak'

export const MainWrapper = styled.main`
  ${atoms('flex min-h-screen w-full flex-col')}
`
export const Container = styled.div`
  ${atoms(
    'container mx-auto flex flex-auto flex-col bg-slate-50 sm:rounded-lg xl:rounded-none',
  )}
`

export const ContentSection = styled.section`
  ${atoms('px-5 py-15')}
`
