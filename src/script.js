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

 //Input contains dots and dash, it's Morse code and translating to text

  if (inputText.includes(".")) {
    const WordsMorse = inputText.split("/");
    const WordsTranslated = WordsMorse.map((WordMorse) => {
        const MorseCharacters = WordMorse.split(" ");
        return MorseCharacters.map((MorseCharacter) => {
            return MorseCodeReverse[MorseCharacter] || MorseCharacter
        })
        .join("")
    });

    outputTextfield.textContent= WordsTranslated.join(" ");
  } else {
     //Input is text, translating to Morse Code

    const words = inputText.split("");
    const WordsTranslated = words.map((word) => {
    const Characters = word.split("");
    const MorseCharacters = Characters.map((Character) => {
        return MorseCode [Character] || Character;
    });
    return MorseCharacters.join(" ")

    })
    outputTextfield.textContent = WordsTranslated.join("/")
  }

})