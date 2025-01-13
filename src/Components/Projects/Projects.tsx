import circle from "../../assets/Group 162526.png";
import { ProjectsDatas, ProjectsDatas2 } from "./ProjectsData";
import tailwind from "../../assets/tailwind-svgrepo-com 1.png";
import react from "../../assets/react-svgrepo-com 1.png";
// import instagram from "../../assets/instagram.png";
// import linkedin from "../../assets/linkedin.png";
import arrow from "../../assets/Group 139391.png";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Ellipse from "../../assets/Ellipse 65.png";
import JS from "../../assets/Vector.png";
import HTML from "../../assets/Vector (1).png";

function Projects() {
  const [hover, setHover] = useState<number | null>(null);
  // const pagination: string[] = ["First", "second"];
  const [changePage, setPage] = useState<string>("First");
  return (
    <div
      className="flex flex-col justify-start items-start gap-14 px-5 md:px-8 lg:px-12 2xl:px-52 mt-32 text-white w-ful relative"
      id="projects"
    >
      <div className="flex items-center justify-between w-full">
        {" "}
        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-3xl md:text-3xl sm:text-center lg:text-3xl font-bold lg:w-[40%] xl:w-[30%] sm:leading-[55px]"
        >
          Our Awesome Projects
        </h1>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={circle}
          className=""
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-14 xl:gap-x-20 gap-y-10 w-full z-[10]">
        {changePage === "First" &&
          ProjectsDatas.map((data) => (
            <a
              data-aos="zoom-in"
              data-aos-duration="1500"
              href={data.live}
              target="_blank"
              key={data.id}
              onMouseOver={() => setHover(data.id)}
              onMouseLeave={() => setHover(null)}
              className="flex flex-col justify-start items-start gap-5 lg:gap-8 bg-card pb-5 pt-5 sm:pt-8 px-5 sm:px-8 rounded-[12px] group overflow-hidden cursor-pointer relative"
            >
              <div
                className={`w-full relative group-hover:scale-105 duration-700`}
              >
                <span className="border-card border-[5px] rounded-full absolute -right-5 -top-5">
                  <img src={arrow} className="w-10" alt="" />
                </span>
                <img
                  src={data.img}
                  className="h-52 md:h-72 w-full rounded-[5px] object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-4 group-hover:scale-105 duration-700">
                <h1 className="text-xl font-semibold">{data.title}</h1>
                <p className="text-[12px] lg:text-[14px] text-[#b7b7b7]">
                  {data.desc}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-react cursor-pointer duration-300 rounded-full">
                    <img src={react} alt="" />
                  </span>
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-tailwind cursor-pointer duration-300 rounded-full">
                    <img src={tailwind} alt="" />
                  </span>
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-instagram cursor-pointer duration-300 rounded-full">
                    <img src={JS} alt="" />
                  </span>
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-linkedin cursor-pointer duration-300 rounded-full">
                    <img src={HTML} alt="" />
                  </span>
                </div>
              </div>
              {hover === data.id && (
                <div className="absolute top-0 left-0 right-0 w-full h-full bg-[#00000075] duration-700 flex justify-center items-center">
                  <p className="text-lg font-semibold hover:underline">
                    Live Preview
                  </p>
                </div>
              )}
            </a>
          ))}
        {changePage === "Second" &&
          ProjectsDatas2.map((data) => (
            <a
              data-aos="fade-down"
              data-aos-duration="1500"
              href={data.live}
              target="_blank"
              key={data.id}
              onMouseOver={() => setHover(data.id)}
              onMouseLeave={() => setHover(null)}
              className="flex flex-col justify-start items-start gap-5 lg:gap-8 bg-card pb-5 pt-5 sm:pt-8 px-5 sm:px-8 rounded-[12px] group overflow-hidden cursor-pointer relative"
            >
              <div
                className={`w-full relative group-hover:scale-105 duration-700`}
              >
                <span className="border-card border-[5px] rounded-full absolute -right-5 -top-5">
                  <img src={arrow} className="w-10" alt="" />
                </span>
                <img
                  src={data.img}
                  className="h-52 md:h-72 w-full rounded-[5px] object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-4 group-hover:scale-105 duration-700">
                <h1 className="text-xl font-semibold">{data.title}</h1>
                <p className="text-[12px] lg:text-[14px] text-[#b7b7b7]">
                  {data.desc}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-react cursor-pointer duration-300 rounded-full">
                    <img src={react} alt="" />
                  </span>
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-tailwind cursor-pointer duration-300 rounded-full">
                    <img src={tailwind} alt="" />
                  </span>
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-instagram cursor-pointer duration-300 rounded-full">
                    <img src={JS} alt="" />
                  </span>
                  <span className="bg-iconBG p-2 sm:p-3 hover:bg-linkedin cursor-pointer duration-300 rounded-full">
                    <img src={HTML} alt="" />
                  </span>
                </div>
              </div>
              {hover === data.id && (
                <div className="absolute top-0 left-0 right-0 w-full h-full bg-[#00000075] duration-700 flex justify-center items-center">
                  <p className="text-lg font-semibold hover:underline">
                    Live Preview
                  </p>
                </div>
              )}
            </a>
          ))}
      </div>
      <div className="absolute left-0 z-[10] -bottom-80 hidden md:block">
        <img src={Ellipse} className="" alt="" />
      </div>
      <div className="flex justify-center items-center w-full gap-3">
        <span
          data-aos="fade-right"
          data-aos-duration="1000"
          onClick={() => setPage("First")}
          className="bg-iconBG p-3 hover:bg-linkedin cursor-pointer duration-300 rounded-full"
        >
          <FaArrowLeft className="text-sm" />
        </span>
        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          onClick={() => setPage("Second")}
          className="bg-iconBG p-3 hover:bg-linkedin cursor-pointer duration-300 rounded-full"
        >
          <FaArrowRight className="text-sm" />
        </span>
      </div>
    </div>
  );
}

export default Projects;
