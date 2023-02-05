import { wait } from "@testing-library/user-event/dist/utils";
import { json } from "react-router-dom";

//Selecting document
export function sel(e, t, wait) {
    if (t) { return document.querySelectorAll(e) } return document.querySelector(e)
}
export class keyWordManager {
    constructor({ form, pushlocation, element, span }) {
        // this.form=document.querySelector(form);
        // this.pl=document.querySelector(pushlocation);
        // this.elem=document.querySelector(element);
        // this.target=span;
        // this.observer();
        return true
    }
    observer() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            let val = e.target.querySelector("input");
            let newe = document.createElement("div")
            newe.classList = this.elem.classList
            newe.innerHTML = this.elem.innerHTML
            newe.querySelector("span").innerText = this.capitalise(val.value).substring(0, 5);
            val.value = null
            this.pl.prepend(newe)
            this.pl.querySelectorAll(`.${this.elem.classList[0]} img`).forEach((e) => {
                e.addEventListener("click", (e) => { e.target.parentElement.remove() })
            })
        })
    }
    capitalise(s) {
        return s.substring(0, 1).toUpperCase() + s.slice(1);
    }
}

export class TimeManger {
    constructor() {
        this.timer = { minutes: 0, seconds: 0 };
        this.MetaData = {};
    }
    start() {
        this.inital = new Date();
        requestAnimationFrame(this.update());
    }
    pause() {
        this.SpentTime.min = Math
    }
}
export function uidGen(length, includeSymbols) {
    const symbols = [...Array(10).keys()].map(i => String.fromCharCode(i + 33));
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uid = '';
    const characterLength = characters.length;
    const crypto = window.crypto || window.msCrypto;
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
        if (includeSymbols) {
            uid += symbols[array[i] % symbols.length];
        }
        else {
            uid += characters[array[i] % characterLength];
        }
    }
    return uid;


}

export class Timer {
    constructor() {
        this.minutes = 0;
        this.seconds = 0;
        this.interval = null;
    }

    start() {
        this.interval = setInterval(() => {
            this.seconds++;
            if (this.seconds === 60) {
                this.minutes++;
                this.seconds = 0;
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    reset() {
        this.minutes = 0;
        this.seconds = 0;
    }

    getTime() {
        return `${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}`;
    }
}

export class WebSocketHandler {
    constructor(object) {
        this.socket = new WebSocket(`ws://${object.ip}`);
        if (object.test) {
            this.socket.onopen = (e) => { console.log("Connection established") }
            this.socket.onclose = (e) => { console.log("Connection closed") }
            this.socket.onmessage = object.onMessage
        }
    }
    sjson(json) {
        this.socket.send(JSON.stringify(json))
    }
}

export class RTChandle extends WebSocketHandler {
    constructor(websocket, RTCArgs) {
        let stunServer = {
            urls: 'stun:stun.l.google.com:19302'
        }
        super(websocket)
        this.connection = new RTCPeerConnection(stunServer);
        this.connection.onicecandidate=this.onicecandidate
        this.currentStatusConnected = false
        this.remoteElement = RTCArgs.remoteElement
        this.localElement = RTCArgs.localElement
        this.newConnectionTriggerElement = RTCArgs.trigger
        this.socket.onmessage = (message) => { this.socketMessagehandler(message, this) }
        //New request when user clicks on ESC button
        this.newConnectionTriggerElement.addEventListener('click', () => { this.newConnectionRequest() })

        //On tracks
        this.connection.ontrack = (event) => {
            RTCArgs.remoteElement.srcObject=event.streams[0]
        }
        this.addTrack()

    }
    onicecandidate(e){
        console.log(e)
    }
    newConnectionRequest() {
        this.sjson({ name: 'request', data: 'new' })
    }
    //Adding the localStream obj to peer connection
    addTrack() {
        navigator.getUserMedia({video:true,audio:true},(streams)=>{
            this.localElement.srcObject = streams
            streams.getTracks().forEach(track => { this.connection.addTrack(track, streams) })
        },(e)=>{
            console.error("Camera request terminated")
        })
    }
    socketMessagehandler(message) {
        let data = JSON.parse(message.data)
        if (data.trigger == 'offer') {
            console.log("Offer request recived")
            this.connection.createOffer().then(offer => { this.connection.setLocalDescription(offer) })
                .then(() => {
                    console.log(JSON.stringify(this.connection.localDescription))
                    let sender = () => {
                        if (this.connection.localDescription != null) {
                            this.sjson({ name: 'offer', data: this.connection.localDescription })
                        }
                        else {
                            requestAnimationFrame(sender)
                        }
                    }
                    sender()
                }
                )
            return true
        }
        if (data.trigger === 'answer') {
            this.connection.setRemoteDescription(data.remoteDescription)
            this.connection.createAnswer().then(answer => {
                this.connection.setLocalDescription(answer)
                console.log("sending answer")
                this.sjson({ name: "answer", data: answer })
                console.log("answer sent")
                return true
            })
        }
        if (data.trigger === 'setanswer') {
            this.connection.setRemoteDescription(data.setAnswer)
                .then(() => { this.currentStatusConnected = true })
            return true
        }
        else {
            console.error("error caused during the validation the JSON Object")
        }
    }
}