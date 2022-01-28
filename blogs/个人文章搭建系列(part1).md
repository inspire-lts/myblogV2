### 1. Nextjs框架介绍
首先，Nextjs是一个基于React的框架，并不是只提供了SSR功能。官网中显示的功能如下：![Snipaste_2021-11-30_19-02-11.png](https://media.graphcms.com/Wg3NgoIETJ2mTM5X7Qk6)
### 2. 预渲染
现在的前后端分离，客户端得到一个静态的空白HTML，然后通过`scrpit`标签拿到js，遇见ajax请求数据，渲染页面。下图是create-react-app官网查看源码后的结果：
![Snipaste_2021-11-30_19-45-28.png](https://media.graphcms.com/vDuc3rDHT1W5D2qXkObz)

这样通过js来渲染界面主要会有首屏时间过长和不利于SEO的缺点。那么为什么不考虑直接服务端预渲染好，客户端直接展示就成。
Nextjs中将预渲染分为了两种方案：`Static Generation` 和 `Server-side Rendering`。
二者的区别主要在于：`Static Generation`在build time的时候已经产生HTML, 每次请求都是复用已经渲染好的页面。`Server-side Rendering`是在请求时才渲染后页面。所以`Static Generation`更加适合博客或者文档这种交互性不强的应用，我们可以在用户请求之前就预渲染好页面。
![Snipaste_2021-11-30_20-41-12.png](https://media.graphcms.com/hVArWi1YTY6Zpjmtvw9f)
![Snipaste_2021-11-30_20-41-22.png](https://media.graphcms.com/359DlFyoQ86C0S6pgDhM)
### 3. 引入Chakra UI
这个组件库和`tailwind css`类似，很快就能上手，参考文档先结合`Nextjs`配置一波`https://chakra-ui.com/guides/with-nextjs`。总体使用下来给人感觉高度可定制化，灵活性强，写着很舒服。
### 4. Graphql
REST API已经被推广普及了，那为什么还会产生新的数据交互方案？REST API最常见的就是请求数据之后，然后对数据进行拼装，有时候会涉及到好几个接口的请求。Graphql最方便的就是想要什么就可以得到什么，对前端来说是很方便的。其实我也只是了解了一点点，后面遇见了再填坑。
个人博客主要内容主要有两个部分，作者和文章，所以我们使用GraqhCMS创建两个Schema( graqhql中的概念，不懂没关系当作数据库中的表来理解就好)。
![Snipaste_2021-12-14_00-33-02.png](https://media.graphcms.com/gpLxkUNnQeqSju30FSkV)
![Snipaste_2021-12-14_00-33-25.png](https://media.graphcms.com/EQH1P84SkKVrTrEh63BQ)
构建好了就可以在Content中写自己文章的内容了，然后测试下请求成功没。
![Snipaste_2021-12-14_00-40-48.png](https://media.graphcms.com/9vsnLzA9RiSCNOT42yZN)
### 5. 动态路由配置
每篇文章slug涉及到一个路由，使用Nextjs中的动态路由来配置`https://nextjs.org/docs/routing/dynamic-routes`。
具体涉及到两个函数，`getStaticPaths`和`getStaticProps`,分别需要总共的slug和单独的post数据。
```js
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
```

