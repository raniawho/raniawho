import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaLink,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <NavLink key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Social;
