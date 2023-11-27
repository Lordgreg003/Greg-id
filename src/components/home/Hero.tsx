import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="w-full h-[530px] md:h-[400px] lg:h-[600px] bg-[#222831] justify-evenly flex-wrap lg:flex md:flex overflow-x-hidden overflow-y-hidden">
        <div className="space-y-6 md:space-y-6 lg:space-y-10 px-5 py-10 text-[#B2B9CF]  md:w-[650px] text-left">
          <div>Hi there</div>
          <div className="font-bold text-5xl text-[#B2B9CF]">
            I am{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent ">
              Nwokoye Chidera
            </span>
          </div>
          <div className="font-bold text-3xl text-[#B2B9CF]">
            I develop efficient and scalable web <br /> solutions
          </div>
          <div>
            I tell computers "DO THIS!!", and they refuse. Then I cry for a{" "}
            <br /> very long time 😭
          </div>
          <div className="flex space-x-5 md:space-x-10 text-white">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="border border-transparent hover:py-4 whitespace-nowrap hover:px-11 text-white bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-10 border-t-2 border-b-2 rounded-xl"
            >
              Reach out
            </Link>
            <button className="lg:hidden flex border py-3 px-10 rounded-xl border-t-2 border-b-2">
              Resume
            </button>
          </div>
        </div>
        <div className=" lg:py-20 lg:space-y-5 hidden md:flex-col lg:flex  md:w-[300px]">
          <div className="flex flex-col items-center">
            <div className=" ">
              <a href="https://github.com/Lordgreg003">
                <IconContext.Provider value={{ size: "40px", color: "white" }}>
                  <FaGithub />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" ">
              <a href="https://twitter.com/lordgreg003">
                <IconContext.Provider value={{ size: "40px", color: "blue" }}>
                  <FaTwitter />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" ">
              <a href="https://www.facebook.com/Greggee003/">
                <IconContext.Provider value={{ size: "40px", color: "blue" }}>
                  <FaFacebook />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className=" ">
              <a href="https://www.instagram.com/lordgreg003/">
                <IconContext.Provider
                  value={{ size: "40px", color: "#F503D2" }}
                >
                  <FaSquareInstagram />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
