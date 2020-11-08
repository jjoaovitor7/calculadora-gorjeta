const tipsForm = document.querySelector(".tips-form");

function calculateTip (event) {
    event.preventDefault();

    let bill = document.getElementById("bill").value;
    let serviceQuality = document.getElementById("service-quality").value;
    let numPeople = document.getElementById("people").value;

    if(bill == '' | serviceQuality == 0){
        alert("Por favor, preencha os valores.");
        return;
    }

    if(numPeople == '' | numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let total = (bill * serviceQuality) / numPeople;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = "Gorjeta total: R$" + total;
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("each").innerHTML = "cada";
}

function clearFields (event) {
    document.getElementById("bill").value = null;
    document.getElementById("service-quality").value = 0;
    document.getElementById("people").value = null;
    document.getElementById("total-tip").innerHTML = '<span id="tip"></span> <span id="each" style="display: none;"></span>';
}

document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

tipsForm.addEventListener("submit", calculateTip);

document.getElementById("btn-limpar").addEventListener("click", clearFields);