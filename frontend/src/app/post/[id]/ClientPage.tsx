'use client'

import { components } from '@/lib/backend/apiV1/schema'
import { useRouter } from 'next/navigation'

export default function ClientPage({
  post,
}: {
  post: components['schemas']['PostWithContentDto']
}) {
  const router = useRouter()

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        뒤로 가기
      </button>
      <hr />
      {post.id}번 게시물 상세페이지
      <hr />
      작성날짜 : {post.createDate}
      <br />
      수정 : {post.modifyDate}
      <hr />
      작성자 : {post.authorName}
      <hr />
      제목 : {post.title}
      <hr />
      내용 : {post.content}
    </div>
  )
}
