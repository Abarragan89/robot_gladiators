let playerName = prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth)

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttact = 12;

const fight = function () {
    alert("Welcome to Robot Gladiators!");
    // Subtract the value of 'playerAttack from the value of 'enemyHealth'
    enemyHealth = enemyHealth - playerAttack;

    // Log a resluting message to the console so we know that it worked. 
    console.log(playerName + " attacked " + enemyName + ". " + 
    enemyName + " now has " + enemyHealth + " health remaining.")
    //check enemy's health
    if (enemyHealth === 0) {
        alert(enemyName + " has died");
    } else {
        alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    //Subtract the value of 'enemyAttack from the value of playerHealth
    playerHealth = playerHealth - enemyAttact;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
    //Check users health
    if (playerHealth <= 0) {
        alert(playerName + " has died!")
    } else {
        alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();



