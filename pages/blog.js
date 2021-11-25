import { useState } from "react"
import { Flex } from "@chakra-ui/layout"
import { Container, Input } from "@chakra-ui/react"
import Article from "../components/Article"
import { getPosts } from "../lib/data"

export default function Home({ data: { posts} }) {
  const [searchValue, setSearchValue] = useState("")

  return (
    <Container maxW="container.lg" p={4}>
      <Input
        placeholder="搜索文章"
        mb={4}
        value={searchValue}
        size="lg"
        variant="outline"
        onChange={e => setSearchValue(e.target.value)}/>
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
