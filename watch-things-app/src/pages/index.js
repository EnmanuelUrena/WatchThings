import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const {username_login: username, password_login: password} = Object.fromEntries(new window.FormData(e.target))
    username && password ? console.log('login') : console.log('Missing fields')
  }
  const handleSignupSubmit = (e) => {
    e.preventDefault()
    const {username_signup: username, password_signup: password, password_confirm} = Object.fromEntries(new window.FormData(e.target))
    console.log(username, password, password_confirm)
    username && password ? 
    password === password_confirm ?
    console.log('signup') : console.log('Passwords doesnt match') : console.log('Missing fields')
    
  }
  return (
    <>
      <Head>
        <title>WatchThings</title>
        <meta name="description" content="An app to manage things to see" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>WatchThings</h1>
        <p>Manage things to see</p>
        <section className={styles.login_section}>
          <h2>Login</h2>
          <form className={styles.login_form} onSubmit={handleLoginSubmit}> 
            <label htmlFor='username'>Username</label>
            <input type='text' id='username_login' name='username_login' />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password_login' name='password_login' />
            <button type='submit'>Login</button>
          </form>
        </section>  
        <section className={styles.signup_section}>
          <h2>Sign up</h2>
          <p>Dont have an account? Sign up now!</p>
          <form className={styles.signup_form} onSubmit={handleSignupSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username_signup' name='username_signup' />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password_signup' name='password_signup' />
            <label htmlFor='password_confirm'>Confirm password</label>
            <input type='password' id='password_confirm' name='password_confirm' />
            <button type='submit'>Sign up</button>
          </form>
        </section>
      </main>
    </>
  )
}
