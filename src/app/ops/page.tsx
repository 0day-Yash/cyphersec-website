import { allDrops } from 'contentlayer/generated'
import Link from 'next/link'

export default function OpsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Operations Archive</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allDrops.map((drop) => (
          <Link 
            key={drop._id} 
            href={`/ops/${drop.slug}`}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold">{drop.title}</h2>
              <span className="bg-gray-700 px-2 py-1 text-sm rounded">
                {drop.type}
              </span>
            </div>
            <p className="text-gray-400 mb-4">{drop.summary}</p>
            <div className="flex justify-between items-center text-sm">
              <span>{drop.date}</span>
              <span className="text-gray-400">{drop.signature}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}