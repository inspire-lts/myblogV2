import { Container, Link, Text } from "@chakra-ui/layout";
import { serialize } from 'next-mdx-remote/serialize'
import Article from "../../components/Article";
import { Giscus } from "@giscus/react"
import { getPost, getPostSlug } from "../../lib/data";

export default function Blog({ post, content }) {
    return (
        <Container maxW="container.sm" p={6}>
            <Article {...post} content={content} />
            <Giscus
                repo="inspire-lts/myblogV2"
                repoId="R_kgDOGcK1GA"
                category="Announcements"
                categoryId="DIC_kwDOGcK1GM4CARvA"
                mapping="url"
                reactionsEnabled="1"
                emitMetadata="0"
                theme="light"
            />
            <Link href="/blog">
                <Text
                    mt={5}
                    color="red.600">
                    返回主页
                </Text>
            </Link>
        </Container>
        
    )
}

export const getStaticPaths = async() => {
    const slugRes = await getPostSlug()
    const slugs = slugRes.posts

    
    return {
        paths: slugs.map(slug => ({params: {slug: slug.slug}})),
        fallback: false
    }
}

export const getStaticProps = async({ params }) => {
    const post = await getPost(params.slug)

    return {
        props: {
            post: post.posts[0],
            content: await serialize(post.posts[0].content)
        }
    }
}

