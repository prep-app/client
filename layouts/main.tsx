import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header></Header>

      <Box minH={'88vh'}>{children}</Box>
      <Footer></Footer>
    </>
  )
}

export default MainLayout
