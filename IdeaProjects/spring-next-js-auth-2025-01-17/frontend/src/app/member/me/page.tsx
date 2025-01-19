import client from '@/lib/backend/client'
import { cookies } from 'next/headers'
import ClientPage from './ClientPage'

export default async function Page() {
  const response = await client.GET('/api/v1/members/me', {
    headers: {
      cookie: (await cookies()).toString(),
    },
  })

  const setCookie = response.response.headers.get('Set-Cookie')
  console.log(`setCookie : ${setCookie}`)

  if (response.error) {
    return <>{response.error.msg}</>
  }

  const me = response.data

  return <ClientPage me={me} />
}
