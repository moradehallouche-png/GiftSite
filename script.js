let enteredPin = "";
const correctPin = "1001";


/* ========================= */
/* كلمة السر */
/* ========================= */

function pressKey(number) {

    if (enteredPin.length >= 4) {
        return;
    }

    enteredPin += number;

    updatePinDisplay();

    document.getElementById("error").textContent = "";
}


function deleteKey() {

    if (enteredPin.length === 0) {
        return;
    }

    enteredPin = enteredPin.slice(0, -1);

    updatePinDisplay();

    document.getElementById("error").textContent = "";
}


function updatePinDisplay() {

    const boxes = [

        document.getElementById("pin1"),
        document.getElementById("pin2"),
        document.getElementById("pin3"),
        document.getElementById("pin4")

    ];


    boxes.forEach(function(box, index) {

        if (index < enteredPin.length) {

            box.textContent = "♥";

            box.classList.add("active");

        } else {

            box.textContent = "";

            box.classList.remove("active");

        }

    });
}


function checkPin() {

    const error = document.getElementById("error");


    if (enteredPin.length !== 4) {

        error.textContent = "Enter 4 numbers";

        return;
    }


    if (enteredPin === correctPin) {

        error.textContent = "";

        document
            .getElementById("loginPage")
            .style.display = "none";


        document
            .getElementById("successPage")
            .classList.add("show");


    } else {

        error.textContent = "Wrong code ♥";

        enteredPin = "";

        updatePinDisplay();

    }

}


/* ========================= */
/* الصناديق الأربعة */
/* ========================= */

function openGift(number) {

    closeGift();


    if (number === 1) {

        document
            .getElementById("flowerModal")
            .classList.add("show");

    }


    if (number === 2) {

        document
            .getElementById("musicModal")
            .classList.add("show");

    }


    if (number === 3) {

        document
            .getElementById("letterModal")
            .classList.add("show");

    }


    if (number === 4) {

        document
            .getElementById("voiceModal")
            .classList.add("show");

    }

}


/* ========================= */
/* إغلاق النوافذ */
/* ========================= */

function closeGift() {

    document
        .getElementById("flowerModal")
        .classList.remove("show");


    document
        .getElementById("musicModal")
        .classList.remove("show");


    document
        .getElementById("letterModal")
        .classList.remove("show");


    document
        .getElementById("voiceModal")
        .classList.remove("show");

}

