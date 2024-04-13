import Drawer from "../Drawer";
import Nav from "../Nav";

export default function MainLayout({ children, title }) {
  const windowWidth = window.innerWidth;

  return (
    <>
      {windowWidth > 800 ? (
        <>
          <Drawer></Drawer>
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
