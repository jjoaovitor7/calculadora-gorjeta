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
    document.getElementById("tip").innerHTML = total;
    document.getElementById("total-tip").style.display = "block";
}

document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

document.querySelector(".tips-form").addEventListener("submit", calculateTip);