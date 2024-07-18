'use client';

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// export const metadata = {
//     title: 'About',
//   }

export default function About() {
  // throw new Error('This is an error')
  const pathname = usePathname()
  const router = useRouter()
  return (
    <>
      <nav>
        <Link
          className={`link ${pathname === '/' ? 'active' : ''}`}
          href="/">Home</Link>
        <Link
          className={`link ${pathname === '/about' ? 'active' : ''}`}
          href="/about">About</Link>
      </nav>
      <h1>This is about page... I guess</h1>
      <button type="button" onClick={() => router.push('/')}>
        Home
      </button>
    </>
  );
}



