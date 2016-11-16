"use strict";

$("#battle").hide();

let robo = $("#userRobo");
let enemyRobo = $("#enemyRobo");
let userChar;
let enemyChar;
let userName = $("#userName").val();
let enemyName = $("#enemyName").val();

$("#start").click(function(){
	
	if(robo.val()==="Phoenix" || robo.val() === "Spider"){
		userChar = new Robot.Fighters.Hexapod[robo.val()]();
	} else if (robo.val() === "Lynx" || robo.val() === "Arduino"){
		userChar = new Robot.Fighters.Quadraped[robo.val()]();
	} else if (robo.val() === "Alpha5" || robo.val() === "JohnnyBravo"){
		userChar  = new Robot.Fighters.Biped[robo.val()]();
	}

	if(enemyRobo.val()==="Phoenix" || enemyRobo.val() === "Spider"){
		enemyChar = new Robot.Fighters.Hexapod[enemyRobo.val()]();
	} else if (enemyRobo.val() === "Lynx" || enemyRobo.val() === "Arduino"){
		enemyChar = new Robot.Fighters.Quadraped[enemyRobo.val()]();
	} else if (enemyRobo.val() === "Alpha5" || enemyRobo.val() === "JohnnyBravo"){
		enemyChar  = new Robot.Fighters.Biped[enemyRobo.val()]();
	}
	nextPage(userChar, enemyChar);

});


function nextPage(player, enemy) {
	$("#selection").hide();
	$("#battle").show();
	setStage(player, enemy);
}

function setStage (player, enemy) {
	userChar.health = userChar.setHealth();
	enemyChar.health = enemyChar.setHealth();
$("#userImage").append("<div class='col-md-offset-3 col-md-4 id='myChar'>" + "<p>" + userName + "</p>" + "<p>" + userChar.name + "</p>" + "<p> Weapon: " + userChar.weapon + "</p>" + "<p id='charHealth'>Health " + userChar.health + "</p>" + `<img src= ${userChar.image}>` + "</div>");
$("#enemyImage").append("<div class='col-md-4' id='enemy'>" + "<p>" + enemyName + "</p>" + "<p>" + enemyChar.name + "</p>" + "<p> Weapon: " + enemyChar.weapon + "</p>" + "<p id='health'>Health " + enemyChar.health + "</p>" + `<img src= ${enemyChar.image}>` + "</div>");	
}

$("#attack").click(calcDamage);

function calcDamage() {
	userChar.health = (userChar.health - enemyChar.setDamage());
	enemyChar.health = (enemyChar.health - userChar.setDamage());
	$('#charHealth').html(`Health: ${userChar.health}`);
	$('#health').html(enemyChar.health);

	if (userChar.health <= 0 || enemyChar.health <= 0){
		gameOver();
	} 
}

function gameOver() {
	$('#battle').hide();
	$('#fightOver').show();
	if(userChar.health < enemyChar.health){
		$("#gameOver").html(` ${enemyChar.name} beat ${userChar.name} using a ${enemyChar.weapon}`);
	} else if (enemyChar.health < userChar.health){
		$("#gameOver").html(` ${userChar.name} beat ${enemyChar.name} using a ${userChar.weapon}`);	
	}
}


