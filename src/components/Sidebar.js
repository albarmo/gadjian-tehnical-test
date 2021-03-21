import React from "react";
import "./style/sidebar.css";

import { ImHome } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";

const SidebarComponent = () => {
  return (
    <>
      <div className="sidebar">
        <h5>
          <ImHome /> <span>Beranda</span>
        </h5>
        <h5>
          <HiUserGroup /> <span>Personel List</span>
        </h5>
        <h5>
          <ImHome /> <span>Daily Attendance</span>
        </h5>
      </div>
    </>
  );
};

export default SidebarComponent;
