export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2000ms'}}></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Your Photo - PASSPORT SIZE */}
        <div className="mb-12"> {/* Increased bottom margin */}
          <div className="w-8 h-8 mx-6 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden border-4 border-white/20 shadow-2xl">
            {/* Replace "my-photo.jpg" with your actual photo filename */}
            <img 
              src="portfolio.jpg.jpg" 
              alt="Aine Dickens"
              className="w-full h-full object-cover"
              onError={(e) => {
                // If photo fails to load, show initials instead
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                e.target.parentElement.innerHTML = '<span class="text-white text-xl font-bold">JD</span>';
              }}
            />
          </div>
        </div>

        {/* Text Content with Better Padding */}
        <div className="space-y-6"> {/* Better spacing between elements */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="text-white mt-2 block">AINE DICKENS</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300">
            SOFTWARE ENGINEER
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I build <span className="text-cyan-400 font-semibold">beautiful</span>, 
            <span className="text-purple-400 font-semibold"> functional</span>, and 
            <span className="text-blue-400 font-semibold"> scalable</span> web applications 
            that deliver exceptional user experiences.
          </p>
        </div>

        {/* Buttons with Better Padding */}
        <div className="flex gap-4 justify-center flex-wrap mt-12"> {/* Increased top margin */}
          <a 
            href="#projects" 
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
          >
            <span>View My Work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="#contact" 
            className="group border-2 border-gray-600 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2"
          >
            <span>Get In Touch</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Tech icons with Better Spacing */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap"> {/* Reduced gap */}
          {['🚀 JavaScript', '⚛️ React', '🔷 Node.js', '🎨 CSS3', '⚡ Next.js', '🗃️ MongoDB'].map((tech) => (
            <div key={tech} className="text-center">
              <div className="w-14 h-14 bg-gray-800/50 rounded-xl flex items-center justify-center mb-2 mx-auto border border-gray-700 hover:border-cyan-400 transition-colors">
                <span className="text-xl">{tech.split(' ')[0]}</span> {/* Smaller icon */}
              </div>
              <span className="text-xs text-gray-400">{tech.split(' ')[1]}</span> {/* Smaller text */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}