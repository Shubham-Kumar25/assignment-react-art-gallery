import React from "react";
import {
  FaHome,
  FaBell,
  FaShoppingCart,
  FaComment,
  FaWallet,
  FaClipboardList,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-[700px] bg-white rounded-lg text-gray-400 text-base font-semibold">
      <div className="flex flex-col justify-between p-9">
        <ul>
          <SidebarItem
            icon={<FaHome />}
            text="Home"
            specialClass="font-bold text-black"
          />
          <SidebarItem icon={<FaBell />} text="Notifications" />
          <SidebarItem icon={<FaShoppingCart />} text="Shop" />
          <SidebarItem icon={<FaComment />} text="Conversation" />
          <SidebarItem icon={<FaWallet />} text="Wallet" />
          <SidebarItem icon={<FaClipboardList />} text="Subscription" />
          <SidebarItem icon={<FaUser />} text="My Profile" />
        </ul>
        <div className="flex text-[#88C2BB] items-center">
          <SidebarItem icon={<FaCog />} text="Setting" />
        </div>
      </div>
      <div className="p-9">
        <div className="flex text-[#88C2BB] items-center">
          <SidebarItem
            icon={<FaSignOutAlt />}
            text="Logout"
            specialClass="text-[#88C2BB]"
          />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, specialClass }) => (
  <li
    className={`flex items-center mb-8 ${
      specialClass || "font-normal text-gray-400"
    } hover:text-[#4fa99f] hover:font-semibold transition-colors ${
      text === "Home" ? "text-black cursor-pointer" : "cursor-pointer"
    }`}
  >
    {icon}
    <span className="ml-4">{text}</span>
  </li>
);

export default Sidebar;
