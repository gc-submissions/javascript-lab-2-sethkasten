"use strict";

// 1

const randomDamage = () => Math.floor(Math.random() * 10) + 1;

// 2

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
};

// 3

const attackPlayer = function (health) {
  return health - randomDamage();
};

// 4

const logHealth = (player, health) => {
  return console.log(`${player} health: ${health}`);
};

// 5

const logDeath = (winner, loser) => {
  return console.log(`${winner} defeated ${loser}`);
};

// 6

const isDead = (health) => health <= 0;

// 7

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

// 8
fight("Mitch", "Adam", 100, 100);
