import { useState } from "react"
import { Divider, Flex } from "@chakra-ui/layout"
import { Container, Input } from "@chakra-ui/react"
import ArticleLists from "../components/ArticleLists"
import { getPosts, getTags } from "../lib/data"
import Tags from "../components/Tags"

export default function Home({ data: { posts}, tags }) {
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
      <Tags tags={tags}/>
      <Divider p={3}/>
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
  const tags = await getTags()

  return {
    props: {
      data,
      tags: MergeTags(tags.posts)
    }
  }
}

function MergeTags(tags) {
  const mergeTags = []
  tags.forEach((tag) => {
    mergeTags.push(tag.tags)
  })

  return [...new Set(mergeTags.flat(Infinity))]
}
