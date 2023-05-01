let dieRolls = [];
let total = 0;

document.getElementById("rollDice").addEventListener('click', function() {
    let numOfDice = document.getElementById("numberOfDice").value;
    dieRolls = [];
    total = 0;
    
    for (let i = 0; i < numOfDice; i++) {
      let rollResult = Math.ceil(Math.random() * 6);
      dieRolls.push(rollResult);
      total += rollResult;
    }

    document.getElementById("total").innerHTML = total;
});

document.getElementById("showAllRollsButton").addEventListener('click', function() {
    let listOfRolls = document.getElementById("listOfAllRolls");
    listOfRolls.innerHTML = "";
    for (let j = 0; j < dieRolls.length; j++) {
        listOfRolls.innerHTML += `<li>${dieRolls[j]}</li>`;
    }
});