import {
  Center,
  Container,
  Flex,
  VStack,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { getMDXComponent } from "mdx-bundler/client";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import Butto from "../../components/Button/Button";
import Tag from "../../components/tag";
import MainLayout from "../../layouts/main";
import useHeadingsData from "../../hooks/use-heading-data";
import { getSinglePosts } from "../../utils/mdx";
import { Heading2, Paragraph } from "../../components/text";
import useIntersectionObserver from "../../hooks/use-intersection-observer";
import React from "react";

type TOCLinkPropT = {
  children: React.ReactNode;
  isActive: boolean;
  href?: string;
  onClick?: () => void;
};

const TOCLink = React.forwardRef<HTMLAnchorElement, TOCLinkPropT>(function link(
  { children, isActive, href, onClick, ...props },
  ref
) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  );
});

function Article({ code, frontmatter }: any) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const { nestedHeadings } = useHeadingsData();
  const { activeId } = useIntersectionObserver();

  return (
    <MainLayout>
      <Container maxW="8xl">
        <Flex width="full" gap={"10px"}>
          <Flex width={"20%"}>
            <h1>{frontmatter.title}</h1>
          </Flex>
          <Flex width={"60%"} borderX="1px" borderColor="gray.200">
            <VStack p="10">
              <Box py={"20"}>
                <Heading>{frontmatter.title}</Heading>
              </Box>
              <Box id="Article_render">
                <Component
                  components={{
                    Button: Butto,
                    Tag,
                    h2: Heading2,
                    p: Paragraph,
                  }}
                />
              </Box>
            </VStack>
          </Flex>
          <Flex
            width={"20%"}
            direction="column"
            borderLeft="1px"
            borderColor="gray.200"
          >
            <Box pos="sticky" top="10" px="2">
              <Text> On this Page</Text>
              <VStack align="flex-start">
                {nestedHeadings.map(({ id, title, items }, i) => (
                  <Link
                    key={i}
                    href={`#${id}`}
                    scroll={false}
                    passHref
                    legacyBehavior
                  >
                    <TOCLink isActive={id == activeId}>{title}</TOCLink>
                  </Link>
                ))}
              </VStack>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
}

export default Article;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params = {} } = context;
  const post = await getSinglePosts(params.slug as string);
  return {
    props: post,
  };
};
