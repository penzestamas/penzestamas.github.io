function calculatePrice(amountFromUser) {
    let pricePerPiece = 1000;
    let delivery = 500;
    let pay = amountFromUser * pricePerPiece;
    if (pay < 5000) {
        pay += delivery;
    }
    return pay;
}

function printPrice() {
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);

    let showAmount = document.querySelector("span.show-amount");
    showAmount.innerHTML = validateAmount(amountNumber);
}

function validateAmount(amountFromUser) {
    amountFromUser = isNaN(amountFromUser) ? 0 : amountFromUser;
    
    if (amountFromUser > 10) {
        alert("Maximum 10 terméket vásárolhat!");
        return 0
    } else if (amountFromUser < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
        return 0
    } else {
        return calculatePrice(amountFromUser);
    }
}


let numericArray = [1, 4, 67, 3, 24, 235];
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}


let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);


let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra Sonka"
];

let toppingSelect = document.querySelector("#topInput");
let index = 0;

while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}