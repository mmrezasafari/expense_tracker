import Icon from './assets/images/coin-dollar-svgrepo-com.svg'
import classes from './style.module.css'

const Header = (porps) => {
    return(
        <section className={classes.header_container}>
            <article className={classes.logo_container}>
                <div>
                    <img src={Icon} className={classes.self_logo}/>
                </div>
            </article>
            <article className={classes.nav_name_container}>
                <div>
                    <p className={classes.p_text_header}>Dashboard</p>
                </div>
            </article>
        </section>
    )
}


export {Header}