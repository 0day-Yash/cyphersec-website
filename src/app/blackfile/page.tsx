'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function BlackfilePage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'CypherSec2024') { // Change this to your desired password
      router.push('/blackfile/access-granted')
    } else {
      setError('Invalid passphrase')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full">
        <div className="text-center mb-6">
          <Lock size={48} className="mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold">Restricted Access</h1>
          <p className="text-gray-400 mt-2">Enter the passphrase to continue</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter passphrase"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Access Dropzone
          </button>
        </form>
      </div>
    </div>
  )
}