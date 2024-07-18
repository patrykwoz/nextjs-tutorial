import Image from "next/image";
import Link from 'next/link'



export default function Home() {

  return (
    <>
      <nav>
        <Link

          href="/">Home</Link>
        <Link

          href="/about">About</Link>
        <Link

          href="/invoices">Invoices</Link>
      </nav>
      <h1>Hello, Next.js!</h1>
      <h2 className="text-blue-500">I'm blue!</h2>
      <p>OK and OK</p>
    </>
  );
}
