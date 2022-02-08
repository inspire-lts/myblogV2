import { Divider, Flex, Heading, HStack, Text, Box } from "@chakra-ui/layout";
import { Container, Image } from "@chakra-ui/react";
import ArticleLists from "../components/ArticleLists";
import { getPosts } from "../lib/data";

export default function Home({ data: { posts } }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <Container maxW="container.sm" p={4}>
      <HStack justifyContent="center">
        <Box p={5}>
          <Text fontSize={"2xl"} fontWeight="bold" >
            小炒肉
          </Text>
          <p>前端练习生 🧐 前端开发者</p>
        </Box>
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src={recentPosts[0].author.image.url}
          alt="Profile image"
        />
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
