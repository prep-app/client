import { Heading, Text } from '@chakra-ui/react';

export const Heading1 = (prop) => <Heading {...prop} as="h1" mb="1"></Heading>
export const Heading2 = (prop) => <Heading {...prop} as="h2" size="md" my="5"></Heading>

export const Paragraph = (prop) => <Text {...prop} mb="1.5"></Text>
