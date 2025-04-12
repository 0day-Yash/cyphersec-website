import { allDrops } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Download, Github, ExternalLink } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'

export const generateStaticParams = async () =>
  allDrops.map((drop) => ({ slug: drop.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const drop = allDrops.find((drop) => drop.slug === params.slug)
  if (!drop) notFound()
  return { title: drop.title }
}

export default function DropPage({ params }: { params: { slug: string } }) {
  const drop = allDrops.find((drop) => drop.slug === params.slug)
  if (!drop) notFound()

  const MDXContent = useMDXComponent(drop.body.code)

  return (
    <article className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link 
        href="/ops" 
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Archive
      </Link>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{drop.title}</h1>
        <div className="flex justify-between items-center text-gray-400 mb-4">
          <span>{drop.date}</span>
          <span>Signed by {drop.signature}</span>
        </div>
        {drop.tags && (
          <div className="flex gap-2 mb-4">
            {drop.tags.map((tag) => (
              <span key={tag} className="bg-gray-800 px-2 py-1 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose dark:prose-invert max-w-none">
        <MDXContent />
      </div>

      {/* Add download and external links section */}
      {(drop.downloadUrl || drop.githubRepo || drop.externalLinks) && (
        <div className="mt-12 border-t border-gray-800 pt-6">
          <h2 className="text-xl font-bold mb-4">Resources</h2>
          <div className="flex flex-wrap gap-4">
            {drop.downloadUrl && (
              <a 
                href={drop.downloadUrl}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
                download
              >
                <Download size={16} />
                Download
              </a>
            )}
            {drop.githubRepo && (
              <a 
                href={drop.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
              >
                <Github size={16} />
                GitHub Repository
              </a>
            )}
            {drop.externalLinks?.map((link, index) => (
              <a 
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
              >
                <ExternalLink size={16} />
                External Resource {index + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}