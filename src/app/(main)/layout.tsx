import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CypherSec',
  description: 'Closed collective of offensive researchers and engineers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-gray-100 min-h-screen`}>
        <header className="border-b border-gray-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold neon-text">C̵Y̷P̸H̶E̵R̴S̸E̸C̵</Link>
            <div className="flex space-x-6">
              <Link href="/ops" className="hover:text-green-400 transition-colors">Archives</Link>
              <Link href="/team" className="hover:text-green-400 transition-colors">Team</Link>
              <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
              <Link href="/blackfile" className="hover:text-green-400 transition-colors">Blackfile</Link>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t border-gray-800 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>CypherSec © {new Date().getFullYear()}</p>
            <p className="mt-2 text-sm">Observe. Exploit. Document. Repeat.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}