import { Link } from "react-router-dom";
import {
  Dashboard,
  Transactions,
  Account,
  Report,
  Setting,
} from "./assets/import";
import classes from "./style.module.css";

const navData = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: Dashboard,
  },
  {
    name: "Transactions",
    link: "/transactions",
    icon: Transactions,
  },
  {
    name: "Account",
    link: "/account",
    icon: Account,
  },
  {
    name: "Report",
    link: "/report",
    icon: Report,
  },
  {
    name: "setting",
    link: "/settng",
    icon: Setting,
  },
];

const Nav = () => {
  return (
    <section className={classes.nav_container}>
      <article className={classes.list_conteinr}>
        <ul>
          {navData.map((prop, index) => {
            return (
              <li className={classes.link} key={index}>
                <a href={prop.link} className={classes.link_a}>
                    <img src={prop.icon} className={classes.nav_icon} />
                    <p className={classes.nav_text}>{prop.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export { Nav };
