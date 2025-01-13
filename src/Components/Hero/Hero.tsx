// import socials from "../../assets/Socials.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/mail.png";
import arrow from "../../assets/arrow-right-up.png";
import profile from "../../assets/LinkedIn_Banner-removebg-preview.png";
import profileBG from "../../assets/Group 162558.png";
import ingr1 from "../../assets/Rectangle 9579.png";
import ingr2 from "../../assets/Rectangle 9580.png";
import curve from "../../assets/curve.png";
import circle from "../../assets/Group 162526.png";
import traingle from "../../assets/Group 162527.png";
import add from "../../assets/add.png";
import { motion } from "motion/react";

function Hero() {
  return (
    <>
      {/* ingredient 1 */}
      <motion.div
        animate={{
          // translateY: [-50, 50, -50]
          rotate: 360,
        }}
        transition={{
          duration: 5,
          delay: 1,
          ease: "linear",
          repeat: Infinity,
        }}
        // style={{ position: "absolute", top: "0px", left: "0" }}
      >
        <div className="absolute left-0 top-0 z-10">
          <img src={ingr1} alt="" />
        </div>
      </motion.div>

      {/* hero section */}
      <div
        id="hero"
        className={`flex gap-3 flex-col md:flex-row justify-between items-center px-5 md:px-8 lg:px-12 2xl:px-52 w-full mt-10 lg:mt-0 relative top-24 transition-transform duration-300 `}
      >
        <div className="text-white flex flex-col justify-start items-start gap-5 sm:gap-10 w-full md:w-[60%] xl:w-[50%]">
          <div className="w-full">
            <h1
              data-aos="fade-down"
              className="text-4xl w-[90%] sm:w-full sm:text-3xl lg:text-4xl font-bold sm:text-center md:text-start"
            >
              Mohammad Sahel Yousufzoy
            </h1>
          </div>
          <div className="flex flex-col justify-around items-start sm:justify-center sm:items-center md:justify-start md:items-start gap-7">
            <div>
              <p
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="text-[13px] sm:text-[15px] sm:text-center md:text-start"
              >
                Welcome to the extraordinary world of Mohammad Sahel Yousufzoy ,
                a versatile and imaginative artist who skilfully navigates the
                realms of product design, photography and digital art. With a
                keen eye for detail and a relentless pursuit of innovation,
                Mohammad Sahel Yousufzoy crafts captivating visual narratives,
                immersive digital realms, and functional yet aesthetically
                pleasing products.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex justify-center items-center gap-5 z-10"
            >
              <img className="cursor-pointer" src={instagram} alt="" />
              <a
                href="https://www.linkedin.com/in/mohammad-sahel-yousufzoy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="cursor-pointer" src={linkedin} alt="" />
              </a>{" "}
              <a
                href="https://github.com/Sahel1384"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="cursor-pointer" src={github} alt="" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pbsyousufzoydreaminghigh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="cursor-pointer" src={email} alt="" />
              </a>
            </div>
            <div data-aos="fade-right">
              <button className="border relative z-10 border-purple1 hover:bg-transparent hover:border-white duration-300 text-white bg-purple1 flex justify-center items-center gap-2 text-[15px] px-3 py-[9px] rounded-[3px]">
                Our Services{" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img
            data-aos="zoom-in"
            data-aos-duration="2500"
            src={curve}
            className="absolute left-10 md:left-[450px] lg:left-[600px] 2xl:left-[900px] top-96 2xl:top-[120px] md:top-20"
            alt=""
          />
        </div>
        <div className="">
          <img
            data-aos="zoom-in"
            data-aos-duration="2500"
            src={traingle}
            className="absolute -bottom-10 md:bottom-10 lg:bottom-20 left-5 md:left-[450px] lg:left-[600px] 2xl:left-[900px]"
            alt=""
          />
        </div>
        <div className="w-[70%] sm:w-[50%] md:w-[30%] relative flex justify-start items-center">
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            src={profile}
            className="w-full z-[2] relative lg:static bottom-14 lg:bottom-0"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="2400"
            src={profileBG}
            className="absolute z-[1] w-full bottom-14 lg:bottom-0"
            alt=""
          />
        </div>
        <div>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={circle}
            className="absolute top-96 md:top-20 right-10"
            alt=""
          />
        </div>
        <div className="">
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={add}
            className="absolute -bottom-1 md:bottom-20 right-5 lg:right-10"
            alt=""
          />
        </div>
      </div>

      {/* ingredient 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 5, delay: 1, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute top-0 right-0 z-[1]">
          <img src={ingr2} alt="" />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
