import { Avatar } from "@chakra-ui/avatar"
import { VStack, Text, HStack, Container } from "@chakra-ui/layout" 
import { MDXRemote } from 'next-mdx-remote'
import dayjs from "dayjs"
import Tags from "./Tags"
import MDXComponents from "./MDXComponent"

export default function Article(props) {
  const { title, date, des, tags, content, author} = props 

  return (
    <VStack
      spacing={4}
      justifyContent="center"
      alignItems="flex-start">
        <Text fontSize="2xl" fontWeight="bolder" >
          {title}
        </Text>
        <HStack spacing={0}>
          <Avatar src={author.image.url} height={10} width={10} mr={2}/>
          <Text fontSize="lg">{author.name}</Text>
          <Text fontSize="lg">
            /{dayjs(date).format("YYYY.MM.DD")}
          </Text>
        </HStack>
        <Tags tags={tags}/>
        <MDXRemote {...content} components={MDXComponents}/>
    </VStack>
  )
}