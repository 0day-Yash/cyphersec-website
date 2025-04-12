import Link from 'next/link'
import MatrixBackground from '@/components/MatrixBackground'
import { ArrowRight, Shield, Eye, FileText } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <MatrixBackground />
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch" data-text="C̵Y̷P̸H̶E̵R̴S̸E̸C̵">
            C̵Y̷P̸H̶E̵R̴S̸E̸C̵
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Observe. Exploit. Document. Repeat.</p>
          <Link 
            href="/ops" 
            className="btn btn-primary group"
          >
            ACCESS ARCHIVES
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 cyber-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 neon-text">Mission Statement</h2>
          <p className="text-lg leading-relaxed">
            CypherSec is a closed collective of offensive researchers, intelligence gatherers, and underground engineers. 
            We exist to explore systems, expose flaws, and release knowledge.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="card hover:neon-border">
              <Shield className="mb-4 text-green-400" size={32} />
              <h3 className="text-xl font-bold mb-3">Offensive Security</h3>
              <p className="text-gray-400">Red team, pentesting, tool drops</p>
            </div>
            
            {/* Column 2 */}
            <div className="card hover:neon-border">
              <Eye className="mb-4 text-green-400" size={32} />
              <h3 className="text-xl font-bold mb-3">Recon & Surveillance</h3>
              <p className="text-gray-400">Passive data collection, OSINT, surveillance networks</p>
            </div>
            
            {/* Column 3 */}
            <div className="card hover:neon-border">
              <FileText className="mb-4 text-green-400" size={32} />
              <h3 className="text-xl font-bold mb-3">Research & Publication</h3>
              <p className="text-gray-400">Whitepapers, docs, guides, field notes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drops */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* This would normally be populated from contentlayer */}
            <div className="card">
              <h3 className="text-xl font-bold mb-2">ShadowPath</h3>
              <div className="flex justify-between mb-3">
                <span className="bg-gray-700 px-2 py-1 text-xs rounded">Tool</span>
                <span className="text-gray-400 text-sm">Dec 2024</span>
              </div>
              <p className="text-gray-400 mb-4">Advanced OSINT pivot tool for network mapping</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">ObsidianHalo</span>
                <Link href="/ops/shadowpath" className="text-green-400 hover:text-green-300 text-sm flex items-center">
                  View Drop <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}