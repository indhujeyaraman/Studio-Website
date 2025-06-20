import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 left-0 w-full text-sm text-dark z-50 uppercase bg-transparent">
      <div className="flex items-center justify-between mx-auto py-7 px-6">
        <Logo variant="light"  width={200} height={163}/>
        <div className="flex flex-col items-end gap-5">
          <SocialLinks color="text-dark" showWhatsapp={false} />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
