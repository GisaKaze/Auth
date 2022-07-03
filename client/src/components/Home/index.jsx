import React from 'react'
import styles from "./styles.module.css"

const Header = () => {
  return (
    <div>
        <ul>
            <li><a className={styles.active} href="">Home</a></li>
            <li><a href="">About</a></li>
            <li className={styles.right}><a href="/login">Login</a></li>
        </ul>
    </div>
  )
}
export default Header
