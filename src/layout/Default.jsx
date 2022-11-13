import { Outlet, useLocation } from "react-router-dom";
import { Header, Nav } from "../components/import";
import { AppRoutes } from "../App";
import classes from "./style.module.css";

function Default() {
  const location = useLocation().pathname.replace("/", "");
  return (
    <div className={classes.wrapper}>
      <header className={classes.main_header}>
        <Header label={location} />
      </header>
      <nav className={classes.main_nav}>
        <Nav navLinks={AppRoutes.routes} />
      </nav>
      <main className={classes.main_content}>
        <Outlet />
      </main>
    </div>
  );
}

export { Default };
