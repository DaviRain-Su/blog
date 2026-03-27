import { posts, stats } from '@/data/posts'

function EntryCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const animationDelay = `${(index + 1) * 0.1}s`
  
  return (
    <article 
      className="flex gap-10 relative z-10 mb-16 animate-fade-in entry-card"
      style={{ animationDelay }}
    >
      {/* Node */}
      <div className="relative w-10 h-10 flex justify-center pt-1.5 flex-shrink-0">
        <div className="relative w-2.5 h-2.5 rounded-full bg-white animate-pulse-glow z-10" />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-2 -m-6 p-6 rounded-lg entry-card">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-1 font-mono text-[11px] text-[var(--text-dim)] uppercase tracking-wider">
          <span className="text-[#ccc] font-bold">v1.0</span>
          <span className="flex items-center gap-2">
            {post.category}
            <span className="w-1 h-px bg-[#333]" />
          </span>
          <span>{post.date}</span>
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-normal text-white tracking-tight m-0 transition-all duration-200 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          {post.title}
        </h2>
        
        {/* Description */}
        <p className="text-[15px] text-[#aaa] font-light leading-relaxed max-w-[700px] mt-1">
          {post.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="tag">{post.category}</span>
          <span className="tag">Article</span>
        </div>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-20 p-6 lg:p-20 relative">
        
        {/* Header */}
        <header className="lg:sticky lg:top-20 lg:h-[calc(100vh-160px)] flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="w-16 h-16 mb-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#333333" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                <text x="50" y="60" textAnchor="middle" fill="#fff" fontSize="28" fontFamily="monospace">D</text>
              </svg>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl font-medium tracking-tight mb-2">DaviRain Log</h1>
            <p className="text-sm text-[var(--text-dim)] font-light max-w-[280px]">
              Technical writings on Rust, Blockchain, and Systems Engineering.
            </p>
            
            {/* Legend */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--text-dim)] uppercase tracking-wider">
                <div className="w-3 h-3 rounded-full bg-white relative">
                  <div className="absolute inset-0 rounded-full bg-white animate-pulse-glow" />
                </div>
                Published
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-10 lg:mt-0 font-mono text-[11px] text-[var(--text-dark)] uppercase tracking-wider flex flex-col gap-3 border-t border-[var(--line-color)] pt-6">
            <div className="flex justify-between items-center">
              <span>Total Posts</span>
              <span className="text-white">{stats.totalPosts}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Categories</span>
              <span className="text-white">{stats.categories}</span>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="relative pb-32">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-[19px] lg:left-[19px] w-px timeline-line z-0" />
          
          {/* Entries */}
          {posts.map((post, index) => (
            <EntryCard key={post.id} post={post} index={index} />
          ))}
        </main>
      </div>
    </div>
  )
}
