import { CreateAccount } from '../pages/CreateAccount'
import classes from './style.module.css'

const SignIn = () => {
  return (
    <div className={classes.wrapper} style={{display: 'block'}}>
      <main className={classes.main_content}>
        <CreateAccount />
      </main>
    </div>
  )
}

export { SignIn }