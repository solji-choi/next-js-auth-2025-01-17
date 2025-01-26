import client from '@/lib/backend/client'
import ClientPage from './ClientPage'
import { cookies } from 'next/headers'

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params

  const response = await client.GET('/api/v1/adm/members/{id}', {
    params: {
      path: {
        id: Number(id),
      },
    },
    headers: {
      cookie: (await cookies()).toString(),
    },
  })

  if (response.error) {
    return (
      <>
        결과코드 :{response.error.resultCode}, 메세지 : {response.error.msg}
      </>
    )
  }

  const member = response.data!!

  return <ClientPage member={member} />
}
