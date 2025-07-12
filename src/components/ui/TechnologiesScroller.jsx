
const TechnologiesScroller = () => {
  const technologies = [
    "react",
    "typeScript",
    "tailwindcss",
    "next",
    "nodejs",
    "HTML5",
    "CSS3",
    "javaScript",
    "git",
  ];

  return (
    <div className="relative overflow-x-hidden py-8 ">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"
      ></div>

      <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max">
        {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div key={`${tech}-${index}`} className="flex items-center gap-2 group transition-all duration-300">
            <img
              src={`/skills/${tech}.svg`}
              alt={tech}
              className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
              width="30"
              height="30"
              loading="lazy"
            />
            <span className="text-lg font-medium text-[var(--white-icon)]">
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll {
            animation-duration: 50s;
          }
        }
      `}</style>
    </div>
  );
};

export default TechnologiesScroller;