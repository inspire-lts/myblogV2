import { useState } from "react"
import { Divider, Flex } from "@chakra-ui/layout"
import { Container, Input } from "@chakra-ui/react"
import ArticleLists from "../components/ArticleLists"
import { getPosts, getTags } from "../lib/data"
import Tags from "../components/Tags"
import FilterTags from "../components/FilterTags"

export default function Home({ data: { posts}, tags }) {
  const [searchValue, setSearchValue] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  const filterPosts = posts.filter((post) => {
    if (selectedTag)  return post.tags.includes(selectedTag)
    return post.title.toUpperCase().includes(searchValue.toUpperCase())
  })

  return (
    <Container maxW="container.sm" p={4}>
      <Input
        placeholder="搜索文章"
        mb={4}
        value={searchValue}
        size="sm"
        variant="outline"
        onChange={e => setSearchValue(e.target.value)}/>
      <FilterTags
        tags={tags}
        onTagClicked={tag => setSelectedTag(tag)}
        justify="center"/>
      <Divider p={3}/>
      <Flex justifyContent="center" direction="column">
        {
          filterPosts?.map((post) => {
            return (
              <ArticleLists {...post} key={post}/>
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
