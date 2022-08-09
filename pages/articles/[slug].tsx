import { Center, Container, Flex, VStack, Text, Box } from '@chakra-ui/react'
import { getMDXComponent } from 'mdx-bundler/client'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import Butto from '../../components/button'
import Tag from '../../components/tag'
import MainLayout from '../../layouts/main'
import useHeadingsData from '../../hooks/use-heading-data'
import { getSinglePosts } from '../../utils/mdx'
import { Heading2} from '../../components/text'

function Article({ code, frontmatter }: any) {
  const Component = getMDXComponent(code)


  const { nestedHeadings } = useHeadingsData()
  return (
    <MainLayout>
      <Center>
        <h1>{frontmatter.title}</h1>
      </Center>

      <Flex width="full">
        <Flex width={'20%'}></Flex>
        <Flex width={'60%'}>
          <Container>
            <Component components={{ Button: Butto, Tag, h2 : Heading2 }} />
          </Container>
        </Flex>
        <Flex direction="column">
          <Box pos="sticky" top="10">
            <Text> Table of Contents</Text>
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
