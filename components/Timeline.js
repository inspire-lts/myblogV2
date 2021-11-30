import { VStack, Text, Box } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade'

export default function Timeline({direction, content, children}) {
  const contentArray = content.split(' ')
  return (
    <Fade
      left={direction === "left"}
      right={direction === "right"}>
        <Box 
          position="relative"
          p={2}
          ml={10}>
          <VStack
            key={content}
            _after={{content: `""`, height: "80px", borderRight: "2px", borderColor: "red.400", left: "-4px", position: "absolute"  }}
            >
            {contentArray.map((content) => {
              return (
                <Text
                  fontSize="xs"
                  color="gray.500">
                    {content}</Text>
              )
            })}
          </VStack>
        </Box>
    </Fade>
  )
}