import React from 'react';
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
      title: 'Menu',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <BsIcons.BsFillTelephoneFill />,
      cName: 'nav-text'
    },
    {
      title: 'About us',
      path: '/about',
      icon: <IoIcons.IoMdInformationCircle />,
      cName: 'nav-text'
    }
  ];