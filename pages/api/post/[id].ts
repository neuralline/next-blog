// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { getPostById } from '../../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const id =
      req.query.id === 'string' ? parseInt(req.query.id, 10) : undefined
    const post = id ? await getPostById(id) : undefined

    if (post) {
      res.statusCode = 200
      res.json(post)
    }
    res.statusCode = 404
    res.json(null)
  }
}
