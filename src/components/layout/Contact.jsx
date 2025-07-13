import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { contact } from "../../data/contact";

const Contact = () => {
  return (
    <section className="py-10 md:px-10 bg-white shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Contact Details
      </h2>
      <p className="text-gray-600 mb-10 max-w-3xl text-start px-4">{contact.dis}</p>

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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Friendly Links</h3>
          </div>

          <div className="border-t pt-4 flex gap-4 flex-wrap">
            <a
              href={contact.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${contact.links.mail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaEnvelope />
            </a>
            <a
              href={contact.links.insta}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href={contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href={contact.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-2xl"
            >
              <FaWhatsapp />
            </a>
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
