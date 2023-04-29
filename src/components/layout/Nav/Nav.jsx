import { Link } from "react-router-dom";
import classes from "./style.module.css";

const Nav = ({ navLinks }) => {
  return (
    <section className={classes.nav_container}>
      <article className={classes.list_conteinr}>
        <ul>
          {navLinks[1].children.map((prop, index) => {
            return (
              <li className={classes.link} key={index}>
                <Link to={prop.path} className={classes.link_a}>
                  <img src={prop.icon} className={classes.nav_icon} />
                  <p className={classes.nav_text}>{prop.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export { Nav };
