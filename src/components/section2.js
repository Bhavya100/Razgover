import React from 'react'
import sec from '../scss/Section2.module.scss'
const Section2 = () => {
    return (
        <section className={sec.sec + " flex fdx"}>
            <div className={sec.accents}>
                <img src="addedElipse.svg" alt="" />
            </div>
            <div className={sec.accents}>
                <img src="accenttri.svg" alt="" />
            </div>
            <div className={sec.arrowsec}>
                <svg width="166" height="39" viewBox="0 0 166 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M164.522 20.4143C165.303 19.6332 165.303 18.3669 164.522 17.5858L151.794 4.85793C151.013 4.07688 149.747 4.07688 148.966 4.85793C148.185 5.63897 148.185 6.9053 148.966 7.68635L160.279 19.0001L148.966 30.3138C148.185 31.0948 148.185 32.3611 148.966 33.1422C149.747 33.9232 151.013 33.9232 151.794 33.1422L164.522 20.4143ZM-19.5 21.0001H163.108V17.0001H-19.5V21.0001Z" fill="#31353D" />
                    <rect x="56.2817" y="6.28925" width="6.07902" height="37" transform="rotate(-29 56.2817 6.28925)" fill="#181A1E" />
                    <rect x="86.6547" y="2.00006" width="6.07902" height="37" transform="rotate(20 86.6547 2.00006)" fill="#181A1E" />
                    <rect x="101.655" y="1.00006" width="6.07902" height="37" transform="rotate(20 101.655 1.00006)" fill="#181A1E" />
                    <rect x="105" y="2.07916" width="6.07902" height="37" transform="rotate(-20 105 2.07916)" fill="#181A1E" />
                </svg>

            </div>
            <div className={sec.wave}><img src="wave.svg" alt="" /></div>
            <div className={sec.innerWrap + " flex"}>
                <div className={sec.inner + " flex container fdx"}>
                    <div className={sec.head
                        + " flex jc al"}>
                        <span>
                            <div className={sec.cirAnim}>
                                <svg width="100%" height="100%" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M154.12 137.79L153.27 137.14C164.58 122.29 170.56 104.55 170.56 85.83C170.56 56.83 155.97 30.15 131.53 14.46L132.11 13.56C156.86 29.44 171.63 56.46 171.63 85.83C171.63 104.78 165.57 122.75 154.12 137.79Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M85.82 171.64C38.5 171.64 0 133.14 0 85.82C0 38.5 38.5 0 85.82 0V1.06999C39.09 1.06999 1.08 39.09 1.08 85.81C1.08 132.54 39.1 170.55 85.82 170.55C99.94 170.55 113.92 167.01 126.24 160.31L126.75 161.25C114.27 168.06 100.11 171.64 85.82 171.64Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M45.21 151.88C22.09 137.64 8.29001 112.94 8.29001 85.82H10.44C10.44 112.19 23.86 136.2 46.34 150.05L45.21 151.88Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M85.82 163.36C77.32 163.36 68.97 161.99 60.99 159.3L61.68 157.27C69.44 159.89 77.56 161.22 85.83 161.22C124.66 161.22 156.91 132.13 160.82 93.55L162.96 93.77C158.92 133.43 125.76 163.36 85.82 163.36Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M160.24 73.78C157.43 56.29 148.45 40.26 134.94 28.65C121.29 16.91 103.84 10.45 85.82 10.45C71.27 10.45 57.15 14.6 44.98 22.46C30.8 31.62 19.98 45.42 14.51 61.32L12.48 60.62C18.1 44.27 29.23 30.08 43.81 20.66C56.33 12.58 70.85 8.31 85.81 8.31C104.35 8.31 122.29 14.96 136.33 27.03C150.22 38.97 159.46 55.46 162.35 73.45L160.24 73.78Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M85.82 141.82C54.94 141.82 29.82 116.7 29.82 85.82C29.82 73.32 33.85 61.5 41.46 51.64L43.16 52.95C35.84 62.44 31.97 73.8 31.97 85.82C31.97 115.51 56.13 139.67 85.82 139.67C91.09 139.67 96.3 138.91 101.29 137.41L101.91 139.47C96.71 141.04 91.29 141.82 85.82 141.82Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M123.64 127.12L122.19 125.54C133.3 115.36 139.67 100.89 139.67 85.83C139.67 75.23 136.59 64.97 130.77 56.16L132.56 54.98C138.62 64.14 141.82 74.81 141.82 85.84C141.81 101.49 135.19 116.54 123.64 127.12Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M119.32 43.66C109.71 36.01 98.12 31.97 85.82 31.97C75.03 31.97 64.62 35.15 55.71 41.17L54.51 39.39C63.77 33.13 74.6 29.83 85.82 29.83C98.62 29.83 110.67 34.03 120.66 41.99L119.32 43.66Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M85.82 132.2C78.28 132.2 70.79 130.35 64.17 126.85L64.67 125.9C71.14 129.32 78.45 131.13 85.81 131.13C106.14 131.13 124.1 117.46 129.49 97.88L130.52 98.17C125.02 118.21 106.63 132.2 85.82 132.2Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M53.03 118.63C44.27 109.87 39.44 98.22 39.44 85.83C39.44 60.26 60.24 39.45 85.82 39.45C111.39 39.45 132.2 60.26 132.2 85.83H131.13C131.13 60.85 110.81 40.53 85.83 40.53C60.85 40.53 40.53 60.85 40.53 85.83C40.53 97.93 45.24 109.31 53.81 117.87L53.03 118.63Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M85.82 114.67C69.91 114.67 56.97 101.73 56.97 85.82C56.97 69.91 69.91 56.97 85.82 56.97V59.12C71.1 59.12 59.12 71.1 59.12 85.82C59.12 100.54 71.1 112.52 85.82 112.52C100.54 112.52 112.52 100.54 112.52 85.82H114.67C114.66 101.73 101.72 114.67 85.82 114.67Z" fill="#36E8BD" fill-opacity="0.2" />
                                    <path d="M85.82 100.16C77.91 100.16 71.48 93.73 71.48 85.82H72.55C72.55 93.13 78.5 99.08 85.81 99.08C93.12 99.08 99.07 93.13 99.07 85.82C99.07 78.51 93.12 72.56 85.81 72.56C81.75 72.56 77.97 74.38 75.43 77.56L74.59 76.89C77.33 73.45 81.42 71.48 85.81 71.48C93.72 71.48 100.15 77.91 100.15 85.82C100.15 93.73 93.72 100.16 85.82 100.16Z" fill="#36E8BD" fill-opacity="0.2" />
                                </svg>

                            </div>
                            Sequrity Structure
                        </span>
                    </div>
                    <div className={sec.cards + " flex al jc"}>
                        <div className={sec.card + " flex fdx"}>
                            <div className={sec.arrow}>
                                <svg width="156" height="30" viewBox="0 0 156 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M154.522 16.4142C155.303 15.6332 155.303 14.3668 154.522 13.5858L141.794 0.857864C141.013 0.0768156 139.747 0.0768156 138.966 0.857864C138.185 1.63891 138.185 2.90524 138.966 3.68629L150.279 15L138.966 26.3137C138.185 27.0948 138.185 28.3611 138.966 29.1421C139.747 29.9232 141.013 29.9232 141.794 29.1421L154.522 16.4142ZM0 17H153.108V13H0L0 17Z" fill="#31353D" />
                                </svg>

                            </div>
                            <div className={sec.inner + " flex fdx"}>
                                <div className={sec.head + " flex al"}>
                                    <div className={sec.logo}>
                                        <img src="computer.svg" alt="" />
                                    </div>
                                    <h3>User</h3>
                                </div>
                                <div className={sec.dets + " flex fdx jc"}>
                                    <div className={sec.det + " flex"}>
                                        <div className={sec.logo}>
                                            <img src="lock.svg" alt="" />
                                        </div>
                                        <p>Everything is highly <span> secured</span> from end to other end.</p>
                                    </div>
                                    <div className={sec.det + " flex"}>
                                        <div className={sec.logo}>
                                            <img src="pcomputer.svg" alt="" />
                                        </div>
                                        <p>Presenting you better ui experience all across the <span> internet.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={sec.card + " flex fdx"}>
                            <div className={sec.arrow}>
                                <svg width="156" height="30" viewBox="0 0 156 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M154.522 16.4142C155.303 15.6332 155.303 14.3668 154.522 13.5858L141.794 0.857864C141.013 0.0768156 139.747 0.0768156 138.966 0.857864C138.185 1.63891 138.185 2.90524 138.966 3.68629L150.279 15L138.966 26.3137C138.185 27.0948 138.185 28.3611 138.966 29.1421C139.747 29.9232 141.013 29.9232 141.794 29.1421L154.522 16.4142ZM0 17H153.108V13H0L0 17Z" fill="#31353D" />
                                </svg>

                            </div>
                            <div className={sec.inner + " flex fdx"}>
                                <div className={sec.head + " flex al"}>
                                    <div className={sec.logo}>
                                        <img src="server.svg" alt="" />
                                    </div>
                                    <h3>Server</h3>
                                </div>
                                <div className={sec.dets + " flex fdx jc"}>
                                    <div className={sec.det + " flex"}>
                                        <div className={sec.logo}>
                                            <img src="lightning.svg" alt="" />
                                        </div>
                                        <p>Servers are fast enough if you are here if it’s slow then <span>Donate</span></p>
                                    </div>
                                    <div className={sec.det + " flex"}>
                                        <div className={sec.logo}>
                                            <img src="secure.svg" alt="" />
                                        </div>
                                        <p>We have strict sequrity policy for more info read Privacy <span> Policy.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={sec.card + " flex fdx"}>
                            <div className={sec.inner + " flex fdx"}>
                                <div className={sec.head + " flex al"}>
                                    <div className={sec.logo}>
                                        <img src="computer.svg" alt="" />
                                    </div>
                                    <h3>User</h3>
                                </div>
                                <div className={sec.dets + " flex fdx jc"}>
                                    <div className={sec.det + " flex"}>
                                        <div className={sec.logo}>
                                            <img src="lock.svg" alt="" />
                                        </div>
                                        <p>Everything is highly <span> secured</span> from end to other end.</p>
                                    </div>
                                    <div className={sec.det + " flex"}>
                                        <div className={sec.logo}>
                                            <img src="pcomputer.svg" alt="" />
                                        </div>
                                        <p>Everything is highly <span> secured</span> from end to other end.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2;