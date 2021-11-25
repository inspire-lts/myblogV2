import { Flex, Heading } from "@chakra-ui/react"
import NavLink from "./NavLink"
import SwitchMode from "./SwitchMode"

export default function Header() {
   return (
       <Flex display="flex" justifyContent="center" mt={4}>
           <Heading mr={10}>LTS</Heading>
           <Flex display="flex">
             <NavLink to={"/"} nav={"首页"} />
             <NavLink to={"/blog"} nav={"博客"} />
             <NavLink to={"/resume"} nav={"自己"} />
             <SwitchMode/>
           </Flex>
       </Flex>
   )
}