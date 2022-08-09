import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { getAllPosts } from '../../utils/mdx'
import MainLayout from '../../layouts/main'
import { Box, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'

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
      <VStack>
        <Flex minH="80" align="center" justify="center" direction="column">
            <Heading>Test questesion</Heading>
            <Text>Pratice and get ready for your coding interviews</Text>
        </Flex>

        <Container>
          {posts.map(({ slug, frontmatter: { title, date } }: Posts, i: number) => (
            <div key={i} className={styles.card}>
              <h3>{title}</h3>
              {date}
              <br></br>

              <Link href={`/articles/${slug}`}>Read more</Link>
            </div>
          ))}
        </Container>
      </VStack>
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
