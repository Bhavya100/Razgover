import React from 'react'
import nav from "../scss/Nav.module.scss"
import { sel } from "../js/utility"
const Nav = () => {
  return (
    <>
    <nav className="flex container">
        <div className={nav.inner+' flex'}>
            <div className={nav.logo +" flex al"}>
                <img src="logo.svg" alt="" />
            </div>
            <ul className={nav.ul+' flex al jc'}>
                <li className={nav.li}>Home</li>
                <li className={nav.li}>Privacy</li>
                <li className={nav.li}>Contact</li>
            </ul>
            <div className={nav.lbtn+" flex al"}>
                <div className={nav.login}>Login</div>
                <div className={nav.signup+" flex"}>
                    <div className={nav.stext}>
                        SignUp
                    </div>
                    <img src="vers.svg" alt="" />
                </div>
            </div>
            <div className={nav.mobile + " flex al"}>
                <div className={nav.user +" flex jc al"}>
                    <img src="user.svg" alt="" />
                </div>
                <div onClick={(e)=>{sel("nav ul").classList.toggle(nav.ulactive)}} className={nav.menu +" flex jc al"}>
                    <img src="menu.svg" alt="" />
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav;