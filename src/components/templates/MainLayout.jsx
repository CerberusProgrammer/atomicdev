import { useEffect, useState } from "react";
import Nav from "../molecules/Nav";

export default function MainLayout({ children, title }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth > 800 ? (
        <>
          <p>grande</p>
        </>
      ) : (
        <>
          <Nav title="AtomicDEV"></Nav>
        </>
      )}
    </>
  );
}
