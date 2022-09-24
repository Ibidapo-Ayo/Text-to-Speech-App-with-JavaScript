let convert_btn = document.querySelector("#convert-to-text-btn");

convert_btn.onclick = () => {
  let entered_text = document.querySelector(".text").value;
  let speech_rate = document.querySelector("#rate").value;
  let speech = new SpeechSynthesisUtterance();
  if (entered_text === "") {
    alert("Please enter a text to continue");
  } else {
    speech.lang = "en-US";
    speech.text = entered_text;
    speech.voice = window.speechSynthesis.getVoices()[1];
    if (speech_rate === "select") {
      alert("Please enter your speech rate");
    } else {
      speech.rate = speech_rate;
      speech.volume = 1;
      speech.pitch = 5;
      speechSynthesis.speak(speech);
    }
  }
};
