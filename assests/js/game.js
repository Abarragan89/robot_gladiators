
// Game States 
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
// ///////////////////////////////////////////////////////////// //
// Make player (This should eventually be a object or class.)
let playerName = prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

//Make enemy (This should eventually be a object or class.)
let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttact = 12;

const fight = function (enemyName) {
    alert("Welcome to Robot Gladiators!");
    let promptFight = prompt("Would you like to FIGHT or SKIP this fight? enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of 'playerAttack from the value of 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;

        // Log a resluting message to the console so we know that it worked. 
        alert(playerName + " attacked " + enemyName + ".")
        //check enemy's health
        if (enemyHealth === 0) {
            alert(enemyName + " has died");
        } else {
            alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        //Subtract the value of 'enemyAttack from the value of playerHealth
        playerHealth = playerHealth - enemyAttact;
        alert(enemyName + " attacked " + playerName + ".")
        //Check users health
        if (playerHealth <= 0) {
            alert(playerName + " has died!")
        } else {
            alert(playerName + " still has " + playerHealth + " health left.");
        }
        // Subtract the value of 'playerAttack from the value of 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;

        // Log a resluting message to the console so we know that it worked. 
        alert(playerName + " attacked " + enemyName + ".")
        //check enemy's health
        if (enemyHealth === 0) {
            alert(enemyName + " has died");
        } else {
            alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        //Subtract the value of 'enemyAttack from the value of playerHealth
        playerHealth = playerHealth - enemyAttact;
        alert(enemyName + " attacked " + playerName + ".")
        //Check users health
        if (playerHealth <= 0) {
            alert(playerName + " has died!")
        } else {
            alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip 
        let confirmSkip = confirm("Are you sure you'd like to quit?")
        //if yes(true), leave fight
        if (confirmSkip) {
            alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from the playerMoney for skipping
        playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    } else {
        alert("You need to choose a valid option. Try again!")
    }
}

for (let i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}