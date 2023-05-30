import { competencesType } from "../Types";
import { FaReact, FaPython, FaNodeJs, FaCss3Alt, FaDocker, FaRaspberryPi } from "react-icons/fa";
import { SiArduino, SiC, SiElectron, SiIbm, SiMysql, SiOpencv, SiPandas, SiPostman, SiPython, SiSpacy, SiSqlite, SiTypescript } from "react-icons/si";
import { DiJava, DiLinux } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { AiFillDatabase, AiFillHtml5, AiFillWindows } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
const competencesArray: competencesType = [
  {
    label: "Developpement web",
    competences: [
      {
        label: "React",
        mark: 4,
        icon: <FaReact />,
      },
      {
        label: "Typescript",
        mark: 4,
        icon: <SiTypescript />,
      },
      {
        label: "Node JS",
        mark: 4,
        icon: <FaNodeJs />,
      },
      {
        label: "CSS",
        mark: 4,
        icon: <FaCss3Alt />,
      },
      {
        label: "HTML",
        mark: 5,
        icon: <AiFillHtml5 />,
      },
      {
        label: "Electron JS",
        mark: 3,
        icon: <SiElectron />,
      },
    ],
  },
  {
    label: "Développement orienté objet",
    competences: [
      {
        label: "Python",
        mark: 4,
        icon: <FaPython />,
      },
      {
        label: "Java",
        mark: 3,
        icon: <DiJava />,
      },
      {
        label: "C",
        mark: 3,
        icon: <SiC />,
      },
      {
        label: "C++",
        mark: 3,
        icon: <CgCPlusPlus />,
      },
      {
        label: "QT",
        mark: 4,
        icon: <CgCPlusPlus />,
      },
    ],
  },
  {
    label: "Systèmes d'exploitation",
    competences: [
      {
        label: "Windows",
        mark: 4,
        icon: <AiFillWindows />,
      },
      {
        label: "Linux",
        mark: 4,
        icon: <DiLinux />,
      },
    ],
  },
  {
    label: "Intelligence Artificielle",
    competences: [
      {
        label: "Open CV",
        mark: 4,
        icon: <SiOpencv />,
      },
      {
        label: "Pandas",
        mark: 3,
        icon: <SiPandas />,
      },
      {
        label: "YOLO",
        mark: 4,
        icon: <SiPython />,
      },
      {
        label: "Spacy",
        mark: 3,
        icon: <SiSpacy />,
      },
      {
        label: "IBM",
        mark: 3,
        icon: <SiIbm />,
      },
      {
        label: "Roboflow",
        mark: 3,
        icon: <TbWorldWww />,
      },
    ],
  },
  {
    label: "Bases de données",
    competences: [
      {
        label: "MySql",
        mark: 3,
        icon: <SiMysql />,
      },
      {
        label: "Sqlite",
        mark: 3,
        icon: <SiSqlite />,
      },
      {
        label: "NoSQL",
        mark: 3,
        icon: <AiFillDatabase />,
      },
    ],
  },
  {
    label : "Autres" ,
    competences : [
      {
        label: "Git",
        mark: 3,
        icon: <BsGit />,
      }, {
        label: "Docker",
        mark: 3,
        icon: <FaDocker />,
      }, {
        label: "Arduino",
        mark: 4,
        icon: <SiArduino />,
      }, {
        label: "Respberry Pi",
        mark: 3,
        icon: <FaRaspberryPi />,
      }, {
        label: "Postman",
        mark: 5,
        icon: <SiPostman />,
      },
    ]
  }
];

export { competencesArray };
