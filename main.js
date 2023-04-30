let dieRolls = [];
let total = 0;

document.getElementById("rollDice").addEventListener('click', function() {
    let numOfDice = document.getElementById("numberOfDice").value;
    console.log(numOfDice);
    dieRolls = [];
    for (let i = 0; i < numOfDice; i++) {
      let rollResult = Math.ceil(Math.random() * 6);
      dieRolls.push(rollResult);
      total += rollResult;
      // document.getElementById("showAllRows").innerHTML = `<li>${rollResult}</li>`;
      console.log(dieRolls);
    }
    document.getElementById("total").innerHTML = total;
});

document.getElementById("showAllRows").addEventListener('click', function() {
  for (let i = 0; i < dieRolls; i++) {
    console.log(dieRolls);
    document.getElementById("listOfAllRows").innerHTML = `<li>${dieRolls[i]}</li>`;
  }
})