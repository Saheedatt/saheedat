import Navigation from "./Navbar";

interface BlogPost {
  date: string;
  title: string;
  link: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      date: "October 9, 2024",
      title: "Episode 1: Introduction",
      link: "https://dev.to/saheedat/episode-1-introduction-1k8o",
    },
    {
      date: "October 30, 2024",
      title:
        "A Beginner's Guide to Using Mirage.js in a React TypeScript Smart Home Dashboard.",
      link: "https://dev.to/saheedat/a-beginners-guide-to-using-miragejs-in-a-react-typescript-smart-home-dashboard-4odj",
    },
  ];

  return (
    <div className="min-h-screen bg-snow">
      <div className="absolute top-0 left-0 right-0 flex justify-center lg:pt-4">
        <Navigation />
      </div>

      <div className="max-w-3xl mx-auto p-4 md:p-6 pt-24 md:pt-28">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-pt-serif font-bold text-rose mb-2">
              My Blog Posts
            </h1>
            <div className="w-32 h-0.5 bg-[#bd3c56] ml-6 mb-6"></div>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              I am working on building a smart home dashboard and I decided to
              document my process by writing. The goal is to improve my
              knowledge and also get better at writing technical articles.
            </p>
          </div>

          <div className="space-y-6 mt-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="group rounded-lg p-5 transition-all duration-300 hover:transform hover:translate-x-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <span className="text-sm md:text-base text-[#bd3c56] font-medium">
                    {post.date}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pinkish transition-colors duration-300"
                  >
                    Read on Dev.to
                  </a>
                </div>
                <h2 className="text-lg md:text-xl font-semibold mt-2 text-gray-800 group-hover:text-rose transition-colors duration-300">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {post.title}
                  </a>
                </h2>
              </div>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                There are no blog posts available yet. Check back soon!
              </p>
            </div>
          )}

          <div className="mt-12 text-center bg-snow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-rose mb-3">
              Want to read more?
            </h3>
            <p className="text-gray-700 mb-4">
              I will be sure to update this as I write more articles!
            </p>
            <a
              href="https://dev.to/saheedat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-[#880d1e] text-white rounded-full hover:bg-[#bd3c56] transition-colors duration-300"
            >
              Visit my Dev.to profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
