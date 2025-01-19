'use client'

import { components } from '@/lib/backend/apiV1/schema'

export default function ClientPage({
  me,
}: {
  me: components['schemas']['MemberDto']
}) {
  return (
    <>
      <div>
        <div>id : {me.id}</div>
        <div>가입 : {me.createDate}</div>
        <div>수정 : {me.modifyDate}</div>
        <div>닉네임 : {me.nickname}</div>
      </div>
    </>
  )
}
