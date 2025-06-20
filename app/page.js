import HeroSection from "@/component/HeroSection";

import heroImage from "../public/images/heroImage.jpg";
import React from "react";
import Image from "next/image";
import Text from "@/component/Text";
import { homeContent } from "../data/textObject";
const Home = () => {
  return (
    <main className="bg-">
      <Image src={heroImage} alt="bg" width={1000} height={1000} />
      {/* <div>
        <h2 className="text-dark">LITTLE SPOTLIGHT ON US</h2>
        <h3>why we are the talk of the town?</h3>
        <p>
          Yes, we’re seasoned pros - hundreds of clients across multiple
          destinations can vouch for that. Yes, we’re ‘highly acclaimed’ (just
          take a peek at our glowing Google reviews). But here’s the real deal -
          what truly matters to us is delivering an experience like no other.
          Your photos won’t just be stunning—they’ll be unforgettable. And the
          journey with us? From the first hello to the final shot, it’s designed
          to be nothing short of extraordinary.
        </p>

      </div> */}
      <Text data={homeContent} headingSize="text-6xl" fontStyle="font-light"/>
      {/* <HeroSection /> */}
    </main>
  );
};

export default Home;
