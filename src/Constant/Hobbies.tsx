import { hobbiesType } from "../Types";
import { CgCPlusPlus } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
import { BiDumbbell, BiCameraMovie } from "react-icons/bi";
import { GiWalkingBoot, GiLoveSong } from "react-icons/gi";
const hobbiesArray: hobbiesType = [
  {
    title: "Lecture (science-fiction, mythologie, histoire)",
    icon: <BsBook />,
  },
  {
    title: "Sport",
    icon: <BiDumbbell />,
  },
  {
    title: "Randonnée",
    icon: <GiWalkingBoot />,
  },
  {
    title: "Cinéma",
    icon: <BiCameraMovie />,
  },
  {
    title: "Musique",
    icon: <GiLoveSong />,
  },
];

export { hobbiesArray };
