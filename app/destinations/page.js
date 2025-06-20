import Text from "@/component/Text";
import heroImage from "../../public/images/heroImage.jpg";
import React from "react";
import { destinationsContent } from "../../data/textObject";
import DiagonalSection from "@/component/DiagonalSection";
import wedding from "../../public/images/wedding-hero-image.avif";

const page = () => {
  return (
    <div className="my-60">
      <Text data={destinationsContent} />
       <DiagonalSection
        src={heroImage}
        clipPolygon="polygon(0 23%, 24% 0, 100% 16%, 100% 79%, 21% 100%, 0 75%)"
        height="110vh"
      >
        <h1 className="text-dark text-4xl">Your Title Here</h1>
      </DiagonalSection>
          <DiagonalSection
        src={wedding}
        clipPolygon="polygon(0 0, 79% 11%, 100% 0, 100% 100%, 19% 84%, 0 100%)"
        height="160vh"
      ></DiagonalSection>
    </div>
  );
};

export default page;
