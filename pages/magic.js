import { Container, Text } from "@chakra-ui/layout"
import Project from "../components/Project"

export default function Magic() {
  return (
    <Container
      maxW="container.sm">
        <Project
          title="change your face"
          detail="换脸"/>
      </Container>
  )
}