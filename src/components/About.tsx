import Navigation from "./Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20 md:pt-4">
      <div className="absolute top-0 left-0 right-0 flex justify-center lg:pt-4">
        <Navigation />
      </div>

      <div className="flex min-h-screen p-4 md:pt-4">
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-10 lg:mt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-rose mb-2 font-pt-serif">
              About Me
            </h1>
            <div className="w-24 h-0.5 bg-[#bd3c56] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="font-semibold text-rose">
                Saheedat Afolabi
              </span>
              . I'm a software engineer (a recent graduate of{" "}
              <a
                href="https://www.altschoolafrica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bd3c56] hover:text-rose transition-colors duration-300"
              >
                AltSchool Africa
              </a>
              ) and a 400-level Physiotherapy student.
            </p>

            <div className="bg-snow p-6 rounded-lg border-l-2 border-pinkish">
              <p className="text-lg leading-relaxed mb-4">
                I started learning to code in 2022 during a long university
                strike in my country. Since then, I've been learning and
                building projects using:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Nuxt.js",
                  "Vue.js",
                  "Firebase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-white rounded-full text-sm font-medium text-rose border border-pinkish"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              I read at least one technical article per day on{" "}
              <a
                href="https://app.daily.dev/onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bd3c56] hover:text-rose transition-colors duration-300"
              >
                daily.dev
              </a>
            </p>

            <p className="text-lg leading-relaxed">
              In my free time, I read novels, watch old tv shows and read about
              things that I am passionate about (women).
            </p>

            <div className="bg-snow p-6 rounded-lg border-l-2 border-pinkish">
              <p className="text-lg leading-relaxed">
                I am open to learning new technologies and working on projects
                that will help me grow as a developer. I am always looking to
                improve my knowledge. I am also open to collaborations and
                internships. You can reach me at{" "}
                <a
                  href="mailto:afolabisaheedat1@gmail.com"
                  className="text-[#bd3c56] hover:text-rose transition-colors duration-300"
                >
                  afolabisaheedat1@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-pinkish border-opacity-30">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/saheedat-afolabi-1a91b5221/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-pinkish"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/idontseemyselff"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-pinkish"
              >
                X(fka Twitter)
              </a>
              <a
                href="https://github.com/Saheedatt/Saheedatt"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-pinkish"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
