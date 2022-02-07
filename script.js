console.log('hello')
const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-given');
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const amountReturn = document.querySelector("#amount-return");
const numberOfNotes = document.querySelectorAll(".noOfNotes"),

    const availableNotes = [2000, 500, 100, 50, 20, 10, 1];

checkButton.addEventListener("click", checkBillAndCashAmount);

function checkBillAndCashAmount() {
    errorMessage.style.display = "none";
    amountReturn.style.display = "none";

    if (billAmount.value > 0) {
        if (cashAmount.value >= billAmount.value) {

            const amountToBeReturn = cashAmount.value - billAmount.value;
            amountReturn.style.display = "block";

            amountReturn.innerText = amountToBeReturn;

            calculateChange(amountToBeReturn);

        } else {

            errorMessage.style.display = "block";

            errorMessage.innerText = "The cash given must be equal to or more than bill amount."

        }

    } else {
        errorMessage.style.display = "block";

        errorMessage.innerText = "The bill amount should be greater than 0"
    }
}

function calculateChange(amountToBeReturn) {

    for (let i = 0; i < availableNotes.length; i++) {

        const noOfNotes = Math.trunc(
            amountToBeReturn / availableNotes[i]
        );
        amountToBeReturn %= availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;

    }

}