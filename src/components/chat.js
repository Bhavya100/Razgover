import React from 'react'
import css from '../scss/Chat.module.scss'
const Chatbox = () => {
  return (
    <div className={css.chatbox + " flex fdx"}>
      <div className={css.chats +" flex fdx"}>
        <div className={css.chat}>
          <span>You : </span>Hi tanay , How are you?
        </div>
      </div>
      <div className={css.last+" flex"}>
        <div className={css.esc +" escButton"}>
          ESC
        </div>
        <div className={css.txtinp + " flex"}>
          <img src="plusmsg.svg" alt="" />
          <input className="inpNull" type="text" maxLength={400} placeholder="Type your Messeges here" />
        </div>
      </div>
    </div>
  )
}

export default Chatbox;