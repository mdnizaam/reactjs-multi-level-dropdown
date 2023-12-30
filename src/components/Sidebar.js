import React from "react";
import SidebarItem from "./SidebarItem";
import MENU from "../constants/menu.json";

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-[#ffffff] text-[#000] h-full overflow-auto block">
      {MENU.map((items, index) => (
        <SidebarItem key={index} items={items} />
      ))}
    </div>
  );
};

export default Sidebar;
