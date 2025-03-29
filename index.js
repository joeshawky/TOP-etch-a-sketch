const CONTAINER = document.querySelector(".container");
const PROMPT_BTN = document.querySelector("#prompt")

let initialRed
let initialGreen 
let initialBlue 
let redDiff 
let greenDiff 
let blueDiff 


const getCardsCount = () => {
    let num;
    while (isNaN(num)) {
        num = prompt("Enter the number of squares: (1-100)");
        num = Number(num)
        if (num < 0 || num > 100) {
            num = NaN;
        }
    }
    return num;
};

const removeCards = () => {
    CONTAINER.innerHTML = "";
}

const addCards = (num) => {
    const offsetRgb = () => {
        initialRed -= redDiff;
        initialGreen -= greenDiff;
        initialBlue -= blueDiff;
    }

    const cardEventListener = (e) => {
        const hasBgColor = e.srcElement.style.backgroundColor !== ""
        if (hasBgColor)
            return;

        e.srcElement.style.backgroundColor = `rgb(${initialRed},${initialGreen},${initialBlue})`
        offsetRgb()
    }

    const createCard = () => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.flexBasis = `${width.toString()}px`
        card.style.height = `${width.toString()}px`
        return card;
    }
    
    const width = 960 / num;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++ ){
            const card = createCard();
            card.addEventListener('mouseover', cardEventListener);
            CONTAINER.appendChild(card);
        }
    }
}

const initVariables = () => {
    initialRed = Math.random() * 255;
    initialGreen = Math.random() * 255;
    initialBlue = Math.random() * 255;
    redDiff = initialRed / 9;
    greenDiff = initialGreen / 9;
    blueDiff = initialBlue / 9;
}

const handleClick = () => {
    initVariables();
    removeCards();
    const num = getCardsCount();
    addCards(num);
}


PROMPT_BTN.addEventListener("click", () => {
    handleClick();
});