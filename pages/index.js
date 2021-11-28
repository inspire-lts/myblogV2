import { Divider, Flex, Text } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import ArticleLists from "../components/ArticleLists"
import { getPosts } from "../lib/data"

export default function Home({ data: { posts} }) {
  const recentPosts = posts.slice(0, 3)
  return (
    <Container maxW="container.sm" p={4}>
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
