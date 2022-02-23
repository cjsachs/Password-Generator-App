// ------- CACHING THE DOM -----------
let generatePasswordEl = document.querySelector('.generate-password-btn');
let passwordButtonsEl = document.querySelectorAll('.password-btn')

// ---------- GLOBAL VARIABLES -----------
const allCapsAlpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const allLowerAlpha = [...'abcdefghijklmnopqrstuvwxyz'];
const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:',./<>?"];
const allNumbers = [...'0123456789']

// base length = 91
const base = [...allCapsAlpha, ...allLowerAlpha, ...allUniqueChars, ...allNumbers]


// ------------ FUNCTIONS ----------------
function randomIndex() {
    let randomIndex = Math.floor ( Math.random() * 92)
    return randomIndex;
}

function generatePassword() {
    let random = []
    for (let i = 0; i < 12; i++) {
        random.push(base[randomIndex()])
    }
    random = random.join('')
    return random;
}

for (let i = 0; i < passwordButtonsEl.length; i++) {
    console.log(generatePassword())
}