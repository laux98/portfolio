import { menuItemType } from "../Types";
import { InfoOutlined, BellOutlined, CalendarOutlined, ProjectOutlined, MailOutlined } from "@ant-design/icons";

const menuItems: Array<menuItemType> = [
  {
    label: "Informations",
    icon: <InfoOutlined/>,
    id: 0,
  },
  {
    label: "Compétences",
    icon: <BellOutlined/>,
    id: 1,
  } ,
  {
    label: "Cursus",
    icon: <CalendarOutlined/>,
    id: 2,
  },
  {
    label: "Réalisations",
    icon: <ProjectOutlined/>,
    id: 3,
  } ,{
    label : "Me contacter" , 
    icon : <MailOutlined/> , 
    id : 4
  }
];

export { menuItems };
