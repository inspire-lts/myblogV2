import { Divider, Flex, Heading, HStack, Text, Box } from "@chakra-ui/layout"
import { Container, Image } from "@chakra-ui/react"
import ArticleLists from "../components/ArticleLists"
import { getPosts } from "../lib/data"

export default function Home({ data: { posts} }) {
  const recentPosts = posts.slice(0, 3)
  return (
    <Container maxW="container.sm" p={4}>
      <HStack justifyContent="center">
        <Box p={5} >
          <Heading as="h2" variant="page-title">小炒肉</Heading>
          <p>前端练习生 🧐 前端开发者</p>
        </Box>
        <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/avator.jpg"
            alt="Profile image"
          />
      </HStack>
      <Text fontSize="2xl">近期文章</Text>
      <Divider/>
      <Flex justifyContent="center" direction="column">
        {
          recentPosts?.map((post) => {
            return (
              <ArticleLists {...post}/>
            )
          })
        }
      </Flex>
    </Container>
  )
}

export const getStaticProps = async() => {
  const data = await getPosts()

  return {
    props: {
      data
    }
  }
}
