'use client'

import { components } from '@/lib/backend/apiV1/schema'
import { useRouter } from 'next/navigation'

export default function ClientPage({
  member,
}: {
  member: components['schemas']['MemberWithUsernameDto']
}) {
  const router = useRouter()

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        뒤로 가기
      </button>
      <hr />
      {member.id}번 게시물 상세페이지
      <hr />
      가입날짜 : {member.createDate}
      <hr />
      수정날짜 : {member.modifyDate}
      <hr />
      {member.username}
      <hr />
      {member.nickname}
    </div>
  )
}
