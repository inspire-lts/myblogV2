import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { tagsColor } from "../lib/color";


export default function Tags({ tags }) {
    return (
        <Wrap spacing={4}>
            {
                tags.map((tag) => {
                    return (
                        <WrapItem key={tag}>
                            <Tag colorScheme={tagsColor[tag]}>{tag}</Tag>
                        </WrapItem>
                    )
                })
            }
        </Wrap>
    )
}