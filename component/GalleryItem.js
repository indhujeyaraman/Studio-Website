"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryItem({ href, imgSrc, alt, title, description }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-lg overflow-hidden shadow-lg  "
      tabIndex={0}
      data-testid="gallery-item-click-action-link"
      // Removed scale animation
    >
      <div className="relative w-full aspect-[3/5]">
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="hover:opacity-60"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      <div className="mt-2 mb-8 flex flex-col items-center justify-center bg-light">
        <h3
          data-testid="gallery-item-title"
          className="text-lg  text-secondary "
        >
          {title}
        </h3>
        <p data-testid="gallery-item-description" className="text-dark text-xs">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
