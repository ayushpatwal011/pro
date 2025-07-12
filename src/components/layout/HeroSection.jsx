
import { heroContent } from "../../data/hero.js";
import { HiDownload } from "react-icons/hi";
import { techTags } from "../../data/teach-tags.js";
import DecayCard from "./DecayCard .jsx";


const HeroSection = () => {


  return (
    <section id="home" className="min-h-[90vh] flex items-center  relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8  ">
          {/* Text Content */}
          <div className="space-y-10 order-2 md:order-1 text-start ">
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1  text-start rounded-full bg-black/10 text-black border border-black/20">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-800 "></span>
                <span className="px-4 py-2 text-sm rounded-full ">
                  Hello, I am
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-700 py-4">
                {heroContent.title}
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-bold">
                {heroContent.subtitle}
              </p>
            </div>

            <p className="text-xl text-gray-400">{heroContent.description}</p>

            {/* Resume Button */}
            <div className="">
              <a
                href="/profile.jpg"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition-colors duration-300"
              >
                <HiDownload className="w-5 h-5" />
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full bg-black/10 text-black border border-black/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto order-1 md:order-2 flex items-center justify-center md:pt-24">

            <div className="cursor-pointer">
              <DecayCard width={200} height={300} image="./profile.jpg" >
                <span className="hidden md:block text-gray-800">
                  Namaste <br /> Lets Talk
                </span>
              </DecayCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
