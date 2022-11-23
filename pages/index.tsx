import { Box, Button, Container, Flex, Heading, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import MainLayout from '../layouts/main'

const Home: NextPage = () => {
  const textColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Box bg={'orange.100'}>
     <MainLayout>
        <Container maxWidth="8xl">
          <Box pt={'40'} pb={'20'} px="10" mt={'1.5'} bg="blackAlpha.900" color="white" borderRadius={'2xl'}>
            <Flex>
              <Box width={'50%'}>
                <Heading as={'h1'} size={'3xl'} mb={'10'}>
                  Getting ready for an <br /> Interview in tech?
                </Heading>
                <Text mb={'5'}>Let us help you prepare for your interview with your dream job, how about that!</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatum vitae quasi deserunt assumenda! Facilis, iure fugit. Ullam, rem
                  inventore sapiente laborum deleniti animi quibusdam eum corrupti dolorum, ratione accusamus.
                </Text>
                <HStack mt={'20'} gap={1}>
                  <Button size={"lg"} bgColor={'darkblue'}>Explore</Button>
                  <Button size={"lg"} bgColor={'white'} color={'black'}>
                    Take Test
                  </Button>
                </HStack>
              </Box>
            </Flex>
          </Box>
          <Box py="40">
            <Flex gap={'10'}>
              <Box minW={'30%'} borderRight={'2px'}>
                <Heading as={'h3'}>
                  Test interviews
                  <Text color={'darkblue'}>designed</Text>
                  for you by experts
                </Heading>
              </Box>
              <Flex gap={'1'}>
                <Box maxW={'50%'}>
                  <Heading color={'darkblue'} size={'md'} mb={'2.5'} as={'h4'}>
                    Modern Tech Interview questions and solutions
                  </Heading>
                  <Text color={textColor}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis rerum amet minima sequi inventore, autem tempora cupiditate reiciendis
                    sed esse asperiores nemo aliquam a. Doloribus odio sequi id cumque?
                  </Text>
                </Box>
                <Box maxW={'50%'}>
                  <Heading color={'darkblue'} size={'md'} mb={'2.5'} as={'h4'}>
                    Modern Tech Interview questions and solutions
                  </Heading>
                  <Text color={textColor}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis rerum amet minima sequi inventore, autem tempora cupiditate reiciendis
                    sed esse asperiores nemo aliquam a. Doloribus odio sequi id cumque?
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Container>
        <Box bg={'white'} py="40">
          <Container maxW={'8xl'}>
            <Flex mb={"20"} justifyContent={"center"}>
              <Heading>Stack</Heading>
            </Flex>
            <Flex gap={'10'} wrap={"wrap"}>
              {Array(6)
                .fill(null)
                .map((k, i) => (
                  <Box key={i} maxW={'30%'} bg={'orange.100'} p="10" borderRadius={{ base: 20 }}>
                    <Heading as={'h4'}>
                      Junior Frontend Develop
                      <Text as={"span"} color={'darkblue'}> Stack</Text>
                    </Heading>
                  </Box>
                ))}
            </Flex>
          </Container>
        </Box>
      </MainLayout>
    </Box>
  )
}

export default Home
