export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600', icon: '⚡' },
    { name: 'React', level: 85, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600', icon: '🔷' },
    { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600', icon: '▲' },
    { name: 'Python', level: 75, color: 'from-blue-400 to-blue-600', icon: '🐍' },
    { name: 'MongoDB', level: 70, color: 'from-green-500 to-green-700', icon: '🍃' }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-xl">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Git', 'TypeScript', 'Tailwind', 'AWS', 'Docker', 'Redis', 'GraphQL', 'Jest'].map((skill) => (
            <div key={skill} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-cyan-400/50 transition-colors">
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}