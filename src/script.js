//Morse Code Translator
//Morse Code Dictionary

const MorseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": "/",
}

//Morse code dictionanry needs to be reversed, to get the morsecode letters snd numbers

const MorseCodeReverse = {};
for (const key in MorseCode) {
    if (MorseCode.hasOwnProperty(key)) {
        const value = MorseCode[key];
        MorseCodeReverse[value] = key;
    }
}

const inputTextField = document.getElementById("textinput");
const outputTextfield = document.getElementById("textoutput");
const translateBtn = document.getElementById("translate");

translateBtn.addEventListener("click", () => {
    const inputText = inputTextField.value.trim().toUpperCase();
    if (inputTextField === "" ){
        outputTextfield.textContent = "Please Input text or morsecode";
        return;
    }

    
})