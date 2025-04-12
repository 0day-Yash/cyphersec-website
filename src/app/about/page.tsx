export default function AboutPage() {
  const timeline = [
    { year: '2023', event: 'Founded CypherSec', description: 'Formed out of necessity and obsession with system exploration' },
    { year: '2024 Q1', event: 'First tool release', description: 'Published ShadowPath OSINT tool' },
    { year: '2024 Q2', event: 'International expansion', description: 'Established nodes in 3 countries' },
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">About CypherSec</h1>
      
      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Timeline</h2>
        <div className="space-y-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800 -z-10"></div>
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold">{item.year}: {item.event}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Collective Philosophy</h2>
        <blockquote className="border-l-4 border-gray-600 pl-6 py-2 italic text-lg">
          "We are not activists, we are not influencers. We break things to understand them."
        </blockquote>
        <p className="mt-4 text-gray-400">
          Our approach is purely technical, with no political agenda or social media presence.
        </p>
      </section>

      {/* Structure */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Structure</h2>
        <p className="mb-4">
          CypherSec operates with a decentralized structure led by three heads, overseeing various contributors.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Org Chart</h3>
          <ul className="space-y-2">
            <li>• 3 Heads (Operations, Research, Recon)</li>
            <li>• 12 Core Contributors</li>
            <li>• Network of Associates</li>
          </ul>
        </div>
      </section>

      {/* Invite-Only */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Invite-Only</h2>
        <p className="text-gray-400">
          No open applications. You'll know if we're interested in your skills.
        </p>
      </section>
    </div>
  )
}