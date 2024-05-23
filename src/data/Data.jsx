import { PiUserSound } from "react-icons/pi";
import h1 from "../assets/service/HardwareIcon.png";
import h2 from "../assets/service/HardwareIconH.png";
import { IoHardwareChipOutline } from "react-icons/io5";
import { MdOutlineComputer, MdOutlineDesignServices } from "react-icons/md";
import { TiSpannerOutline } from "react-icons/ti";
import { FaUserGraduate } from "react-icons/fa";

export const services = [
  { title: "Hardware Solutions", icon: <IoHardwareChipOutline size={70} /> },
  { title: "Webinars & Talk Sessions", icon: <PiUserSound size={70} /> },
  {
    title: "Product Design & Development",
    icon: <MdOutlineDesignServices size={70} />,
  },
  { title: "Manufacturing & Assembly", icon: <TiSpannerOutline size={70} /> },
  { title: "Trainings & Workshops", icon: <FaUserGraduate size={70} /> },
  { title: "Consulting & Tech Support", icon: <MdOutlineComputer size={70}/> },
];
