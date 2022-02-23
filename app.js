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

function copyPassword1() {
    if (hasPassword === true) {
        password = passwordButtonsEl[0].textContent;
        navigator.clipboard.writeText(password);
        alert(`This password has been copied: ${password}`)
    }
}

function copyPassword2() {
    if (hasPassword === true) {
        password = passwordButtonsEl[1].textContent;
        navigator.clipboard.writeText(password);
        alert(`This password has been copied: ${password}`)
    }
}

function copyPassword3() {
    if (hasPassword === true) {
        password = passwordButtonsEl[2].textContent;
        navigator.clipboard.writeText(password);
        alert(`This password has been copied: ${password}`)
    }
}

function copyPassword4() {
    if (hasPassword === true) {
        password = passwordButtonsEl[3].textContent;
        navigator.clipboard.writeText(password);
        alert(`This password has been copied: ${password}`)
    }
}