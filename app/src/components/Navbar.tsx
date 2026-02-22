import { MessageSquare } from "lucide-react";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="navbar shadow-sm border-b">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <div className="bg-info p-2 rounded-2xl">
            <MessageSquare />
          </div>
          ChatApp
        </a>
      </div>
      <div className="flex-none">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
