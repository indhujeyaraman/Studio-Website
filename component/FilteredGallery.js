"use client";
import { useState } from "react";
import GalleryItem from "./GalleryItem"; // Adjust path as needed

const galleryData = [
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/heroImage.jpg",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Couples",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/heroImage.jpg",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Couples",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/heroImage.jpg",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Couples",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/heroImage.jpg",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Couples",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/wedding-hero-image.avif",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Wedding",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/wedding-hero-image.avif",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Wedding",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/wedding-hero-image.avif",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Wedding",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/wedding-hero-image.avif",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Wedding",
  },
  {
    href: "https://vignesh-shivani.ynot.website/",
    imgSrc: "/images/wedding-hero-image.avif",
    alt: "Vignesh & Shivani",
    title: "Vignesh & Shivani",
    description: "Brahmin Wedding",
    category: "Wedding",
  },
  // Add more items here
];

const categories = [
  "All",
  ...new Set(galleryData.map((item) => item.category)),
];

export default function FilteredGallery() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (cat) => {
    if (cat === "All") {
      setSelectedCategories([]);
    } else {
      if (selectedCategories.includes(cat)) {
        setSelectedCategories(selectedCategories.filter((c) => c !== cat));
      } else {
        setSelectedCategories([...selectedCategories, cat]);
      }
    }
  };

  const filtered =
    selectedCategories.length === 0
      ? galleryData
      : galleryData.filter((item) =>
          selectedCategories.includes(item.category)
        );

  return (
    <div className="my-16 px-4">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`py-1 px-4 rounded-lg  ${
              (cat === "All" && selectedCategories.length === 0) ||
              selectedCategories.includes(cat)
                ? "bg-75 text-light border-transparent shadow-none"
                : "bg-primary text-black/65 shadow-[0_2px_6px_rgba(90,90,90,0.2),0_2px_15px_rgba(96,90,90,0.15)] hover:bg-stone-300/60 hover:text-black/35"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-4 gap-2">
        {filtered.map(({ href, imgSrc, alt, title, description }, i) => (
          <GalleryItem
            key={i}
            href={href}
            imgSrc={imgSrc}
            alt={alt}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
