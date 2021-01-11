import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/db'

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>Mini-Blog</title>
      </Head>

      <h1>Welcome to my Mini-Blog</h1>
      <h2>Latest Posts</h2>

      <ul className="blog-container">
        {props.posts.map((post: Post) => {
          return (
            <li key={post.id}>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          )
        })}
      </ul>

      <Link href="/create-post">
        <button>create post</button>
      </Link>
    </Layout>
  )
}
export default Home

export const getStaticProps = async () => {
  try {
    const posts = await getAllPosts()
    return { props: { posts } }
  } catch (err) {
    return { props: { posts: [] } }
  }
}
