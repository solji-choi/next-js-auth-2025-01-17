import client from '@/lib/backend/client'
import ClientPage from './ClientPage'
import { cookies } from 'next/headers'

export default async function Page({
  searchParams,
}: {
  searchParams: {
    searchKeywordType?: 'username' | 'nickname'
    searchKeyword?: string
    pageSize?: number
    page?: number
  }
}) {
  const {
    searchKeyword = '',
    searchKeywordType = 'nickname',
    pageSize = 10,
    page = 1,
  } = await searchParams

  const response = await client.GET('/api/v1/adm/members', {
    params: {
      query: {
        searchKeyword,
        searchKeywordType,
        pageSize,
        page,
      },
    },
    headers: {
      cookie: (await cookies()).toString(),
    },
  })
  console.log('response:', response)

  const itemPage = response.data!!

  return (
    <>
      <ClientPage
        searchKeyword={searchKeyword}
        searchKeywordType={searchKeywordType}
        page={page}
        pageSize={pageSize}
        itemPage={itemPage}
      />
    </>
  )
}
