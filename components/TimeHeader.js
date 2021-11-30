import { Text } from "@chakra-ui/layout"

export default function TimeHeader(props) {

  return (
    <Text
      fontSize="md"
      color="white"
      bgColor="orange"
      w="80px"
      borderRadius="2px"
      textAlign="center"
      {...props}
      >
      {props.children}
    </Text>
  )
}