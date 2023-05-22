import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../interfaces'
import * as util from "util";

// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Inside the api the query param named "test_query" should have value "test//test" but we get "test/test
  console.log('query in API req', util.inspect(_req.query, false, null, true));
  // Get data from your database
  res.status(200).json(users)
}
