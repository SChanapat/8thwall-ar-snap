const loadingScreen = {
  schema: {
    disableWorldTracking: { type: "bool", default: true },
    requestGyro: { type: "bool", default: true },
  },
  init() {
    console.log("hello this work!");
    const videoCanvas = document.getElementById("videocanvas");
    const pdpaPage = document.getElementById("pdpapage");
    let isloaded = false;
    // const loadvideo = document.getElementById('loadingvideo')
    // const vid = document.querySelector('#loadingvideo')
    // disable cookiePage frist
    const closeButton = document.getElementById("testclosebutton");
    // closeButton.append('skip here!')
    closeButton.style.display = "block";
    closeButton.classList.add("bypass_ready_btn");
    // const closeVideo = () => {
    //   console.log('hello why this work')
    //   videoCanvas.classList.add('hidden')
    // }

    const scene = this.el.sceneEl;
    scene.addEventListener("realityready", () => {
      isloaded = true;
      console.log("AR ready");
      closeButton.classList.add("bypass_ready_btn");
      // closeButton.style.display = 'block'
    });
    const testPrint = () => {
      // if (isloaded === true) {
      console.log("test test test");
      closeButton.classList.add("bypass_ready_btn");
      setTimeout(() => {
        videoCanvas.classList.add("hidden");
      }, 2000);
      // } else {
      //   console.log('AR not ready')
      // }
    };
    // const timeOutManagement = () => {
    //   console.log('time managememt')
    // }

    closeButton.onclick = testPrint;
    // loadvideo.addEventListener('pause', (event) => {
    //   console.log('video loaded')
    //   setTimeout(() => {
    //     console.log('settime out')
    //     videoCanvas.classList.add('hidden')
    //   }, 3000)
    // })

    // vid.onloaded = vid.play()
    // document.onloaded = timeOutManagement
    // vid.onended = testPrint
    // closeButton.onclick = testPrint
    const load = () => {
      console.log("test loaded");
    };
    // window.XRExtras ? load() : window.addEventListener('xrextrasloaded', load)
    window.XR8 ? load() : window.addEventListener("xrloaded", load);
  },
};
export { loadingScreen };
