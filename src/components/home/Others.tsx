import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import "../../css/Style.css";

const Others = () => {
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="w-full bg-[#222831] text-center   h-28 py-3  md:text-center lg:px-52 ">
        <div className="w-full   font-bold text-[#B2B9CF] text-3xl">
          Other Notable Projects
        </div>
        <div className="px-3 md:w-full md:px-72 lg:px-64  h-9 ">
          <hr className="border-2 w-[340px] md:w-[390px]  border-[#B2B9CF]  rounded-3xl" />
        </div>
      </div>
      <div className="py-5 md:py-0 lg:py-0   px-7 md:px-0 lg:px-0 space-y-5 md:space-y-0 lg:space-y-0    w-full justify-evenly items-center flex-wrap md:flex h-[1250px] md:h-[790px] lg:h-[800px] bg-[#222831]">
        <div className="lg:w-[350px] text-[#B2B9CF] lg:space-y-20 lg:px-10 lg:py-10 text-left bg-[#263243] w-[300px] h-[350px] md:w-[350px] px-5 py-4 space-y-5 md:h-[300px] md:px-5 md:py-5 md:space-y-5  lg:h-[600px]">
          <div>
            {" "}
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
          </div>
          <div className="text-2xl text-[#7E92D9] font-bold">
            HOUSE MARKET PLACE
          </div>
          <div>
            A house listing market place where you can put up your house for
            rent or sale, or view other houses for rent or sale. Signup (email
            or google) and explore!
          </div>
          <div>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              React, Firebase, Hooks
            </span>{" "}
          </div>
        </div>
        <div className="lg:w-[350px] text-[#B2B9CF] lg:space-y-20 lg:px-10 lg:py-10 text-left bg-[#263243] w-[300px] h-[350px] px-5 py-4 space-y-4  md:w-[350px] md:h-[300px] md:px-5 md:py-5 md:space-y-1  lg:h-[600px]">
          <div>
            {" "}
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
          </div>
          <div className="text-2xl text-[#7E92D9] font-bold">
            MATH QUIZ - WE HATE MATH
          </div>
          <div>
            Okay, okay, I hear what you are saying. And i think we can all agree
            - NOBODY likes math 😂 - But this is a fun, easy one i promise! I
            dare you, take a MATH test today!😈
          </div>
          <div>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              HTML5, CSS3, Javascript, API
            </span>
          </div>
        </div>
        <div className="lg:w-[350px] lg:space-y-8 text-[#B2B9CF] lg:px-10 lg:py-10 text-left bg-[#263243] w-[300px] h-[450px] px-5 py-5 space-y-2  md:w-[350px] md:h-[400px] md:px-5 md:py-5 md:space-y-2    lg:h-[600px]">
          <div>
            {" "}
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
          </div>
          <div className="text-2xl text-[#7E92D9] font-bold">MOVIE APP</div>
          <div>
            A web application using the OMDB API, allows users to search for
            movies, retrieve movie information and display the results in a
            visually appealing way. Additional features include generating
            random movie displays on each reload which gives different users
            different expereinces using the TMDb API, viewing movie details,
            error handling, responsiveness, and attractive styling.
          </div>
          <div>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              HTML5, CSS3, Javascript, API
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Others;
