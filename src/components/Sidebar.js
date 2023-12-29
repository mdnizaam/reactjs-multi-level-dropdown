import React from "react";
import MENUITEMS from "../constants/menu.json";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-[#ffffff] text-[#000] h-full overflow-auto">
      {MENUITEMS?.map((item, index) => (
        <SidebarItems key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
