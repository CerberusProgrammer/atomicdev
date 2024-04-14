import { Button } from "antd";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import DrawerView from "../organism/DrawerView";

export default function Nav({ title }) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <>
      <div className="px-2 py-2 flex items-center space-x-2">
        <Button
          type="secondary"
          onClick={showDrawer}
          icon={<MdMenu size={18} />}
        ></Button>
        <h1 className=" font-bold text-xl">{title}</h1>
      </div>
      <DrawerView title="Basic Drawer" onClose={onClose} open={open} />
    </>
  );
}
