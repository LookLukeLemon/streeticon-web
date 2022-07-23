import {
  RiHome5Fill,
  RiHome5Line,
  RiSettings5Line,
  RiSettings5Fill,
} from "react-icons/ri";
import { HiOutlineCollection, HiCollection } from "react-icons/hi";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoStatsChartOutline, IoStatsChartSharp } from "react-icons/io5";
import SideMenuList from "./SideMenuList";
import SideMenuItem from "./SideMenuItem";
import {
  USER_MENU_FEED,
  USER_MENU_LIKE,
  USER_MENU_MESSAGE,
  USER_MENU_SETTING,
  USER_MENU_STATS,
  USER_MENU_STREET,
} from "common/Constants";

const menuItems = [
  {
    imgNode: <RiHome5Line size={20} />,
    selectedImgNode: <RiHome5Fill size={20} />,
    name: USER_MENU_FEED,
  },
  {
    imgNode: <HiOutlineCollection size={20} />,
    selectedImgNode: <HiCollection size={20} />,
    name: USER_MENU_STREET,
  },
  {
    imgNode: <FaRegBookmark size={20} />,
    selectedImgNode: <FaBookmark size={20} />,
    name: USER_MENU_LIKE,
  },
  {
    imgNode: <TbSend size={20} />,
    selectedImgNode: <RiSendPlaneFill size={20} />,
    name: USER_MENU_MESSAGE,
  },
  {
    imgNode: <IoStatsChartOutline size={20} />,
    selectedImgNode: <IoStatsChartSharp size={20} />,
    name: USER_MENU_STATS,
  },
  {
    imgNode: <RiSettings5Line size={20} />,
    selectedImgNode: <RiSettings5Fill size={20} />,
    name: USER_MENU_SETTING,
  },
];

const SideMenu = () => {
  return (
    <nav>
      <SideMenuList>
        {menuItems.map((mi) => (
          <SideMenuItem key={mi.name} {...mi} />
        ))}
      </SideMenuList>
    </nav>
  );
};

export default SideMenu;
