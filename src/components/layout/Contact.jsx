import React, { useRef } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { contact } from "../../data/contact";
import { playSound } from "../../libs/ClickSound";

const Contact = () => {
  const audioRef = useRef(null);

  const handleClick = (link) => {
    if (audioRef.current) {
      playSound(audioRef);
    }
    setTimeout(() => {
      window.open(link, "_blank");
    }, 200);
  };

  return (
    <section className="py-10 md:px-10 bg-white shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Contact Details
      </h2>
      <p className="text-gray-600 mb-10 max-w-3xl text-start px-4">
        {contact.dis}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-white md:shadow-md md:rounded-xl p-6 md:border border-t-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Let's start working together
          </h3>
          <p className="text-gray-600 mb-4">
            Contact through WhatsApp for fast reply
          </p>
          <div className="flex justify-center">
            <img
              src="/whatsapp.jpg"
              alt="WhatsApp QR Code"
              className="rounded-lg w-32 object-contain"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white md:shadow-md rounded-xl p-6 md:border">
          <audio ref={audioRef} src="/sound/click.mp3" preload="auto" />
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Contact Links</h3>
          </div>

          <div className="border-t pt-4 flex gap-4 flex-wrap">
            <button
              onClick={() => handleClick(contact.links.github)}
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaGithub />
            </button>
            <button
              onClick={() => handleClick(`mailto:${contact.links.mail}`)}
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaEnvelope />
            </button>
            <button
              onClick={() => handleClick(contact.links.insta)}
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaInstagram />
            </button>
            <button
              onClick={() => handleClick(contact.links.linkedin)}
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaLinkedin />
            </button>
            <button
              onClick={() => handleClick(contact.links.whatsapp)}
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaWhatsapp />
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        © 2025 Designed By Ayush Patwal
      </footer>
    </section>
  );
};

export default Contact;
