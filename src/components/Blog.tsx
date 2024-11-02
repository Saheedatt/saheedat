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
    <div className="max-w-2xl mx-auto p-6">
      <div className="absolute top-0 left-0 right-0 flex justify-center mb-12">
        <Navigation />
      </div>
      <h1 className="text-3xl font-bold mb-4 mt-24">My Blog Posts</h1>
      <p>
        I am working on building a smart home dashboard and I decided to
        document my process by writing. The goal is to improve my knowledge and
        also get better at writing technical articles.
      </p>
      <div className="space-y-6 mt-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="border-b pb-4">
            <span className="text-gray-500">{post.date}</span>
            <h2 className="text-xl font-semibold mt-1">
              {/* <Link to={post.link} className="hover:text-blue-500">
                {post.title}
              </Link> */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                {post.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
