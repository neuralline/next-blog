import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import { getAllPosts, getPostById } from '../../lib/db'

const SinglePost = ({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <div className="blog-post">{post.content}</div>
        <Link href="/">
          <button>Home</button>
        </Link>
      </main>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts()
  return {
    paths: posts.map(post => {
      return { params: { id: `${post.id}` } }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async context => {
  const id =
    typeof context.params?.id === 'string'
      ? parseInt(context.params.id, 10)
      : undefined
  const post = id ? await getPostById(id) : undefined
  if (!post) throw new Error(`post with this id: ${id} was not found`)
  return { props: { post } }
}

export default SinglePost
