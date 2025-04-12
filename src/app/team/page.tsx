import { allMembers } from 'contentlayer/generated'
import Link from 'next/link'

export default function TeamPage() {
  const heads = allMembers.filter(m => m.role.includes('Head'))
  const others = allMembers.filter(m => !m.role.includes('Head'))

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12">CypherSec Team</h1>
      
      {/* The Three Heads */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heads.map((member) => (
            <div 
              key={member._id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 group relative overflow-hidden"
            >
              <h3 className="text-xl font-bold">{member.name}</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-400">Codename: {member.codename}</p>
              </div>
              <p className="mt-4">{member.role}</p>
              <p className="text-gray-400 text-sm mt-2">{member.responsibilities}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Members */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Members</h2>
        <p className="text-gray-400 mb-8">
          Remaining members are undisclosed.
        </p>
      </section>
    </div>
  )
}