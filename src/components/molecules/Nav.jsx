import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import IconButton from "../atoms/IconButton";
import Drawer from "../organism/Drawer";

export default function Nav({ title }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTap = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="px-2 py-2 text-2xl flex space-x-4">
      <IconButton icon={<MdMenu size={18} />} onTap={handleTap} />
      <h1>{title}</h1>
      {isDrawerOpen && <Drawer />}
    </div>
  );
}
