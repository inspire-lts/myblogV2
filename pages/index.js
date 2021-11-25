import { Divider, Flex, Text } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import Article from "../components/Article"
import { getPosts } from "../lib/data"

export default function Home({ data: { posts} }) {
  
  return (
    <Container maxW="container.lg" p={4}>
      <Text fontSize="3xl">近期文章</Text>
      <Divider/>
      <Flex justifyContent="center" direction="column">
        {
          posts?.map((post) => {
            return (
              <Article {...post}/>
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
