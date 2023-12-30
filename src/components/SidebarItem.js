import React, { useState } from "react";

const SidebarItem = ({ items }) => {
  const [open, setOpen] = useState(false);
  console.log("items", items);
  if (items.childrens) {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center px-2"
        >
          <span>
            <span>{items.icon}</span> {items.title}
          </span>
          <span
            className={
              open
                ? "rotate-180 cursor-pointer transition-all"
                : "cursor-pointer transition-all"
            }
          >
            🔻
          </span>
        </div>
        <div
          className={open ? "h-auto overflow-hidden pl-2" : "h-0 overflow-hidden"}
        >
          {items.childrens.map((child, index) => (
            <SidebarItem key={index} items={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        <div className="flex justify-between items-center px-2">
          <span>
            <span>{items.icon}</span> {items.title}
          </span>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
