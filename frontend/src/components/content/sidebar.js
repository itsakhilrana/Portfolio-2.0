import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/#home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/#about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  
  {
    title: "Projects",
    path: "/#projects",
    icon: <AiIcons.AiOutlineFundProjectionScreen />,
    cName: "nav-text",
  },
  {
    title: "Designs",
    path: "/#designs",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Skills",
    path: "/#skills",
    icon: <FaIcons.FaCodepen />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/#contact",
    icon: <IoIcons.IoMdChatboxes />,
    cName: "nav-text",
  },
  
];
