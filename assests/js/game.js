
// Game States 
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
// ///////////////////////////////////////////////////////////// //
// Make player (This should eventually be a object or class.)
const randomNumber = function (min, max) {
    let value = Math.floor(Math.random() * (max - min + 1) + min)
    return value;
}
const getPlayerName = function () {
    let name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
};
const playerInfo = {
    name: getPlayerName(),
    health: 150,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 150;
        this.money = 10;
        this.attack = 10
    },
    refillHealth: function () {
        if (this.money >= 7) {
            alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            alert("You don't have enough money!");
        }
    }
};

//Make enemies (This should eventually be a object or class.)
enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

const fightOrSkip = function () {
    //ask player if they'd like to fight or skip
    let promptFight = prompt("Would you like to FIGHT or SKIP this fight? enter 'FIGHT' or 'SKIP' to choose.");
    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip") {
        //Confirm player wants to skip
        let confirmSkip = confirm("Are you sure you want to quit?")
        //if yes (true), leave fight
        if (confirmSkip) {
            alert(playerInfo.name + " has decided to skip this fight.  Goodbye!")
            //subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    } else if (promptFight === "fight") {
        return false;
    }
    fightOrSkip();
}

const fight = function (enemy) {
    let isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    if (fightOrSkip()) {
        // if true, leave fight by breaking loop
    }
    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);

            // Log a resluting message to the console so we know that it worked. 
            alert(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " still has " + enemy.health + " health left.")
            //check enemy's health
            if (enemy.health <= 0) {
                alert(enemy.name + " has died");
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            //player gets attacked first
        } else {
            //Subtract the value of 'enemy.attack from the value of playerInfo.health
            damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            alert(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " still has " + playerInfo.health + " health left.")
            //Check users health
            if (playerInfo.health <= 0) {
                alert(playerInfo.name + " has died!")
            }
        }
        isPlayerTurn = !isPlayerTurn;
    }
}
const startGame = function () {
    // reset player stats
    playerInfo.reset();

    for (let i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            alert("Welcome to Robot Gladiators! Round " + (i + 1));
            pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                let storeConfirm = confirm("The fight is over. Visit the store before the next round?")
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();

};

const endGame = function () {
    alert("The game has ended. Let's see how you did.")
    let highScore = localStorage.getItem("highscore_gladiators");
    if (playerInfo.health > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
        if (!highScore || playerInfo.money > highScore ){
            alert("Congrats! You set a new high score");
            localStorage.setItem("highscore_gladiators", playerInfo.money);
            alert(playerInfo.name + " now has the high score of " + playerInfo.money  + "!")
        }
    } else {
        alert("You've lost your robot in battle.")
        alert(playerInfo.name + " did not beat the high score of " + highScore + ".")
    }
    let playAgainConfirm = confirm("Would you like to play again?")
    if (playAgainConfirm) {
        startGame();
    } else {
        alert("Thank you for playing Robot Gladiators! Come back again soon!");
    }
}

const shop = function () {
    let shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, 3 to LEAVE.")
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
        case 3:
            alert("Leaving the store.");
            //do nothing, so function will end
            break;
        default:
            alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
}
debugger;
startGame();
