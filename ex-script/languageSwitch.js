const languageSwitch = {
  init() {
    // console.log('test language switch page')
    let isChecked = true;
    const languageBtn = document.getElementById("switcher");
    const languageLabel = document.getElementById("language");
    // instruction video
    const instructionVideo = document.getElementById("playerInstruction");
    const instructionVideo2 = document.getElementById("playerInstruction2");
    // button
    const startButton = document.getElementById("startButton");
    // sharing
    const text = document.getElementById("previewText");
    const sharing = document.getElementById("actionButtonText");
    const retake = document.getElementById("secondaryButton");

    const ChangeLanguage = () => {
      // latch for language switch
      if (isChecked === true) {
        // Thai language
        languageLabel.innerHTML = "ภาษาไทย";
        instructionVideo.classList.add("hidden");
        instructionVideo2.classList.remove("hidden");
        // button
        startButton.innerHTML = "มาเริ่มกันเลย!";
        // sharing
        text.innerHTML = "บันทึกเมฆสำเร็จ!";
        retake.innerHTML = "ถ่ายใหม่";
        sharing.innerHTML = "แชร์";
        // latch
        // console.log('000')
        isChecked = false;
      } else {
        // English Language
        languageLabel.innerHTML = "English";
        instructionVideo.classList.remove("hidden");
        instructionVideo2.classList.add("hidden");
        // button
        startButton.innerHTML = "START NOW!";
        // sharing
        text.innerHTML = "Cloud Recorded!";
        retake.innerHTML = "Retake";
        sharing.innerHTML = "Share";
        // latch
        // console.log('111')
        isChecked = true;
      }
    };
    languageBtn.onclick = ChangeLanguage;
  },
};
export { languageSwitch };
