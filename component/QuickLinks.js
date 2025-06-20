import Link from "next/link";

const links = [
  { name: "Wedding", href: "/weddings" },
  { name: "Films", href: "/films" },
  { name: "Destinations", href: "/destinations" },
  { name: "Why YNOT?", href: "/why-ynot" },
  { name: "Behind The Scenes (BTS)", href: "/why-ynot" }, // using same page
  { name: "Reviews", href: "/reviews" },
  { name: "About Us", href: "/about-us" },
];
const QuickLinks = () => {
  return (
    <div className="text-center ">
      <h2 className="text-xl font-bold mb-4 tracking-wider text-dark">
        QUICK LINKS
      </h2>
      <ul className=" text-dark text-lg tracking-wider leading-relaxed">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className=" hover:text-black transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
