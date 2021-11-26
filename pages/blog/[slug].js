import { Container } from "@chakra-ui/layout";
import { serialize } from 'next-mdx-remote/serialize'
import Article from "../../components/Article";
import { getPost, getPostSlug } from "../../lib/data";

export default function Blog({ post, content }) {
    return (
        <Container maxW="container.lg" p={6}>
            <Article {...post} content={content} />
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
    console.log(post)
    return {
        props: {
            post: post.posts[0],
            content: await serialize(post.posts[0].content)
        }
    }
}

