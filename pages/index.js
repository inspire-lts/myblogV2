import { Divider, Flex, Heading, HStack, Text, Box } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";
import ArticleLists from "../components/ArticleLists";
import { getPosts } from "../lib/data";

export default function Home({ data: { posts } }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <Container maxW="container.sm" p={4}>
      <HStack justifyContent="center">
        <Box p={5} >
          <Text fontSize={"3xl"} fontWeight="bold" textAlign={"center"} >
            LTS
          </Text>
          <p>前端练习生 🧐 前端开发者</p>
        </Box>
      </HStack>
      <Text fontSize="xl">近期文章</Text>
      <Divider />
      <Flex justifyContent="center" direction="column">
        {recentPosts?.map((post) => {
          return <ArticleLists {...post} key={post.slug} />;
        })}
      </Flex>
    </Container>
  );
}

export const getStaticProps = async () => {
  const data = await getPosts();

  return {
    props: {
      data,
    },
  };
};
