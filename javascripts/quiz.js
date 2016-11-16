"use strict";
var Robot = (function (oldRobot){
	oldRobot.Fighters= {};

	oldRobot.Fighters.Standard = function(name){
	this.exterior = "metal";
	this.powerSource = "external battery";
	this.control = "remote";
	this.setHealth = function () {
		return Math.floor(Math.random() * (120 - 80 +1)) + 80;
		};
	this.setDamage = function() {
		return Math.floor(Math.random() * (35 - 15 +1)) + 15;
		}; 
	this.setWeapon = function(item) {
		this.weapon = item;
	};
};
	return oldRobot;
})(Robot || {});

