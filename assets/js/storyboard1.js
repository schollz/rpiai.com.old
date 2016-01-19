var MD5 = new Hashes.MD5;
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
var messageNumber = 0;
$(document).ready(function() {
    $('.page-content').hide();
    var pw = prompt("Please enter your password", "");
    if (MD5.hex(pw) != "508f62705c3dc1f374585f1d713377e7") {
        alert("Wrong password.")
        window.location.replace("http://rpiai.com");
    } else {
        $('.page-content').show();
    }
    msg = new SpeechSynthesisUtterance();
    voices = window.speechSynthesis.getVoices();
    msg.voice = voices[8]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 0; //0 to 2
    msg.lang = 'en-US';
    messages = ["One Must Always Prove Their Bridges", "pause", "pause", "A light inherits, blushes, and it does not return", "pause","the enchanting color of this crystal planetarium.","pause","like how the somber brick of communities that water the domestic forests are trusted.","pause","I get the feeling","pause","they must have lots to imbue","pause","to each other since the value imposes necessity","pause","and necessity equates love."];
    msg.text = messages[messageNumber];
    msg.onend = function(e) {
      console.log('Finished in ' + event.elapsedTime + ' seconds.');
      messageNumber = messageNumber + 1;
      msg.text = messages[messageNumber];
      msg.voice = voices[8]; // Note: some voices don't support altering params
      msg.voiceURI = 'native';
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 0; //0 to 2
      msg.lang = 'en-US';
      msg.volume = 1; // 0 to 1
      if (msg.text=="pause") {
        msg.volume = 0;
      } else {
      }
      if (messageNumber < messages.length) {
        speechSynthesis.speak(msg);
      }
    };
});
function partA() {
    speechSynthesis.speak(msg);
}