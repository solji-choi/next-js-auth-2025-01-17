import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import ClientLayout from './ClientLayout'
import { cookies } from 'next/headers'
import client from '@/lib/backend/client'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function parseAccessToken(accessToken: string | undefined) {
  let isAccessTokenExpired = true
  let accessTokenPayload = null

  if (accessToken) {
    try {
      const tokenParts = accessToken.split('.')
      accessTokenPayload = JSON.parse(
        Buffer.from(tokenParts[1], 'base64').toString(),
      )
      const expTimestamp = accessTokenPayload.exp * 1000
      isAccessTokenExpired = Date.now() > expTimestamp
    } catch (e) {
      console.error('토큰 파싱 중 오류 발생:', e)
    }
  }

  const isLogin =
    typeof accessTokenPayload === 'object' && accessTokenPayload !== null

  return { isLogin, isAccessTokenExpired, accessTokenPayload }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const {
    isLogin,
    isAccessTokenExpired,
    accessTokenPayload,
  } = parseAccessToken(accessToken)

  const me = isLogin
    ? {
        id: accessTokenPayload.id,
        createDate: '',
        modifyDate: '',
        nickname: accessTokenPayload.nickname,
      }
    : {
        id: 0,
        createDate: '',
        modifyDate: '',
        nickname: '',
      }

  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-[100dvh] border-[5px]`}
      >
        <ClientLayout me={me}>{children}</ClientLayout>
      </body>
    </html>
  )
}
