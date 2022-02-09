const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-given');
const labelCashGiven = document.querySelector('#label-cash-given');
const nextButton = document.querySelector('#next-btn');
const checkButton = document.querySelector('#check-btn');
const resetButton = document.querySelector('#reset-btn');
const errorMessage = document.querySelector("#error-message");
const amountReturn = document.querySelector("#amount-return");
const numberOfNotes = document.querySelectorAll(".noOfNotes");

// const numberOfNotes1 = document.querySelectorAll(".noOfNotes-");

const table = document.querySelector("#table-");

// const edit = document.querySelector("#edit");
// const editDone = document.querySelector("#edit-done");

// const tableEdited = document.querySelector("#table-edited");
// const n1 = document.querySelector("#n1");
// const n2 = document.querySelector("#n2");
// const n3 = document.querySelector("#n3");
// const n4 = document.querySelector("#n4");
// const n5 = document.querySelector("#n5");
// const n6 = document.querySelector("#n6");





const availableNotes = [2000, 500, 100, 50, 20, 10, 1];

// const editedAvailableNotes = [n1.value, n2.value, n3.value, n4.value, n5.value, n6.value];


cashAmount.style.display = "none";
labelCashGiven.style.display = "none";
checkButton.style.display = "none";
table.style.display = "none";

// edit.style.display = "none";
// tableEdited.style.display = "none";






nextButton.addEventListener('click', function next() {
    errorMessage.style.display = "none";

    if (billAmount.value > 0) {
        cashAmount.style.display = "block";
        labelCashGiven.style.display = "block";
        checkButton.style.display = "block";
    } else {

        errorMessage.style.display = "block";

        errorMessage.innerText = "The bill amount should be greater than 0"

    }
})

checkButton.addEventListener('click',

    function checkBillAndCashAmount() {
        errorMessage.style.display = "none";
        amountReturn.style.display = "none";
        if (Number(cashAmount.value > 0)) {


            if (Number(cashAmount.value) >= Number(billAmount.value)) {
                table.style.display = "block";
                amountReturn.style.display = "block";
                const amountToBeReturn = cashAmount.value - billAmount.value;
                amountReturn.innerText = "Rs." + amountToBeReturn;
                calculateChange(amountToBeReturn);

            } else {
                errorMessage.style.display = "block";
                // edit.style.display = "none";
                table.style.display = "none";
                errorMessage.innerText = "The cash given must be equal to or more than bill amount."
            }

        } else {
            errorMessage.style.display = "block";
            // edit.style.display = "none";
            table.style.display = "none";
            errorMessage.innerText = "The cash amount must be postive"
        }
    })

function calculateChange(amountToBeReturn) {

    for (let i = 0; i < availableNotes.length; i++) {

        const noOfNotes = Math.trunc(
            amountToBeReturn / availableNotes[i]
        );
        amountToBeReturn %= availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes;

    }
}

resetButton.addEventListener('click', function reset() {
    cashAmount.style.display = "none";
    labelCashGiven.style.display = "none";
    checkButton.style.display = "none";
    table.style.display = "none";
    amountReturn.style.display = "none";
    errorMessage.style.display = "none";
    // edit.style.display = "none";
    billAmount.value = "null";
    cashAmount.value = "null";

})

// edit.addEventListener('click', function edit() {
//     tableEdited.style.display = "block";
//     const amountToBeReturnEdited = cashAmount.value - billAmount.value;
// })




// editDone.addEventListener('click', function calculateChangeEdited(amountToBeReturnEdited) {

//     for (let i = 0; i < editedAvailableNotes.length; i++) {

//         const noOfNotes = Math.trunc(
//             amountToBeReturnEdited / editedAvailableNotes[i]
//         );
//         amountToBeReturnEdited %= editedAvailableNotes[i];
//         numberOfNotes1[i].innerText = noOfNotes;

//     }
// })