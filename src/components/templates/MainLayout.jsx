import { useEffect, useState } from "react";
import Drawer from "../organism/Drawer";
import Nav from "../molecules/Nav";

export default function MainLayout({ children, title }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth > 800 ? (
        <>
          <Drawer />
          <div className="px-4 py-8">{children}</div>
        </>
      ) : (
        <>
          <Nav title={title} />
          <div className="px-4 py-8">{children}</div>
        </>
      )}
    </>
  );
}
