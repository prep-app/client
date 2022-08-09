import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Stack, Flex, Button, Text, Heading, useBreakpointValue, Image, FormControl, Input, FormLabel } from '@chakra-ui/react'
import ExternalLayout from '../layouts/external'
import React, { useState } from 'react'

interface LoginForm {
  email?: string
  password?: string
}

const Login: NextPage = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' })

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }

  return (
    <ExternalLayout>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'gray.400',
                  zIndex: -1,
                }}
              >
                Login
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Prepare for your Interviews.
            </Text>

            <form>
              <FormControl>
                <FormLabel> Email</FormLabel>
                <Input type="email" value={loginForm.email} name="email" onChange={handleLoginChange}></Input>
              </FormControl>
              <FormControl>
                <FormLabel> Password</FormLabel>
                <Input type="password" name="password" value={loginForm.password} onChange={handleLoginChange}></Input>
              </FormControl>
            </form>
            <Button
              rounded="md"
              bg={'orange.400'}
              color={'white'}
              _hover={{
                bg: 'orange.500',
              }}
            >
              Sign In
            </Button>
            <Flex justifyContent="center">
              <Text mr="2">Don&#39;t have an account?</Text>
              <NextLink href={'/register'} passHref>
                <Button display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600} variant="link">
                  Sign Up
                </Button>
              </NextLink>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </ExternalLayout>
  )
}

export default Login
