import React, { useState } from "react";

const SidebarItems = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item?.childrens) {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-1 overflow-auto block ">
        <div
          onClick={() => setOpen((pre) => !pre)}
          className="cursor-pointer flex justify-between items-center px-2 py-2"
        >
          <span className="flex items-center">
            {item.icon && <span className="w-6"> {item.icon}</span>}
            {item?.title}
          </span>
          <span
            className={
              open
                ? `rotate-180 cursor-pointer transition-all`
                : "cursor-pointer transition-all"
            }
          >
            🔻
          </span>
        </div>

        <div
          className={
            open ? `h-auto pl-3` : ` h-0 overflow-hidden transition-all`
          }
        >
          {item.childrens.map((child, index) => (
            <SidebarItems key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-1 overflow-auto block">
        <div className="cursor-pointer flex justify-between items-center px-2 py-2">
          <span className="flex items-center">
            {item.icon && <span className="w-6"> {item.icon}</span>}
            {item?.title}
          </span>
        </div>
      </div>
    );
  }
};

export default SidebarItems;
