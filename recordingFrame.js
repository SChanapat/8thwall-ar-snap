const recordingFrame = {
    schema: {
      isFounded: {type: 'int', default: 0},
    },
    init() {
      const {object3D} = this.el // object should be recroding frame
      this.isFounded = 0
      this.raycaster = new THREE.Raycaster()
      this.camera = document.getElementById('camera')
      this.threeCamera = this.camera.getObject3D('camera')
      this.ground = document.getElementById('ground')
      // 2D coordinates of the raycast origin, in normalized device coordinates (NDC)---X and Y
      // components should be between -1 and 1.  Here we want the cursor in the center of the screen.
      this.rayOrigin = new THREE.Vector2(0, 0)
      this.cursorLocation = new THREE.Vector3(0, 0, 0)
 // detected when image Lost
      const imageLost = (e) => {
        object3D.visible = true
      }
      this.el.sceneEl.addEventListener('xrimagelost', imageLost)
    },
    tick() {
    // Raycast from camera to 'ground'
      // this.raycaster.setFromCamera(this.rayOrigin, this.threeCamera)
      // const intersects = this.raycaster.intersectObject(this.ground.object3D, true)
      // if (intersects.length > 0) {
      //   const [intersect] = intersects
      //   this.cursorLocation = intersect.point
      // }
      // this.el.object3D.position.y = 0.1
      // this.el.object3D.position.lerp(this.cursorLocation, 0.4)
      // this.el.object3D.rotation.y = this.threeCamera.rotation.y
    },
  }
  export {recordingFrame}