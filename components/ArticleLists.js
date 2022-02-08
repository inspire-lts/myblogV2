import { Flex, Text, Divider, HStack } from "@chakra-ui/layout";
import dayjs from "dayjs";
import Link from "next/link";
import Animation from "./Animation";
import Tags from "./Tags";

export default function Article(props) {
  const { title, slug, date, des, tags } = props;

  return (
    <Animation>
      <Flex direction="column" mt={4} justifyContent="start" key={slug}>
        <Link href={`/blog/${slug}`}>
          <Text
            fontWeight="bold"
            fontSize="lg"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            {title}
          </Text>
        </Link>
        <HStack>
          <Text fontSize="md">{dayjs(date).format("YYYY.MM.DD")}</Text>
          <Tags tags={tags} />
        </HStack>
        <Text fontSize="md" color="gray.500">
          {des}
        </Text>
        <Divider py={2} />
      </Flex>
    </Animation>
  );
}
