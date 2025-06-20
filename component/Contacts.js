const Contacts = () => {
  return (
    <div>
      <ul className="space-y-2 text-dark text-xl flex flex-col items-center justify-center  tracking-wider">
        <li>
          <a
            href="tel:+919876543210"
            className=" hover:text-black transition-colors duration-200"
          >
            +91 9876543210
          </a>
        </li>
        <li>
          <a
            href="tel:+911234567890"
            className=" hover:text-black transition-colors duration-200"
          >
            +91 1234567890
          </a>
        </li>
        <li>
          <a
            href="mailto:abceventplanners@gmail.com"
            className="hover:text-black transition-colors duration-200 text-lg"
          >
            abceventplanners@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
