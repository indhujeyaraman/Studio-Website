import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLinks = ({ color = "text-dark", showWhatsapp = false }) => {
  return (
    <div className={`flex gap-4 text-4xl ${color}`}>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <FaYoutube />
      </a>
      {showWhatsapp && (
        <a href="https://wa.link/n2y5ji" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
