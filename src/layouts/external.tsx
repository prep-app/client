
import Image from 'next/image'
import { ReactNode } from 'react'
import Footer from '../components/footer'

function ExternalLayout({ children }: { children: ReactNode }) {
  return (
    <>
        {children}

        {/* </Center> */}

      {/* <Footer></Footer> */}
    </>
  )
}

export default ExternalLayout
