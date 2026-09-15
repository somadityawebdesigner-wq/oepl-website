import Link from 'next/link';

async function getBlogs() {
  try {
    const res = await fetch('http://localhost:3000/api/blogs', { cache: 'no-store' });
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen pt-32 pb-24 bg-neutral-950 text-neutral-100 max-w-7xl mx-auto px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-red-600 font-semibold tracking-widest uppercase text-sm">
          OLYMPUS Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
          Engineering & Industry <span className="text-red-600">Blogs</span>
        </h1>
        <p className="text-neutral-400 text-base md:text-lg">
          Explore the latest technological advancements, company updates, and engineering excellence insights from OLYMPUS.
        </p>
      </div>

      {/* Blog Grid */}
      {blogs.length === 0 ? (
        <div className="text-center py-20 border border-neutral-800 rounded-2xl bg-neutral-900/50">
          <p className="text-neutral-400 text-lg">No blogs published yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog._id} 
              href={`/blog/${blog.slug}`}
              className="group border border-neutral-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between bg-neutral-900/80 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden h-52">
                <img 
                  src={blog.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-neutral-400 text-sm line-clamp-3 mb-6 flex-grow">
                  {blog.content}
                </p>

                {/* Read More Action */}
                <div className="flex items-center text-red-500 font-semibold text-sm group-hover:text-red-400 pt-4 border-t border-neutral-800/80">
                  <span>Read Full Article</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}