import React, { useEffect, forwardRef } from 'react'
import s from "../scss/Boxes.module.scss"
import { useState } from 'react'
import { sel } from '../js/utility'

const videoCards = forwardRef((props, ref) => {
  useEffect(() => {
    const video = sel(`#${ref.current.uid}`)
    const extlayer = video.parentElement.querySelector(`.${s.profileabs}`)
    console.log(extlayer)
    function checks() {
      if(video.srcObject === null){
        video.srcObject = ref.current.mediaStream.current
      }
      if (!ref.current.camera.current) { extlayer.classList.add(s.noopacity)}
      else{extlayer.classlist.remove(s.noopacity)}
      requestAnimationFrame(checks)
    }
    checks()


  }, [ref.current])
  return (
    <>
      <div className={s.box}>
        <div className={s.noVideo + " flex jc al"}>
          <div className={s.profileabs + " flex jc al fdx"}>
            <img className={s.pprof} src="profile.svg" alt="" />
            <img className={s.cutlogo} src="cutlogo.svg" alt="" />
          </div>
        </div>
        <div className={s.inner + " flex fdx"}>
          <div className={s.namePlate + " flex  al"}>
            <div className={s.profile}>
              <img src="profile.svg" alt="" />
            </div>
            <h4>Christania</h4>
            <div className={s.verified}>
              <img src="verification.svg" alt="" />
            </div>
          </div>
          <div className={s.timePlate + " flex al"}>
            <div className={s.ctd}>
              <img src="connected.svg" alt="" />
            </div>
            <h4>Connected</h4>
            <div className={s.dot}></div>
            <div className={s.time}>
              <span className="min">{1}</span>:
              <span>{1}</span>
            </div>
          </div>
        </div>
        <video id={ref.current.uid} autoPlay playsInline></video>
      </div>
    </>

  )
});

export default videoCards;
