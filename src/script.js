//Morse Code Translator
//Morse Code Dictionary

const morseCode = {
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

const morseCodeReverse = {};
for (const key in morseCode) {
    if (morseCode.hasOwnProperty(key)) {
        const value = morseCode[key];
        morseCodeReverse[value] = key;
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

 //Input contains dots and dash, it's Morse code and translating to text

  if (inputText.includes(".")) {
    const wordsMorse = inputText.split("/");
    const wordsTranslated = wordsMorse.map((wordMorse) => {
        const morseCharacters = wordMorse.split(" ");
        return morseCharacters.map((morseCharacter) => {
            return morseCodeReverse[morseCharacter] || morseCharacter
        })
        .join("")
    });

    outputTextfield.textContent= wordsTranslated.join(" ");
  } else {
     //Input is text, translating to Morse Code

    const words = inputText.split("");
    const wordsTranslated = words.map((word) => {
    const characters = word.split("");
    const morseCharacters = characters.map((character) => {
        return morseCode [character] || character;
    });
    return morseCharacters.join(" ")

    })
    outputTextfield.textContent = wordsTranslated.join("/")
  }

})