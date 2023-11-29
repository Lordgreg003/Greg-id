import { image1 } from "../../images/Index";
import "animate.css";
import { Link } from "react-scroll";
import { useRef } from "react";

const Nav = () => {
  const openRef = useRef<any>("");
  const flexRef = useRef<any>("hidden");

  const skrill = () => {
    openRef.current.className === "open hamburger focus:outline-none"
      ? (openRef.current.className = "hamburger focus:outline-none")
      : (openRef.current.className = "open hamburger focus:outline-none");

    flexRef.current.className === "hidden md:hidden"
      ? (flexRef.current.className = "md:hidden")
      : (flexRef.current.className = "hidden md:hidden");

    console.log(openRef.current.className);
    console.log(flexRef.current.className);
    console.log(skrill);
    // console.log();
  };

  return (
    <section className="overflow-x-hidden">
      <div className="w- full px-5  flex md:justify-between lg:px-10 items-center bg-[#222831] h-[130px] overflow-x-hidden">
        <div className="w-20 h-20">
          <img src={image1} alt="" />
        </div>
        <div className="hidden animate__slideInLeft animate__animated animate__slideInLeft animate__slower       lg:flex items-center lg:space-x-6 md:hidden ">
          <div className="lg:space-x-10 text-white">
            <Link
              className="hover:text-[#5E9EED] hover:text-xl"
              to="about"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
            <Link
              className="hover:text-[#5E9EED] hover:text-xl"
              to="project"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
            <Link
              className="hover:text-[#5E9EED] hover:text-xl"
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </div>
          <div>
            <button className="border text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500  hover:py-4 hover:px-14 rounded-2xl px-12 py-3 border-t-2 border-[#3A54A8] border-b-2">
              Resume
            </button>
          </div>
        </div>
        <div className="flex pr-10 md:hidden ml-auto">
          <button
            onClick={skrill}
            id="menu-btn"
            ref={openRef}
            className="hamburger focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div ref={flexRef} className="hidden md:hidden">
          <div className="absolute z-20 flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-[#202731] animate__fadeInRight   animate__animated animate__fadeInRight animate__slower sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-white">
            <div>
              <Link to="about" smooth={true} duration={1000}>
                About
              </Link>
            </div>
            <div>
              {" "}
              <Link to="project " smooth={true} duration={1000}>
                Project
              </Link>
            </div>
            <div>
              <Link to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="border border-[#263141]  rounded-3xl" />
      </div>
    </section>
  );
};

export default Nav;
