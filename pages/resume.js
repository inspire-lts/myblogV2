import { Container, Flex } from "@chakra-ui/react"
import Timeline from "../components/Timeline"
import TimeHeader from "../components/TimeHeader"


export default function Resume() {

  return (
    <Container
      mt={2}
      maxW="container.sm"
      centerContent
      p={4}
      shadow="2xl"
      h="100vh">
        <Flex
          flexDirection="column"
          alignItems="flex-start">
            <TimeHeader>1997</TimeHeader>
            <Timeline
              direction="right"
              content="4月 生啦生啦👶🏻"/>
            <TimeHeader mt={8}>2015</TimeHeader>
            <Timeline
              direction="right"
              content="上大学啦🎓 @物联网工程"/>
            <TimeHeader mt={8}>......</TimeHeader>
            <Timeline
              direction="left"
              content="就是玩儿🎮 硬件😭"/>
            <TimeHeader mt="30px">2019</TimeHeader>
            <Timeline
              direction="right"
              content="6月本科毕业😎 9月读研@计算机技术🎉"/>
            <TimeHeader mt={8}>2021</TimeHeader>
            <Timeline
              direction="left"
              content="@美团实习 前端切图仔💪"/>
            <TimeHeader mt={8}>......</TimeHeader>
            <Timeline
              fontSize="2xl"
              direction="right"
              content="????"/>
            <TimeHeader mt={14}>💀 ⚰️</TimeHeader>
         </Flex>
    </Container>
  )
 
}