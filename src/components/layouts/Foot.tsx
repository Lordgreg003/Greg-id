import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Foot = () => {
  return (
    <footer
      className="w-full lg:h-[800px] h-[700px] md:h-[700px] bg-[#222831]"
      id="contact"
    >
      <div className="w-full bg-[#222831] justify-center flex-wrap md:flex items-center lg:h-[700px]">
        <div className=" px-10 py-5 space-y-3 w-full h-[300px] md:w-[500px] md:px-10 md:space-y-5 md:py-20  text-center md:h-[500px]">
          <div className="text-[#7E92D9]">Next steps?</div>
          <div className="text-[#B2B9CF] text-3xl font-bold">
            Don't be a Stranger!
          </div>
          <div className="text-[#B2B9CF]">
            Shoot me an email if you think we're a great fit and would like to
            work with me and let's have a great time while we're at it.
          </div>
          <div>
            <button className="border text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500  hover:py-4 hover:px-14 rounded-2xl px-12 py-3 border-t-2 border-[#3A54A8] border-b-2">
              Get in touch
            </button>
          </div>
        </div>
        <div className="space-x-5 md:space-x-0 w-full h-[200px] justify-center items-center flex md:flex-col md:w-[400px] md:space-y-5  md:h-[500px]">
          {" "}
          <div className="flex flex-col  items-center">
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
      <div className="md:px-40">
        <hr className="border-1  border-[#263141]  rounded-3xl" />
      </div>
      <div className="text-[#B2B9CF] py-10">Snappy-fix codes</div>
    </footer>
  );
};

export default Foot;
