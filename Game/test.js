var combat = true;
//loop control
function Character(hp) {
  this.hp = hp;
};
var Player = new Character(100);
var Enemy = new Character(100);
//player and enemy constructor
function randomBool() {
  return Math.floor(Math.random() * 2);
};

function damage() {
  return Math.floor(Math.random() * 100 + 1);
};
var youDmgTotal = 0;
var enemyDmgTotal = 0;
//placeholders
while (combat) {
  var rollHit = randomBool();
  var rollDmg = damage();
  var rollCrit = damage();
  //equations for Player damage & chance to hit
  if (rollHit) {
    if (rollCrit >= 90) {
      rollDmg *= Math.floor(1.2);
      document.getElementById("gameBox").innerHTML += 'Critical hit! You hit the enemy for' + ' ' + rollDmg + 'hp.' + '<br />';
    } else {
      document.getElementById("gameBox").innerHTML += 'You hit the enemy for' + ' ' + rollDmg + 'hp.' + '<br />';
    };
    youDmgTotal += rollDmg;
    //console.log('Player total:' + ' ' + youDmgTotal + 'hp.');
    if (youDmgTotal >= Enemy.hp) {
      document.getElementById("gameBox").innerHTML += 'You killed the enemy.' + '<br />';
      combat = false;
    };
  } else {
    var rollHit = randomBool();
    var rollDmg = damage();
    var rollCrit = damage();
    //equations for Enemy damage & chance to hit
    if (rollHit) {
      if (rollCrit >= 95) {
        rollDmg *= Math.floor(1.2);
        document.getElementById("gameBox").innerHTML += 'Critical hit! The enemy hits you for' + ' ' + rollDmg + 'hp.' + '<br />';
      } else {
        document.getElementById("gameBox").innerHTML += 'The enemy hits you for' + ' ' + rollDmg + 'hp.' + '<br />';
      };
      enemyDmgTotal += rollDmg;
      //console.log('Enemy total:' + ' ' + enemyDmgTotal + 'hp.');
      if (enemyDmgTotal >= Player.hp) {
        document.getElementById("gameBox").innerHTML += 'The enemy kills you.' + '<br />';
        combat = false;
      };
    };
  };
};