import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/mail.png";
import add from "../../assets/add.png";
import circle from "../../assets/Group 162526.png";

function Footer() {
  return (
    <div
      className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start px-5 md:px-8 lg:px-12 text-white mt-16 sm:mt-28 bg-footer py-32 relative"
      id="contact"
    >
      <img
        data-aos="fade-up"
        data-aos-duration="2000"
        src={add}
        className="absolute right-5 lg:right-10 top-10"
        alt=""
      />
      <div className="flex flex-col justify-start items-start gap-5 md:gap-8">
        <h1
          data-aos="fade-up"
          data-aos-duration="1800"
          className="text-3xl md:text-3xl sm:text-center md:text-start lg:text-3xl font-bold lg:w-[80%] sm:leading-[55px]"
        >
          Contact us for the service you want to use
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex justify-start items-center gap-5 z-10"
        >
          <img className="cursor-pointer" src={instagram} alt="" />
          <img className="cursor-pointer" src={linkedin} alt="" />
          <img className="cursor-pointer" src={github} alt="" />
          <img className="cursor-pointer" src={email} alt="" />
        </div>
      </div>
      <div>
        <button
          data-aos="fade-up"
          data-aos-duration="2000"
          className="border relative z-10 border-purple1 hover:bg-transparent hover:border-white duration-300 text-white bg-purple1 flex justify-center items-center gap-2 text-[15px] px-8 md:px-3 lg:px-8 py-[9px] rounded-[3px]"
        >
          Contact us
        </button>
      </div>
      <img src={circle} className="absolute bottom-10 left-5" alt="" />
    </div>
  );
}

export default Footer;
