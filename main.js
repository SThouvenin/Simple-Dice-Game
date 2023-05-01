let dieRolls = [];
let total = 0;

document.getElementById("rollDice").addEventListener('click', function() {
    let numOfDice = document.getElementById("numberOfDice").value;
    console.log(numOfDice);
    // dieRolls = [];
    for (let i = 0; i < numOfDice; i++) {
      let rollResult = Math.ceil(Math.random() * 6);
      dieRolls.push(rollResult);
      total += rollResult;
      
    }
    console.log(dieRolls);
    document.getElementById("total").innerHTML = total;
});

document.getElementById("showAllRollsButton").addEventListener('click', function() {
    console.log("HELLO!"); 
    let listOfRolls = document.getElementById("listOfAllRolls");
    for (let j = 0; j < dieRolls.length; j++) {
       console.log(dieRolls);
        listOfRolls.innerHTML += `<li>${dieRolls[j]}</li>`;
    }

});