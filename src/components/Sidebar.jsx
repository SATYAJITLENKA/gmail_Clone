import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { IoIosArrowDown, IoMdStar } from "react-icons/io";
import { MdInbox, MdOutlineDrafts } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { TbSend2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"20px"} />,
    text: "Starred",
    link: "starred",
  },
  {
    icon: <FaRegClock size={"20px"} />,
    text: "Snoozed",
    link: "snoozed",
  },
  {
    icon: <TbSend2 size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
  },
];
const Sidebar = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="w-[20%]">
      <div className="p-2">
        <button className="flex gap-4 rounded-2xl bg-[#C2E7FF] items-center p-4 font-semibold hover:shadow-xl">
          <FaPen />
          Compose
        </button>
      </div>
      <div className="text-[#3A3B3F] font-semibold">
        {sidebarItems.map((item, index) => (
          <Link to={item.link} key={index}>
            <div
              onClick={() => setSelected(index)}
              className={`${
                selected === index
                  ? `bg-[#D3E3FD] text-black`
                  : "hover:bg-gray-200 hover:text-black"
              } flex gap-4 items-center rounded-full my-1  pl-6 py-1 cursor-pointer`}
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          </Link>
        ))}
        <div className="flex gap-4 items-center rounded-full my-1 hover:bg-gray-200 hover:text-black pl-6 py-1 cursor-pointer">
          <IoIosArrowDown size={20} />
          More
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
