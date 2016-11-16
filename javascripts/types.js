"use strict";

Robot = (function(oldRobot){

	oldRobot.Fighters.Hexapod = function(){
		this.aerial = true;
		this.limbs = 6;
		this.range = "short distance";
		this.health = null;
		this.damage = null;
	};

	oldRobot.Fighters.Hexapod.prototype = new Robot.Fighters.Standard();

	oldRobot.Fighters.Hexapod.Phoenix = function(){
		this.name = "Phoenix";
		this.weapon = "Fire";
		this.image = "images/Phoenix.jpg";
	};
	oldRobot.Fighters.Hexapod.Phoenix.prototype = new oldRobot.Fighters.Hexapod();
	oldRobot.Fighters.Hexapod.Spider = function(){
		this.name = "Spider";
		this.weapon = "Net";
		this.image = "images/Spider.jpg";
	};
	oldRobot.Fighters.Hexapod.Spider.prototype = new oldRobot.Fighters.Hexapod();


	oldRobot.Fighters.Quadraped = function(){
		this.canClimb = true;
		this.limbs = 4;
		this.speed = "fast";
		this.health = null;
		this.damage = null;	
	};
	oldRobot.Fighters.Quadraped.prototype = new Robot.Fighters.Standard();

	oldRobot.Fighters.Quadraped.Lynx = function () {
		this.name = "Lynx";
		this.weapon = "Bite";
		this.image = "images/lynx.jpg";
	};
	oldRobot.Fighters.Quadraped.Lynx.prototype = new oldRobot.Fighters.Quadraped();
	oldRobot.Fighters.Quadraped.Arduino = function(){
		this.name = "Arduino";
		this.weapon = "Drill";
		this.image = "images/Arduino.jpg";
	};
	oldRobot.Fighters.Quadraped.Arduino.prototype = new oldRobot.Fighters.Quadraped();


	oldRobot.Fighters.Biped = function(){
		this.groundBased = true;
		this.limbs = 2;
		this.intelligence = "humanlike";
		this.health = null;
		this.damage = null;
	};	
	
	oldRobot.Fighters.Biped.prototype = new Robot.Fighters.Standard();
	oldRobot.Fighters.Biped.Alpha5 = function(){
		this.name = "Alpha 5";
		this.weapon = "Hammer";
		this.power = "shape-shifting";
		this.image = "images/Alpha5.jpg";
	};
	oldRobot.Fighters.Biped.Alpha5.prototype = new oldRobot.Fighters.Biped();
	oldRobot.Fighters.Biped.JohnnyBravo = function(){
		this.name = "JonB";
		this.weapon = "laser";
		this.image = "images/JohnnyBravo.jpg";
	};
	oldRobot.Fighters.Biped.JohnnyBravo.prototype = new oldRobot.Fighters.Biped();

	return oldRobot;
})(Robot || {});




