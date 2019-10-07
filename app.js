const btn = document.querySelector('.talk');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recog = new SpeechRecognition();
const home = document.querySelector('#home');
const features = document.querySelector('#features');
const price = document.querySelector('#price');
const youtube = document.querySelector('#youtube');

recog.onstart = () => {
    console.log("You are good to go");
    recog.continuous = true;
};

recog.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'You have clicked the button, good job!';
    if (transcript.includes('home')) {
        // window.speechSynthesis.speak(speech);
        home.click();
    }
    if (transcript.includes('features')) {
        // window.speechSynthesis.speak(speech);
        features.click();
    }
    if (transcript.includes('price')) {
        // window.speechSynthesis.speak(speech);
        price.click();
    }
    if (transcript.includes('YouTube')) {
        // window.speechSynthesis.speak(speech);
        youtube.click();
    }
    if (transcript.includes('back')) {
        // window.speechSynthesis.speak(speech);
        window.history.back();
    }
}

window.onload = () => {
    recog.start();
};
