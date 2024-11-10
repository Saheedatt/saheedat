import { useState } from "react";
import Navigation from "./Navbar";
import Modal from "./Modal";

interface Project {
  title: string;
  description: string;
  technologies: string;
  githubLink: string;
  liveLink?: string;
  videoLink?: string;
}

const Projects = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "My Portfolio",
      description:
        "This is my portfolio website. It showcases my skills and some of my projects. I couldn't decide on a design and decided to do something simple. I will be adding new projects over time, so feel free to come back and explore more of what I've been working on.",
      technologies: "React, TypeScript, TailwindCSS",
      githubLink: "https://github.com/Saheedatt/saheedat",
      liveLink: "https://saheedat.vercel.app/",
    },
    {
      title: "Scissors",
      description:
        "Scissors is a url-shortening app designed to make urls as short as possible, making links easier to read and use. It's features include qr-code generation, custom url generation, user authentication and analytics.",
      technologies: "Vue, TypeScript, Firebase, TailwindCSS, Vitest",
      githubLink: "https://github.com/Saheedatt/scissors",
      liveLink:
        "https://scissors-capstone.vercel.app/landing",
    },
    {
      title: "Our NewsPaper",
      description:
        "Our NewsPaper is a  newsblog application that displays news articles from the News API. It allows users to view latest news articles, search for specific articles, view news based on selected categories and navigate through pages of news results. This project doesn't have a live link but I have attached a video demo.",
      technologies: "React, JavaScript, Tailwind CSS, News API",
      githubLink: "https://github.com/Saheedatt/ournewspaper",
      videoLink: "/video.mp4",
    },
    {
      title: "Github repository web app",
      description:
        "The repo web app interacts with the GitHub API to fetch and display a list of my repositories. The features includes error boundary, pagination, nested routing, search & filter functionality.",
      technologies: "React, JavaScript, Chakra UI, Tailwind CSS, Axios",
      githubLink: "https://github.com/Saheedatt/repowebapp",
      liveLink: "https://repowebapp.vercel.app/",
    },
    {
      title: "Vacaytion",
      description:
        "Vacaytion is a property listing website that allows users to view properties, their price, and number of rooms. Users can also view property details and book a property. Project was focused mainly on learning to fetch data from an API and display it on the frontend.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/Saheedatt/Vacaytion",
      liveLink: "https://vacaytion.netlify.app/",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-center mb-8 lg:pt-4">
        <Navigation />
      </div>

      <h1 className="text-3xl text-rose font-pt-serif font-bold mb-8 px-2">
        My Projects
      </h1>
      <div className="grid gap-8 px-2 md:grid-cols-2 pb-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm border-2 border-pinkish"
          >
            <h2 className="text-xl text-rose font-semibold mb-3">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="text-black">
              <span className="font-medium text-[#bd3c56]">
                Technologies Used:
              </span>
              <p className="text-gray-600 mb-4 ">{project.technologies}</p>
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                className="flex items-center gap-1 text-gray-700 hover:text-pinkish"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">Github</span>
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="flex items-center gap-1 text-gray-700 hover:text-pinkish"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold">Live Link</span>
                </a>
              )}
              {project.videoLink && (
                <button
                  onClick={() => setVideoUrl(project.videoLink!)}
                  className="flex items-center gap-1 text-gray-700 hover:text-pinkish"
                >
                  <span className="font-semibold">Watch Demo</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {videoUrl && (
        <Modal videoUrl={videoUrl} onClose={() => setVideoUrl(null)} />
      )}
    </div>
  );
};

export default Projects;
