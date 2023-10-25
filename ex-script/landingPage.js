// Note: Setting disableWorldTracking=true and requestGyro=true
// basically gives you 3DoF mode

const cookiePage = {
  init() {
    console.log("test cookie page");
    const staringPage = document.getElementById("splashimage");
    const start = document.getElementById("startButton");
    start.style.display = "none";

    const addXRWeb = () => {
      if (
        this.data.requestGyro === true &&
        this.data.disableWorldTracking === true
      ) {
        // If world tracking is disabled, and you still want gyro enabled (i.e. 3DoF mode)
        // Request motion and orientation sensor via XR8's permission API
        XR8.addCameraPipelineModule({
          name: "request-gyro",
          requiredPermissions: () => [
            XR8.XrPermissions.permissions().DEVICE_ORIENTATION,
          ],
        });
      }
      this.el.sceneEl.setAttribute(
        "xrweb",
        `allowedDevices: any; disableWorldTracking: ${this.data.disableWorldTracking}`
      );
      // video.play()
      staringPage.classList.add("hidden");
    };
    start.onclick = addXRWeb;
  },
};
export { cookiePage };
