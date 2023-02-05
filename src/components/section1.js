import React, { useEffect } from 'react'
import sec from "../scss/Section1.module.scss"
import * as THREE from "three"
import { sel , keyWordManager} from '../js/utility.js'
const Section1 = () => {
    useEffect(() => {
        //Keyword manager
        let box=new keyWordManager({
            form:"."+sec.form,
            pushlocation:"."+sec.wrapper,
            element:"."+sec.key,
            span:"."+sec.key+" span"
        });
        console.log("Ran")
        ///////ThreeJs Handler
        const loader=new THREE.TextureLoader();
        const height=loader.load("height.png");
        const texture=loader.load("/textures.jpg")
        const alpha=loader.load("alpha3.png")

        const canvas = sel("canvas");
        const scene = new THREE.Scene();

        const geometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            map:texture,
            displacementMap:height,
            displacementScale:.6,
            alphaMap:alpha,
            transparent:true,
            depthTest:false
        });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
        plane.rotation.x=181

        const pointLight = new THREE.PointLight(0x44CD7B, 1)
        pointLight.position.x = .2
        pointLight.position.y = 10
        pointLight.position.z = 4.4
        scene.add(pointLight)

        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth*.7,
            height: window.innerHeight
        }

        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth*.6
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 3
        scene.add(camera)

        // Controls
        // const controls = new OrbitControls(camera, canvas)
        // controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha:true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */
        document.addEventListener("mousemove",animateTerrain)
        let mouseY=0;
        let speedInt=0;
        function animateTerrain(e) {
            mouseY=e.clientY;
            speedInt=e.clientX;
        }
        const clock = new THREE.Clock()

        const tick = () => {

            const elapsedTime = clock.getElapsedTime()
            plane.rotation.z=(.5*elapsedTime)+(speedInt*0.0001)
            plane.material.displacementScale=.3+mouseY*.0002

            // Update objects
            // sphere.rotation.y = .5 * elapsedTime

            // Update Orbital Controls
            // controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()

    },[])
    return (
        <section className={sec.sec + " flex"}>
            <div className={sec.gBlurEffect + " flex fdx"}>
                <div className={sec.circle}></div>
                <div className={sec.circle}></div>
            </div>
            <div className={sec.inner + " container flex"}>
                <canvas className={sec.canvas + " 1Rt7j"}></canvas>
                <div className={sec.sub + " flex fdx jc"}>
                    <div className={sec.text + " flex fdx jc"}>
                        <h5>Connect with privacy not ip.</h5>
                        <h2>Connect with People of your intrest all across the globe with <span>RazGover</span> web app </h2>
                        <h5>For more details about privacy visit <span>Privacy</span> </h5>
                    </div>
                    <div className={sec.search + " flex fdx jc"}>
                        <h3>Your Intrest</h3>
                        <div className={sec.searchBox + " flex al"}>
                            <img className={sec.arrow} src="arrrow.svg" alt="" />
                            <form action="" className={sec.form + " flex al"}>
                                <div className={sec.wrapper + " flex jc al"}>
                                    <div className={sec.key + ' flex al jc'}><span>Text</span><img src="cut.svg" alt="" /></div>
                                    <input type="text" />
                                </div>
                            </form>
                            <button><span>Enter</span></button>
                        </div>
                    </div>
                    <div className={sec.chat + " flex fdx jc"}>
                        <h3>Join Chat</h3>
                        <div className={sec.btns + " flex al"}>
                            <div className={sec.button + " flex al"}>
                                <div className={sec.btext}> <span href="/chat2"> Duo</span></div>
                                <img src="duo.svg" alt="" />
                            </div>
                            <div className={sec.button + " flex al"}>
                                <div className={sec.btext}> <span href="/chat4">Squad </span> </div>
                                <img src="squad.svg" alt="" />
                            </div>
                        </div>
                        <h5>By joining the call you agreeing our <span> Terms and conditions</span></h5>
                    </div>
                </div>
                <div className={sec.sub + " flex"}>
                    <div className={sec.banners + " flex "}>
                        <div className={sec.banner + " flex jc al"}>
                            <img src="verfied.svg" alt="" />
                            <div className={sec.line}></div>
                            <h3>Verifed  Profiles</h3>
                        </div>
                        <div className={sec.banner + " flex jc al"}>
                            <img src="growth.svg" alt="" />
                            <div className={sec.line}></div>
                            <h3>30K users Live</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Section1;

