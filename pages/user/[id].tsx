import type { User } from '../../interfaces'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())


export default function UserPage() {
  // Here the page does not container the get server side props so during a server o a client render we never have the problem
  // The query param "test_param" has always the right value "test//test"

  const { query } = useRouter()
  const { data, error, isLoading } = useSwr<User>(
    query.id ? `/api/user/${query.id}` : null,
    fetcher
  )
  const testParamVal = query['test_param'];

  console.log('query in user detail page', query);

  if (error) return <div>Failed to load user</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return <div>
    <div>{data.name}</div>
    <div>{query['test_param'] !== undefined ? testParamVal : 'missing test param query in url' }</div>
  </div>
}
