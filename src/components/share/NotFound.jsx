import classes from './style.module.css'

export function NotFound ({ text }) {
    return (
        <section className={classes.not_found}>
            <p>{text}</p>
        </section>
    )
}