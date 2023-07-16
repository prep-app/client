import { Header } from '@/components/header'
import { ReactNode } from 'react'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header></Header>
      <div className="p-3">{children}</div>
    </div>
  )
}

export default MainLayout
