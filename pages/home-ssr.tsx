import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/db'

const Home2 = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <Layout>
      <Head>
        <title>Server Side Rendering</title>
      </Head>

      <h1>Welcome to SSR HomePage</h1>
      <h2>Blog</h2>
      <h2>Latest Posts</h2>

      <ul>
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
    </Layout>
  )
}
export default Home2

export const getServerSideProps = async () => {
  try {
    const posts = await getAllPosts()
    return { props: { posts } }
  } catch (err) {
    return { props: { posts: [] } }
  }
}
