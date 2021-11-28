import { useRouter } from "next/router"
import Link from "next/link"
import { Button } from "@chakra-ui/button"
import { Text } from "@chakra-ui/layout"

export default function NavLink({nav, to}) {
    const { pathname } = useRouter()

    return (
        <Link href={to} variant={pathname === to ? "solid" : "ghost"}>
            <Button as="a" variant={pathname === to ? "solid" : "ghost"} color="red.700">
                {nav}
            </Button>
        </Link>
    )
}

