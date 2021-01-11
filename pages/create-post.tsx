import Layout from '../components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface Values {
  title: string
  content: string
}

const CreatePost = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>()
  const [status, setStatus] = useState<string>('createPost')
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log('e.target', e.target)
    try {
      setStatus('sending post to server...')
      if (!title && !content)
        return setStatus('Post title and content can not be empty')
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      })
      setContent('')
      setTitle('')
      setStatus('Post submitted')
      router.push('/')
    } catch (error) {
      return setStatus('Major malfunction')
    }
  }
  return (
    <Layout>
      <Head>
        <title>Create post</title>
      </Head>
      <h1>{status}</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            name="title"
          />
        </div>
        <div>
          <label htmlFor="">Content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            name="content"
            id="textarea"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default CreatePost
