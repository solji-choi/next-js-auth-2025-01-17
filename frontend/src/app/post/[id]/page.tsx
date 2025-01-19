import client from '@/lib/backend/client'
import ClientPage from './ClientPage'

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params

  const response = await client.GET('/api/v1/posts/{id}', {
    params: {
      path: {
        id: Number(id),
      },
    },
  })

  if (response.error) {
    return (
      <>
        결과코드 :{response.error.resultCode}, 메세지 : {response.error.msg}
      </>
    )
  }

  const post = response.data!!

  return <ClientPage post={post} />
}
