import Navigation from "./Navbar";

const About = () => {
  return (
    <>
      <div className="about flex flex-col items-center justify-center min-h-screen p-4 pt-24 md:pt-4">
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <Navigation />
        </div>
        <div className="mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-700">
            Hi, I'm Saheedat Afolabi. I'm a software engineer ( a recent
            graduate of 
            <a
              href="https://www.altschoolafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              AltSchool Africa
            </a>
            ) and a 400-level Physiotherapy student. I started learning to code
            in 2022 during a long university strike in my country. Since then,
            I've been learning and building projects with JavaScript,
            TypeScript, React, Next.js, Nuxt.js, Vue.js, and other technologies
            like Firebase.
          </p>
          <p className="text-lg text-gray-700">
            I read at least one technical article per day on{" "}
            <a
              href="https://app.daily.dev/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              daily.dev.
            </a>
          </p>
          <p className="text-lg text-gray-700">
            In my free time, I read novels, watch old tv shows and read about things that I am passionate about(women).
          </p>
          <p className="text-lg text-gray-700">
            I am open to learning new technologies and working on projects that will help me grow as a developer. I am always looking to improve my knowledge. I am also open to collaborations and internships. You can reach me at <a href="mailto:afolabisaheedat1@gmail.com" 
            className="text-blue-500 hover:underline">afolabisaheedat1@gmail.com.</a>
          </p>
        </div>

        <div className="w-full h-0.5 bg-gray-500 mb-8 mt-10"></div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/saheedat-afolabi-1a91b5221/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/idontseemyselff"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500"
          >
            X(fka Twitter)
          </a>
          <a
            href="https://github.com/Saheedatt/Saheedatt"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 hover:text-blue-500"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
