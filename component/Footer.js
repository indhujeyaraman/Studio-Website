import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import QuickLinks from "./QuickLinks";
import Contacts from "./Contacts";

const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-light text-dark mb-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
       
        <div className="flex flex-col items-center  gap-4">
          <Logo variant="dark"  width={143} height={179}/>
          <SocialLinks color="text-secondary" showWhatsapp={true} />
        </div>

      
        <QuickLinks />

        
        <Contacts />
      </div>
    </footer>
  );
};

export default Footer;
