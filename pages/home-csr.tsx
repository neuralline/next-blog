import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

const Home3 = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const fetchPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
    const posts: Post[] = await res.json()
    console.log('posts', posts)
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Layout>
      <Head>
        <title>client side rendering</title>
      </Head>

      <h1>Welcome to SSG HomePage</h1>
      <h2>Blog</h2>
      <h2>Latest Posts</h2>

      <ul>
        {!posts.length ? (
          <li>Loading...</li>
        ) : (
          posts.map((post: Post) => {
            return (
              <li key={post.id}>
                <Link href="/post/[id]" as={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            )
          })
        )}
      </ul>
      <Link href="/create-post">
        <a>create post</a>
      </Link>
    </Layout>
  )
}
export default Home3
