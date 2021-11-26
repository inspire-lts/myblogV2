import { useState } from "react"
import { Flex } from "@chakra-ui/layout"
import { Container, Input } from "@chakra-ui/react"
import ArticleLists from "../components/ArticleLists"
import { getPosts } from "../lib/data"

export default function Home({ data: { posts} }) {
  const [searchValue, setSearchValue] = useState("")

  const filterPosts = posts.filter((post) => {
    return post.title.toUpperCase().includes(searchValue.toUpperCase())
  })

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
          filterPosts?.map((post) => {
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
