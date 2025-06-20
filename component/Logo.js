import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoLight from "../public/images/Ynot Logo.avif";
import logoDark from "../public/images/footer YNOT Logo.png";

const Logo = ({ variant, width, height }) => {
  const logoImage = variant === "dark" ? logoDark : logoLight;

  return (
    <Link href="/">
      <Image
        src={logoImage}
        alt="YNOT Logo"
        width={width}
        height={height}
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
