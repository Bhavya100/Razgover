import React, { forwardRef, useEffect, useRef, useState } from 'react'
import VideoCard from "./components/vcards";
import chat from "./components/chat";
import s from "./scss/Duo.module.scss";
import Chatbox from './components/chat';
// import Chatbox from '../components/chat';
// import { RTCPeerConnection, RTCSessionDescription } from 'react-native-webrtc';
import { uidGen ,RTChandle, sel } from './js/utility';


const Duo = () => {
  //Bundle of use refs wrapped in one useRef which allows to change variable dynamicly
  let localFiles = useRef({ mediaStream: useRef(null), uid: uidGen(5, false), camera: useRef(false), audio: useRef(false) });
  let remoteFiles = useRef({ mediaStream: useRef(null), uid: uidGen(5, false), camera: useRef(false), audio: useRef(false) });
  useEffect(()=>{
    let connection=new RTChandle({test:true,ip:'192.168.1.109:3555'},{test:true,localElement:sel('video',true)[1],remoteElement:sel('video',true)[0],trigger:sel('.escButton')});
  },[])
  return (
    <>
      <div className={s.block}>
        Soory Not available for mobile yet!
      </div>
      <section className={s.s + " flex"}>
        <div className={s.inner + " container"}>
          <div className={s.sub + " flex fdx"}>
            <h2>Chat room(2)</h2>
            <div className={s.videoWrap + " flex fdx"}>
              <VideoCard ref={remoteFiles}></VideoCard>
              <VideoCard ref={localFiles}></VideoCard>
            </div>
          </div>
          <div className={s.sub}>
            <Chatbox></Chatbox>
          </div>
        </div>
      </section>
    </>
  )
}

export default Duo;