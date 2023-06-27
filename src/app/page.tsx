'use client'
import { Metadata } from "next"
import Link from "next/link"
import { useRouter } from 'next/navigation'
// These styles apply to every route in the application
import './globals.css'

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