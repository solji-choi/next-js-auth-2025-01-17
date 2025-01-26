'use client'

import { components } from '@/lib/backend/apiV1/schema'
import client from '@/lib/backend/client'
import Link from 'next/link'

export default function ClientLayout({
  children,
  me,
  isLogin,
  isAdmin,
}: Readonly<{
  children: React.ReactNode
  me: components['schemas']['MemberDto']
  isLogin: boolean
  isAdmin: boolean
}>) {
  const logout = async () => {
    const response = await client.DELETE('/api/v1/members/logout')

    if (response.error) {
      alert(response.error.msg)
      return
    }

    window.location.replace('/')
  }

  return (
    <>
      <header className="border-[2px] border-[red] p-5">
        <div className="flex gap-2">
          <Link href="/">홈</Link>
          <Link href="/about">소개</Link>
          <Link href="/post/list">글</Link>
          {!isLogin && <Link href="/member/join">회원가입</Link>}
          {!isLogin && <Link href="/member/login">로그인</Link>}
          {isLogin && <button onClick={logout}>로그아웃</button>}
          {isLogin && <Link href="/member/me">{me.nickname}님 정보</Link>}
          {isAdmin && <Link href="/adm/member/list">관리자</Link>}
        </div>
      </header>

      <main className="flex-grow border-[2px] border-[blue] p-5">
        {children}
      </main>

      <footer className="border-[2px] border-[pink] p-5">
        Copyright 2025.
      </footer>
    </>
  )
}
