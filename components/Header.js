import { Flex, Heading, Text } from "@chakra-ui/react"
import NavLink from "./NavLink"
import SwitchMode from "./SwitchMode"

export default function Header() {
   return (
       <Flex display="flex" justifyContent="center" mt={4}>
           <Text mr={6} fontSize="2xl">LTS</Text>
           <Flex display="flex" width="300px" justifyContent="space-around" alignItems="center">
             <NavLink to={"/"} nav={"首页"} />
             <NavLink to={"/blog"} nav={"博客"} />
             <NavLink to={"/resume"} nav={"自己"} />
             <NavLink to="/magic" nav="实验室" />
             <SwitchMode/>
           </Flex>
       </Flex>
   )
}