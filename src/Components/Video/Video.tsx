import { useEffect, useRef, useState } from "react";
import video from "../../assets/671218a312747ac394420992_Video-transcode.mp4";
import videoPlay from "../../assets/Frame 162474.png";
import videoPause from "../../assets/Frame 162475 (4).png";
import Ellipse from "../../assets/Ellipse 65.png";
import Aos from "aos";
function Video() {
  const videoState = useRef<HTMLVideoElement | null>(null);
  const [playVid, setPlayVid] = useState<boolean>(false);
  const playVideo = () => {
    const videoNewState: null | HTMLVideoElement = videoState.current;
    if (videoNewState) {
      if (playVid) {
        videoNewState.play();
      } else {
        videoNewState.pause();
      }
      setPlayVid(!playVid);
    }
  };
  useEffect(() => {
    Aos.init({
      duration: 1000, // Set the duration for the animation
      easing: "ease-in-out", // Define the easing for the animation
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-start gap-5 px-5 md:px-8 lg:px-12 2xl:px-52 mt-32 w-full text-white relative">
      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <div className="w-full">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="text-3xl md:text-3xl sm:text-center md:text-start lg:text-4xl font-bold lg:w-[80%] sm:leading-[55px]"
          >
            Why Ever Is The Best Choice?
          </h1>
        </div>
        <div className="w-full">
          <p
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="text-[14px] sm:text-center md:text-start lg:text-[15px] lg:w-[80%] mt-2 lg:mt-4"
          >
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="2500"
        onClick={playVideo}
        className="w-full relative"
      >
        <video
          ref={videoState}
          muted
          autoPlay
          loop
          className="md:h-[500px] w-full object-cover"
        >
          <source src={video} />
        </video>
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 w-full h-full bg-[#0000007e]">
          {playVid ? (
            <img
              src={videoPlay}
              className="w-10 md:w-16 cursor-pointer"
              alt=""
            />
          ) : (
            <img
              src={videoPause}
              className="w-10 md:w-16 cursor-pointer"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="absolute -bottom-96 left-0">
        <img src={Ellipse} className="" alt="" />
      </div>
      {/* <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-blue-500 pointer-events-none z-50"
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      /> */}
    </div>
  );
}

export default Video;
