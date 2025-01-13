import { useEffect, useState } from "react";
import bar from "../../assets/Sort.png";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/Preview-removebg-preview.png";
import { Link } from "react-scroll";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY + 5) {
      setVisible(false);
    } else if (window.scrollY < lastScrollY - 5) {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      {/* navbar */}
      <div
        // data-aos="fade-down"
        className={`flex justify-between items-center px-5 md:px-8 lg:px-12 2xl:px-52 py-6 z-50 fixed top-0 left-0 right-0 backdrop-blur-xl bg-transparent transition-transform duration-500 ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="text-white cursor-pointer">
          <img src={logo} className="w-12" alt="" />
        </div>
        <div>
          <ul className="md:flex justify-center items-center gap-6 text-[15px] font-semibold hidden">
            <li className="cursor-pointer hover:text-purple1 text-white duration-300">
              <Link to="hero" smooth={true} duration={700}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-purple1 text-white duration-300">
              <Link to="services" smooth={true} duration={700}>
                Services
              </Link>
            </li>
            <li className="cursor-pointer hover:text-purple1 text-white duration-300">
              <Link to="projects" smooth={true} duration={700}>
                Our Projects
              </Link>
            </li>
            <li className="cursor-pointer hover:text-purple1 text-white duration-300">
              <Link to="contact" smooth={true} duration={700}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <img
            onClick={() => setSideBar((pre) => !pre)}
            src={bar}
            className="block md:hidden cursor-pointer"
            alt=""
          />
          <button className="border border-white text-white text-[15px] px-7 py-[7px] rounded-[3px] hover:bg-purple1 duration-300 hover:border-purple1 hidden md:block">
            Contact us
          </button>
        </div>
      </div>

      {/* side bar */}
      {/* {sideBar && ( */}
      <div
        className={`${
          sideBar ? "h-full" : "h-0"
        } overflow-hidden z-50 duration-700 fixed w-full bg-body block md:hidden top-0 left-0 right-0`}
      >
        <div className="flex bg-purple1 justify-between items-center px-6 py-6">
          <div className="text-white cursor-pointer">
            {" "}
            <img src={logo} className="w-12" alt="" />
          </div>
          <div>
            <span>
              <FaTimes
                onClick={() => setSideBar((pre) => !pre)}
                className="text-white cursor-pointer text-xl"
              />{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 px-6">
          <ul className="flex flex-col justify-center items-center gap-6 text-[15px] font-semibold mt-8">
            <li className="text-purple1 cursor-pointer">Home</li>
            <li className="cursor-pointer hover:text-purple1 text-white duration-300">
              Services
            </li>
            <li className="cursor-pointer hover:text-purple1 text-white duration-300">
              Our Projects
            </li>
            <li className="cursor-pointer hover:text-purple1 text-white duration-300">
              About us
            </li>
          </ul>
          <button className="border border-white text-white text-[15px] px-7 py-[7px] rounded-[3px] hover:bg-purple1 duration-300 hover:border-purple1 w-full sm:w-auto">
            Contact us
          </button>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Navbar;
