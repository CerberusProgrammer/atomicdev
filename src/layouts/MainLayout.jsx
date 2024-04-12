import Drawer from "../components/Drawer";
import Nav from "../components/Nav";

export default function MainLayout({ children, title }) {
  const windowWidth = window.innerWidth;

  return (
    <>
      {windowWidth > 800 ? (
        <>
          <Drawer></Drawer>
          {children}
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
