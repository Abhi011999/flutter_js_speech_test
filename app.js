function speech() {
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    for(i=0;i<voices.length;i++){
        let voice = voices[i];
        alert(voice.lang);
    }
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}