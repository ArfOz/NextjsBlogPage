'use client'
import { Metadata } from "next"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Arif Özkan NextJS',
}
export default function Page() {
  const router = useRouter()
  return (
  <>
  <h1>Hello, Next.js!</h1>
  <ul>
      
      {/* <button type="button" onClick={() => router.push('/about')}>
      About Me
    </button> */}
        <li>
          <Link href={`/about`}>About Me</Link>
        </li>
    </ul>
    </>
    )
}