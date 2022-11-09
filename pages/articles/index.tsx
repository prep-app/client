import type { NextPage } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../../utils/mdx'
import MainLayout from '../../layouts/main'
import { Box, Button, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'

interface Posts {
  slug: string
  frontmatter: frontmatter
}

interface frontmatter {
  title: string
  date: string
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <MainLayout>
      <Flex backgroundColor="orange.100" minH="80" align="center" justify="center" direction="column">
        <Heading>Test questesion</Heading>
        <Text>Pratice and get ready for your coding interviews</Text>
      </Flex>
      <Container maxW="container.lg" py="20">
        <Flex justify="space-between" wrap="wrap" mx="-5">
          {posts.map(({ slug, frontmatter: { title, date } }: Posts, i: number) => (
            <Box width={'50%'} key={i} px="5">
              <Box border="1px" p="2" my="5" _hover={{ background: 'gray.100' }}>
                <Heading as="h3" size="md">
                  {title}
                </Heading>
                <Text mb="5">{date}</Text>
                <Link href={`/articles/${slug}`} passHref>
                  <Button variant="link">Read more</Button>
                </Link>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </MainLayout>
  )
}

export default Home

export async function getServerSideProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
