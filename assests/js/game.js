
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
            let promptFight = prompt("Would you like to FIGHT " + enemyName + " or SKIP this fight? enter 'FIGHT' or 'SKIP' to choose.");
            if (promptFight === "fight" || promptFight === "FIGHT") {
                // Subtract the value of 'playerAttack from the value of 'enemyHealth'
            while (enemyHealth > 0 && playerHealth > 0) {
                enemyHealth = enemyHealth - playerAttack;

                // Log a resluting message to the console so we know that it worked. 
                alert(playerName + " attacked " + enemyName + "." + enemyName + " still has " + enemyHealth + " health left.")
                //check enemy's health
                if (enemyHealth === 0) {
                    alert(enemyName + " has died");
                    break;
                }
                //Subtract the value of 'enemyAttack from the value of playerHealth
                playerHealth = playerHealth - enemyAttact;
                alert(enemyName + " attacked " + playerName + "." + playerName + " still has " + playerHealth + " health left.")
                //Check users health
                if (playerHealth <= 0) {
                    alert(playerName + " has died!")
                }
            }
        } else if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm player wants to skip 
            let confirmSkip = confirm("Are you sure you'd like to quit?")
            //if yes(true), leave fight
            if (confirmSkip) {
                alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from the playerMoney for skipping
                playerMoney = playerMoney - 10;
                return;
                
            } else {
                fight();
            }
        } else {
            alert("You need to choose a valid option. Try again!")
            return;
        }
    }   

const startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (let i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        } else {
            alert("you have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

const endGame = function() {
    if (playerHealth > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerMoney + "." );
    } else {
        alert("You've lost your robot in battle.")
    }
    let playAgainConfirm = confirm("Would you like to play again?")

    if(playAgainConfirm) {
        startGame();
    } else {
        alert("Thank you for playing Robot Gladiators! Come back again soon!");
    }
}

startGame();
