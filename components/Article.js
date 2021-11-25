import { Flex, Text } from "@chakra-ui/layout"
import dayjs from "dayjs"
import Link from "next/link"
import Tags from "./Tags"

export default function Article(props) {
  const { title, slug, date, des, tags} = props 

  return (
    <Flex direction="column" mt={4} justifyContent="start" >
      <Link href={`/blog/${slug}`}>
        <Text fontWeight="bold" fontSize="2xl">
          {title}
        </Text>
      </Link>
      <Text fontSize="lg">
        {dayjs(date).format("YYYY.MM.DD")}
      </Text>
      <Tags tags={tags}/>
      <Text fontSize="lg" color="gray.500">
        {des}
      </Text>
    </Flex>
  )
}