import pro1 from "../../assets/Screenshot 2024-12-11 063935.png";
import pro2 from "../../assets/elearna.png";
import pro3 from "../../assets/advanced.png";
import pro4 from "../../assets/upskillb.png";

interface ProjectsData {
  id: number;
  img: string;
  title: string;
  desc: string;
  live: string;
}
export const ProjectsDatas: ProjectsData[] = [
  {
    id: 1,
    img: pro1,
    title: "Play Tailwind",
    desc: " A fully customizable and responsive web application with advanced features. Implemented smooth dark/light mode toggles using ReactJS and Tailwind CSS for improved accessibility. Developed reusable components for various sections, ensuring scalability and easy customization. Integrated React Router for seamless navigationacross multiple sections.",
    live: "https://play-lovat-iota.vercel.app/",
  },
  {
    id: 2,
    img: pro2,
    title: "Elearna",
    desc: "A beautifully designed single-page application (SPA) for educational purposes. Developed an intuitive user interface using ReactJS and Tailwind CSS, ensuring seamless navigation and accessibility. Integrated smooth animations with AOS (Animate On Scroll) to enhance user engagement. Utilized SPA architecture to reduce load times and improve performance.",
    live: "https://elearna.vercel.app/",
  },
  {
    id: 3,
    img: pro3,
    title: "Advanced",
    desc: "A modern web application with a clean and efficient design. Crafted a responsive, fully mobile-friendly UI using Tailwind CSS for engaging user experiences. Optimized navigation with React Router DOM, enabling smooth page transitions. Designed user-friendly pages with fast load times and.",
    live: "https://advanced-lyart.vercel.app/",
  },
  {
    id: 4,
    img: pro4,
    title: "Upskill Bootcamp Project",
    desc: "A fully responsive single-page application designed for all devices. Developed using ReactJS and Tailwind CSS with features like button-based filtering and user-friendly design. Collaborated on a Figma-based initial design for a cohesive and modern look.",
    live: "https://upskill-bootcamp.vercel.app/",
  },
];

export const ProjectsDatas2: ProjectsData[] = [
  {
    id: 3,
    img: pro3,
    title: "Advanced",
    desc: "A modern web application with a clean and efficient design. Crafted a responsive, fully mobile-friendly UI using Tailwind CSS for engaging user experiences. Optimized navigation with React Router DOM, enabling smooth page transitions. Designed user-friendly pages with fast load times and.",
    live: "https://advanced-lyart.vercel.app/",
  },
  {
    id: 4,
    img: pro4,
    title: "Upskill Bootcamp Project",
    desc: "A fully responsive single-page application designed for all devices. Developed using ReactJS and Tailwind CSS with features like button-based filtering and user-friendly design. Collaborated on a Figma-based initial design for a cohesive and modern look.",
    live: "https://upskill-bootcamp.vercel.app/",
  },
  {
    id: 1,
    img: pro1,
    title: "Play Tailwind",
    desc: " A fully customizable and responsive web application with advanced features. Implemented smooth dark/light mode toggles using ReactJS and Tailwind CSS for improved accessibility. Developed reusable components for various sections, ensuring scalability and easy customization. Integrated React Router for seamless navigationacross multiple sections.",
    live: "https://play-lovat-iota.vercel.app/",
  },
  {
    id: 2,
    img: pro2,
    title: "Elearna",
    desc: "A beautifully designed single-page application (SPA) for educational purposes. Developed an intuitive user interface using ReactJS and Tailwind CSS, ensuring seamless navigation and accessibility. Integrated smooth animations with AOS (Animate On Scroll) to enhance user engagement. Utilized SPA architecture to reduce load times and improve performance.",
    live: "https://elearna.vercel.app/",
  },
];
