export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform", 
      description: "Full-stack e-commerce solution with modern payment processing and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and drag-and-drop functionality.",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "TypeScript"],
      demoLink: "#", 
      codeLink: "#",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with interactive maps and location-based forecasts.",
      tech: ["React", "Chart.js", "API Integration", "Geolocation"],
      demoLink: "#",
      codeLink: "#", 
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 border border-gray-700 hover:border-cyan-500/50 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''}`}>
                
                {/* VISUAL IMAGE PLACEHOLDER */}
                <div className={`relative overflow-hidden ${
                  project.featured ? 'lg:w-2/5' : 'h-64'
                }`}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex flex-col items-center justify-center text-white p-4">
                    <div className="text-4xl mb-4">🖼️</div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">Project Screenshot</div>
                      <div className="text-sm opacity-70 mt-2">Image placeholder</div>
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className={`p-8 flex flex-col justify-center ${
                  project.featured ? 'lg:w-3/5' : ''
                }`}>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-cyan-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.demoLink} 
                      className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-center py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <span>Live Demo</span>
                      <span>→</span>
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="flex-1 border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 text-center py-3 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <span>View Code</span>
                      <span>📁</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}