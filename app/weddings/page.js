"use client";
import React from "react";
import Image from "next/image";
import heroImage from "../../public/images/wedding-hero-image.avif";
import FilteredGallery from "../../component/FilteredGallery";
import Text from "@/component/Text";
import {weddingContent} from "../../data/textObject";

const Wedding = () => {
  return (
    <main>
      <Image src={heroImage} alt="bg" className=" top-0  -z-10 object-cover" />
      <Text data={weddingContent} />
         <FilteredGallery />
    </main>
  );
};

export default Wedding;
