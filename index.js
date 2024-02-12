const prompt = require("prompt-sync")();


const name = prompt("Please input your name: ");
    console.log(`\nWelcome ${name.toUpperCase()}\n`);

// Request for User's card number and store
let card = prompt("Enter your card number : ")

// Confirm ATM CardType
function confirmCardType(cardNumber) {

    let visaRegEx = /^4(\d).+$/
    let masterRegEx = /^5(\d).+$/
    
    if (visaRegEx.test(cardNumber) == true) {
        console.log(`This is a Visa Card`);
        return 1;
    } else if (masterRegEx.test(cardNumber) == true) {
        console.log(`This is a Master Card`) ;
        return 2;
    } else {
        console.log(`Unknown Card`) ;
        return 0;
    }

}

// Verify ATM Card Number
function verifyCardNumber (cardNumber, cardType) {
    
    let visaCardRegEx = /^4(\d){3}(\s?(\d){4}){3}$/
    let masterCardRegEx = /^5[1-5](\d){2}(\s?(\d){4}){3}$/

    if (cardType == '1') {
        console.log(`Card Verification : ${visaCardRegEx.test(cardNumber)}`);
    } 
    else if(cardType == '2') {
        console.log(`Card Verification : ${masterCardRegEx.test(cardNumber)}`) ;
    }

}

// Confirming Card Type
let cardType = confirmCardType(card);

// Verifying Atm Card Number
verifyCardNumber(card, cardType);