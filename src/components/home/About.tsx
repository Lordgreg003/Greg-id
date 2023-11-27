import React from "react";
import { Greg } from "../../images/Index";

const About = () => {
  return (
    <section className="overflow-x-hidden" id="about">
      <div className="w-full space-y-32 md:space-y-0 lg:space-y-0 lg:h-[700px] bg-[#222831] justify-center flex-wrap md:flex overflow-x-hidden">
        <div className="w-full  md:w-[600px] px-7 py-10 space-y-5  h-[680px] text-left text-[#B2B9CF]">
          <div className="space-y-2">
            <div className="text-3xl font-bold ">About</div>
            <div>
              <hr className="border-t-4 border-[#B2B9CF] w-32 rounded-3xl" />
            </div>
          </div>
          <div>
            My name is Nwokoye Chidera, a front-end web developer from Nigeria.
            I am on the journey to become a full-stack web developer. I love to
            build fun and scalable stuff on the web which requires paying
            attention to detail and being ready to learn new things when
            required.
          </div>
          <div>
            Over time, I have acquired a solution-oriented personality used to
            deliver{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ">
              efficient
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              accessible
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              creative solutions
            </span>
            /
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              experiences
            </span>{" "}
            to one and all.
          </div>
          <div>
            When I'm not programming, I love being in very quiet spaces.
            Watching Anime. Talking about how awesome Ribena is. Surfing the
            internet for fast cars. Or Playing video games.
          </div>
          <div>
            These are a few tools and technologies I am familiar with which I
            have also been working with as well.
          </div>
          <div className="flex space-x-7 text-[#B2B9CF] ">
            <div>
              <ol className="list-disc">
                <li>HTML</li>
                <li>CSS3</li>
                <li>TAILWIND-CSS</li>
                <li>BOOSTRAP</li>
                <li>FIGMA</li>
              </ol>
            </div>
            <div>
              <ol className="list-disc">
                <li>JAVASCRIPT</li>
                <li>TYPESCRIPT</li>
                <li>REACT</li>
                <li>GIT-&-GITHUB</li>
                <li>LARAVEL</li>
              </ol>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full  md:w-[400px] px-10 h-[480px] lg:px-4 lg:py-24">
          <div className="border-4 border-[#134B91] rounded-lg">
            <img src={Greg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
