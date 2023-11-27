import { colour, commerce, facebook, quote } from "../../images/Index";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Project1 = () => {
  return (
    <section
      className="w-full overflow-x-hidden overflow-y-hidden "
      id="project"
    >
      <div className="w-full bg-[#222831]   h-20 py-3 text-left px-32 ">
        <div className="font-bold text-[#B2B9CF] text-3xl">Projects</div>
        <div className="w-32 ">
          <hr className="border-2 border-[#B2B9CF]  rounded-3xl" />
        </div>
      </div>
      <div className="w-full bg-[#222831]  px-5 space-x-0 md:space-x-4 lg:px-40   md:px-10  lg:-space-y-[200px] flex-wrap  md:flex h-[2900px] space-y-5 md:space-y-0 lg:py-10 lg:h-[2000px] md:h-[1600px]">
        <div className="relative   h-[700px]   flex-wrap md:flex-col">
          <div
            style={{ backgroundImage: `url(${facebook})` }}
            className=" lg:hover:w-[950px]  lg:hover:h-[450px] bg-no-repeat bg-cover lg:w-[900px] rounded-xl w-[320px]  h-[160px]   relative lg:h-[400px]"
          ></div>
          <div className="absolute  z-10 text-left bg-[#263243] rounded-xl lg:top-0 lg:-ml-28 border-transparent   border-2 rounded-bl-sm h-[480px] w-[320px] text-[#B2B9CF]  lg:w-[600px] lg:h-[400px] space-y-5 px-5 py-8 md:space-y-5 md:px-5 md:py-8">
            <div>PROJECT #1</div>
            <div className="text-[#3F99DE] font-bold text-xl">
              FACEBOOK CLONE
            </div>
            <div>
              This is a facebook clone (WIP) that currently has many of the
              facebook features like Auth, Making Posts, Using emojis, adding
              friends, setting profile pictures, etc! Sign up and explore! If
              you cannot, then the server is down, please try again..Meanwhile
              you can look at the source code on github
            </div>
            <div className="flex space-x-10">
              <div>
                <a href="https://github.com/Lordgreg003">
                  <IconContext.Provider
                    value={{ size: "40px", color: "white" }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/lordgreg003">
                  <IconContext.Provider value={{ size: "40px", color: "blue" }}>
                    <FaTwitter />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
            <div>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                ReactJS, NodeJs, MongoDB, Axios, Formik
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="relative  h-[700px]   flex-wrap md:flex-col">
          <div
            style={{ backgroundImage: `url(${commerce})` }}
            className="bg-white lg:hover:w-[950px] lg:hover:h-[450px] bg-no-repeat bg-cover lg:w-[900px] rounded-xl w-[320px]  h-[160px]  relative lg:h-[400px]"
          ></div>
          <div className="absolute z-10 text-[#B2B9CF]  bg-[#263243] rounded-xl lg:top-0 lg:right-0 lg:-mr-28  border-transparent h-[450px] w-[320px] text-right  border-2 rounded-bl-sm  lg:w-[600px] lg:h-[400px] space-y-5 px-5 py-8 md:px-5 md:py-8 md:space-y-5">
            <div className="">PROJECT #2</div>
            <div className="text-[#3F99DE] font-bold text-xl">
              E-COMMERCE WEBSITE
            </div>
            <div>
              E-commerce website with collections, Firebase(OAuth), Add to cart
              feature, Cart page, Test payment integration with Stripe API,
              Confirmation after checkout, etc. Feel fre to checkout the link or
              clone the project.
            </div>
            <div className="flex md:px-[200px] px-40 lg:px-[400px] space-x-10">
              <div>
                <a href="https://github.com/Lordgreg003">
                  <IconContext.Provider
                    value={{ size: "40px", color: "white" }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/lordgreg003">
                  <IconContext.Provider value={{ size: "40px", color: "blue" }}>
                    <FaTwitter />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
            <div>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                React, Redux, Stripe API, Firebase
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-[700px]   flex-wrap md:flex-col">
          <div
            style={{ backgroundImage: `url(${quote})` }}
            className="bg-white lg:hover:w-[950px] lg:hover:h-[450px] bg-no-repeat bg-cover lg:w-[900px] rounded-xl w-[320px]  h-[160px]  relative lg:h-[400px]"
          ></div>
          <div className="text-[#B2B9CF]   absolute z-10 bg-[#263243] rounded-xl lg:top-0 lg:-ml-28 border-transparent   border-2 rounded-bl-sm h-[450px] w-[320px] text-left md:px-5 md:py-8 md:space-y-5 space-y-5 px-5 py-8  lg:w-[600px] lg:h-[400px]">
            <div>PROJECT #3</div>
            <div className="text-[#3F99DE] font-bold text-xl">
              QUOTE GENERATOR
            </div>
            <div>
              Everyone loves a good motivational or life quote. It makes us feel
              good, and keeps us motivated. If you love such, you'd love this
              project. If you don't like quotes before now, You'd love this
              project too! Enjoy!.
            </div>
            <div className="flex  space-x-10">
              <div>
                <a href="https://github.com/Lordgreg003">
                  <IconContext.Provider
                    value={{ size: "40px", color: "white" }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/lordgreg003">
                  <IconContext.Provider value={{ size: "40px", color: "blue" }}>
                    <FaTwitter />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
            <div>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                HTML5, CSS3, Javascript, APIs
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-[700px]   flex-wrap md:flex-col">
          <div
            style={{ backgroundImage: `url(${colour})` }}
            className="bg-white lg:hover:w-[950px] lg:hover:h-[450px] bg-no-repeat bg-cover lg:w-[900px] rounded-xl w-[320px]  h-[160px]  relative lg:h-[400px]"
          ></div>
          <div className="text-[#B2B9CF] text-right   absolute z-10 bg-[#263243] rounded-xl lg:top-0 lg:right-0 lg:-mr-28  border-transparent h-[450px] w-[320px]  border-2 rounded-bl-sm  lg:w-[600px] lg:h-[400px] space-y-5 px-5 py-8 md:px-10 md:py-8 md:space-y-5 ">
            <div>PROJECT #4</div>
            <div className="text-[#3F99DE] font-bold text-xl">
              BACKGROUND COLOR GENERATOR
            </div>
            <div>
              Getting to find colors online can be tedious for non-designers.
              This is more like a pallette for devs to play around with and get
              nice colors or gradients from.
            </div>
            <div className="flex md:px-[200px] px-40  lg:px-[400px] space-x-10">
              <div>
                <a href="https://github.com/Lordgreg003">
                  <IconContext.Provider
                    value={{ size: "40px", color: "white" }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/lordgreg003">
                  <IconContext.Provider value={{ size: "40px", color: "blue" }}>
                    <FaTwitter />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
            <div>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                HTML5, CSS3, JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;
