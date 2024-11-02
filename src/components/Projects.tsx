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
      title: "Scissors",
      description:
        "Scissors is a url-shortening app designed to make urls as short as possible, making links easier to read and use. It's features include qr-code generation, custom url generation, user authentication and analytics.",
      technologies: "Vue, TypeScript, Firebase, TailwindCSS, Vitest",
      githubLink: "https://github.com/Saheedatt/scissors",
      liveLink:
        "https://scissors-capstone-3jt46m1vm-saheedats-projects.vercel.app/landing",
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
        "A property listing website. It display a list of available properties to users with additonal information ",
      technologies: "HTML, Vanilla CSS, JavaScript",
      githubLink: "https://github.com/Saheedatt/Vacaytion",
      liveLink: "https://vacaytion.netlify.app/",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
       <div className="flex justify-center mb-8">
        <Navigation />
      </div>

      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="text-black">
              Technologies Used
              <p className="text-gray-600 mb-4 ">{project.technologies}</p>
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.videoLink && (
                <button
                  onClick={() => setVideoUrl(project.videoLink!)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
                >
                  Watch Demo
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