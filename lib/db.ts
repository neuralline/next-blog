import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
})
export const getAllPosts = async () => {
  const posts = await db.query<Post[]>('SELECT * FROM posts ORDER BY id DESC')
  await db.end()
  return posts.map(({ id, title, content }) => ({ id, title, content }))
}

export const getPostById = async (id: number) => {
  const post = await db.query<Post[]>('SELECT * FROM posts WHERE id = ?', [id])
  await db.end()
  return post.length
    ? { id: post[0].id, title: post[0].title, content: post[0].content }
    : undefined
}

export default db
