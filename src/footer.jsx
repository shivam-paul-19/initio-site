import { Instagram, YouTube, WhatsApp } from "@mui/icons-material"; // material icons
// install if not already: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 text-center">
      {/* Title */}
      <h1 className="text-yellow-500 font-extrabold text-2xl">INITIO'25</h1>
      <p className="italic text-gray-300 mt-2">
        Every end is a new beginning.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.instagram.com/initiovips/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition"
        >
          <Instagram className="text-white" />
        </a>
{/*   <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 p-3 rounded-full hover:scale-110 transition"
        >
          <YouTube className="text-white" />
        </a>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 p-3 rounded-full hover:scale-110 transition"
        >
          <WhatsApp className="text-white" />
        </a> */}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8"></div>

      {/* Bottom text */}
      <p className="text-sm text-gray-400 mt-4">
        © 2025 INITIO. All rights reserved. Built for legends by legends.
      </p>
    </footer>
  );
}
