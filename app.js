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
let eachPassword = [];
let hasPassword = false;


// ------------ FUNCTIONS ----------------
function randomIndex() {
    let randomIndex = Math.floor ( Math.random() * 92)
    return randomIndex;
}

function randomPassword() {
    let random = []
    for (let i = 0; i < 12; i++) {
        random.push(base[randomIndex()])
    }

    random = random.join('')
    return random
}

function generatePasswords() {
    for (let i = 0; i < passwordButtonsEl.length; i++) {
        hasPassword = true;
        eachPassword = randomPassword();
        passwordButtonsEl[i].textContent = eachPassword;
    }
}

function copyPassword() {
    let password = '';
    if (hasPassword === true) {
        password = passwordButtonsEl.textContent;
        console.log(password);
    }
}