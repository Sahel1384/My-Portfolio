import serv1 from "../../assets/Frame 162475.png";
import serv2 from "../../assets/Frame 162475 (1).png";
import serv3 from "../../assets/Frame 162475 (2).png";
import add from "../../assets/add (1).png";
import traingle from "../../assets/Group 162527.png";
import rect from "../../assets/Rectangle 9580.png";

function Services() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center mt-36 sm:mt-28 text-white px-5 md:px-8 lg:px-12 2xl:px-52 gap-20 relative"
        id="services"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center w-full relative">
          <img
            data-aos="fade-right"
            data-aos-duration="1500"
            src={traingle}
            className="absolute sm:static left-1 -top-20"
            alt=""
          />
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="text-3xl md:text-3xl sm:text-center lg:text-3xl font-bold lg:w-[40%] xl:w-[30%] sm:leading-[55px]"
          >
            The Service We Provide For You
          </h1>
          <img
            data-aos="fade-down"
            data-aos-duration="1500"
            src={add}
            className="absolute right-1 -bottom-10 sm:static"
            alt=""
          />
        </div>
        <div className="absolute right-0 top-0 z-[1]">
          <img src={rect} alt="" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-10 xl:gap-10 justify-center w-full z-[2]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col justify-center items-center gap-4"
          >
            <img src={serv1} alt="" />
            <h1 className="text-[18px] xl:text-xl text-center font-semibold">
              Web Development
            </h1>
            <p className="text-center text-[14px] text-[#c1c1c1]">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="flex flex-col justify-center items-center gap-4"
          >
            <img src={serv2} alt="" />
            <h1 className="text-[18px] xl:text-xl text-center font-semibold">
              UI/UX Designer
            </h1>
            <p className="text-center text-[14px] text-[#c1c1c1]">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1700"
            className="flex flex-col justify-center items-center gap-4"
          >
            <img src={serv3} alt="" />
            <h1 className="text-[18px] xl:text-xl text-center font-semibold">
              Front-end Development
            </h1>
            <p className="text-center text-[14px] text-[#c1c1c1]">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col justify-center items-center gap-4"
          >
            <img src={serv1} alt="" />
            <h1 className="text-[18px] xl:text-xl text-center font-semibold">
              Backe-end Development
            </h1>
            <p className="text-center text-[14px] text-[#c1c1c1]">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
        </div>
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src={add}
          className="absolute left-1 -bottom-10 "
          alt=""
        />
      </div>
    </>
  );
}

export default Services;
