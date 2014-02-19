console.log('Heist');

var Robber = {
	name: "JewelThief",
	guns: 2,
	crowbar: 1,
	rope: 1,
	jewels: ["diamonds", "saphires", "rubys"],

	robs: function(person){
		person.robbed = true
		console.log ('Jackpot!')
	}

};
 
var Richguy = {
	 name: "Thurston Howell the 3rd",	 
	 monocle: 2,
	 hat: 1,
	 snooty: true,
	 robbed: false,
	 vault: ["cash", "coins", "diamonds", "gold"]



};

var Richgurl = {
	name: "Mrs. Howell",
	legs: 2,
	shoes: true,
	purse: ["credit cards", "jewelry", "makeup"],
	robbed: false,

};
