import { GraphQLClient, gql } from 'graphql-request'

const endpoint = "https://api-ap-northeast-1.graphcms.com/v2/ckw7d7j2q081n01xq6xkd1fok/master"
const graphqlClient = new GraphQLClient(endpoint)


export const getPosts = async() => {

  const query = gql`
  {
    posts(orderBy: date_DESC) {
      title
      date
      slug
      tags
      des
      author {
        name
        image {
          url
          width
          height
        }
      }
    }
  }`

  return await graphqlClient.request(query)
}

export const getPost = async( slug) => {

  const query = gql`
  query getPost($slug: String!) {
    posts(where: {slug: $slug}) {
       title
      date
      slug
      tags
      des
      content
      author {
        name
        image {
          url
          width
          height
        }
      }
    }
  }`

  const variables = {
    slug
  }
  return await graphqlClient.request(query, variables)
}

export const getPostSlug = async() => {

  const query = gql`
  {
    posts {
      slug
    }
  }`

  return await graphqlClient.request(query)
}

export const getTags = async() => {
  const query = gql`
  {
    posts {
      tags
    }
  }`

  return await graphqlClient.request(query)
}