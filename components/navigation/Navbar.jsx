import { IoBagOutline, IoSearch } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[3px] w-7 my-1 rounded-full bg-white transition ease transform duration-200`;

  return (
    <nav className="flex z-50 sticky top-0 bg-transparent backdrop-blur-md px-4 md:px-0 md:py-4 justify-between md:justify-between items-center">
      <div className="text-3xl text-[#e25625] py-4">
        <h3 className="cursor-pointer">Sneakers</h3>
      </div>
      <div className="list-none hidden md:flex gap-6 my-auto">
        <li className="nav-list transition ease transform duration-300">
          Home
        </li>
        <li className="nav-list transition ease transform duration-300">
          Explore
        </li>
        <li className="nav-list transition ease transform duration-300">Men</li>
        <li className="nav-list transition ease transform duration-300">
          Women
        </li>
      </div>

      <div className="md:flex hidden items-center my-auto gap-7 ">
        <IoSearch className="text-xl" />
        <IoBagOutline className="text-xl" />
        <button className="btn-brown text-sm px-7">Sign Up</button>
      </div>

      {isOpen && (
        <div
          className={`md:hidden bg-[#000000] backdrop-blur-sm h-screen w-3/4 right-0 bottom-0 top-0 fixed transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 "
          } flex flex-col items-center`}
        >
          <div className="list-none flex flex-col gap-6 my-auto">
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              Home
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              Explore
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              Men
            </li>
            <li onClick={() => setIsOpen(!isOpen)} className="nav-list">
              Women
            </li>
          </div>

          <div className="flex  items-center my-auto gap-4 ">
            <IoBagOutline
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-brown text-sm px-7"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
      <div className="flex md:hidden gap-4 items-center">
        <IoSearch className="text-3xl" />
        <button
          className="flex md:hidden flex-col rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-translate-x-32 opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-3 " : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
