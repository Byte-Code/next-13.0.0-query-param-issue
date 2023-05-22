import type { User } from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'
import {useRouter} from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  //If you look the api logs you will notice that the query param "test_param" has value "test/test"
  const { data, error, isLoading } = useSwr<User[]>('/api/users?test_param=test//test', fetcher)

  if (error) return <div>Failed to load users</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href={`/user/${user.id}?test_param=test//test`}>
            {user.name ?? `User ${user.id}`}
          </Link>
        </li>
      ))}
      <li>
        <Link href="/test?test_param=test//test">
          test page
        </Link>
      </li>
    </ul>
  )
}
