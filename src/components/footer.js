import React from 'react'
import sec from "../scss/Footer.module.scss"
const Footer = () => {
  return (
    <footer className={sec.footer}>
        <div className={sec.inner +" flex container"}>
            <div className={sec.copyright +" flex al"}>
                <div className={sec.img}>
                    <img src="copyright.svg" alt="" />
                </div>
                <p>2022-23 Reserved</p>
            </div>
            <div className={sec.pages +" flex"}>
                <div className={sec.page+" flex jc al"}>
                    <div className={sec.img}>
                        <img src="ques.svg" alt="" />
                    </div>
                    <p><span>/</span>Contact</p>
                </div>
                <div className={sec.page + " flex jc al"}>
                    <div className={sec.img}>
                        <img src="sequ.svg" alt="" />
                    </div>
                    <p><span>/</span>Privacy</p>
                </div>
            </div>
        </div>        
    </footer>
  )
}

export default Footer;