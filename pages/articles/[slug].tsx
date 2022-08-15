import { Center, Container, Flex, VStack, Text, Box, Heading } from '@chakra-ui/react'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import Butto from '../../components/button'
import Tag from '../../components/tag'
import MainLayout from '../../layouts/main'
import useHeadingsData from '../../hooks/use-heading-data'
import { getSinglePosts } from '../../utils/mdx'
import { Heading2, Paragraph } from '../../components/text'

function Article({ code, frontmatter }: any) {
  const Component = getMDXComponent(code)

  const { nestedHeadings } = useHeadingsData()
  return (
    <MainLayout>
      <Flex width="full" gap={'10px'}>
        <Flex width={'20%'}>

            <h1>{frontmatter.title}</h1>
    
        </Flex>
        <Flex width={'60%'} borderX="1px" borderColor="gray.200">
          <Container width="full">
            <Box py={'40px'}>
              <Heading>{frontmatter.title}</Heading>
            </Box>
            <Box id="Article_render">
              <Component components={{ Button: Butto, Tag, h2: Heading2, p: Paragraph }} />
            </Box>
          </Container>
        </Flex>
        <Flex direction="column" borderLeft="1px" borderColor="gray.200">
          <Box pos="sticky" top="10" px="2">
            <Text> On this Page</Text>
            <VStack align="flex-start">
              {nestedHeadings.map(({ id, title, items }, i) => (
                <Link key={i} href={`#${id}`}>
                  {title}
                </Link>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </MainLayout>
  )
}

export default Article

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params = {} } = context
  const post = await getSinglePosts(params.slug as string)
  return {
    props: post,
  }
}
