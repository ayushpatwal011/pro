import React, { useRef } from 'react';
import { projects } from '../../data/project'; // fixed typo
import { playSound } from '../../libs/ClickSound';
import { useNavigate } from 'react-router-dom';
import { HiLink, HiEye } from 'react-icons/hi';

const Project = () => {
  const audioRef = useRef(null);

  const handleClick = (link) => {
    if (audioRef.current) {
      playSound(audioRef);
    }

    
  setTimeout(() => {
    window.open(link, "_blank"); 
    setTimeout(() => {
    if (url.startsWith('http')) {
      window.open(url, '_blank'); 
    } else {
      navigate(url); 
    }
  }, 200)
  }

  return (
    <section
      id="experience"
      className=" py-8 md:px-10 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        Personal Works
      </h2>

      <audio ref={audioRef} src="/sound/click.mp3" preload="auto" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map(({ img, title, dis, tags, link, live }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 p-8 flex flex-col"
          >
            <img
              src={img}
              alt={title}
              className="rounded-xl object-cover mb-3 w-full h-48 "
            />

            <h3 className="text-xl font-semibold text-gray-700">{title}</h3>

            <p className="text-gray-500 mt-1 flex-grow">{dis}</p>

            <div className="flex flex-wrap mt-3 gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 text-white text-sm">
              <button
                onClick={() => handleClick(link)}
                className="flex items-center gap-2 bg-gray-600 px-3 py-1 rounded-xl hover:underline font-semibold"
              >
                <HiLink />
                Code
              </button>

              <button
                onClick={() => handleClick(live)}
                className="flex items-center gap-2 bg-gray-600 px-3 py-1 rounded-xl hover:underline font-semibold"
              >
                <HiEye />
                Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
