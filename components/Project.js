import { Image } from "@chakra-ui/image"
import { Text, VStack} from "@chakra-ui/layout"

export default function Project({title}) {
  return (
    <VStack>
      <Image
        src="https://bit.ly/sage-adebayo"
        boxSize="150"/>
      <Text fontSize="xl">{title}</Text>
    </VStack>
  )
}