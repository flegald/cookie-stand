var pikePlace = {
	location: "Pike Place Market",
	minCustHour: 17,
	maxCustHour: 88,
	avgCookieCust: 5.2,
	pTotal: 0,
	randCustHour:  function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	totalCooksHour: function(){
		var I = Math.floor(this.randCustHour(17, 88) * this.avgCookieCust);
		this.pTotal += I;
		return I;
}
}

function makepUL(array){
	for (var i = 0; i < array.length; i++){
		var cooklist = document.getElementById("pike");
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(array[i]));
		cooklist.appendChild(item);
	}

	return cooklist;
}
	
var pikeList = ["10am: " + pikePlace.totalCooksHour() + " cookies", "11am: " + pikePlace.totalCooksHour() + " cookies", "12pm: " + pikePlace.totalCooksHour() + " cookies", "1pm: " + pikePlace.totalCooksHour() + " cookies", "2pm: " + pikePlace.totalCooksHour() + " cookies", "3pm: " + pikePlace.totalCooksHour() + " cookies", "4pm: " + pikePlace.totalCooksHour() + " cookies", "5pm: " + pikePlace.totalCooksHour() + " cookies", "Total: " + pikePlace.pTotal];
makepUL(pikeList);

var seaTac = {
	location: "Sea Tac Airport",
	minCustHour: 6,
	maxCustHour: 44,
	avgCookieCust: 1.2,
	seaTotal: 0,
	randCustHour:  function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	totalCooksHour: function(){
	 var I = Math.floor(this.randCustHour(6, 44) * this.avgCookieCust);
	 this.seaTotal += I;
	 return I;
}
}

function makeseaUL(array){
	for (var i = 0; i < array.length; i++){
		var cooklist = document.getElementById("sea");
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(array[i]));
		cooklist.appendChild(item);
	}

	return cooklist;
}

var seaList = ["10am: " + seaTac.totalCooksHour() + " cookies", "11am: " + seaTac.totalCooksHour() + " cookies", "12pm: " + seaTac.totalCooksHour() + " cookies", "1pm: " + seaTac.totalCooksHour() + " cookies", "2pm: " + seaTac.totalCooksHour() + " cookies", "3pm: " + seaTac.totalCooksHour() + " cookies", "4pm: " + seaTac.totalCooksHour() + " cookies", "5pm: " + seaTac.totalCooksHour() + " cookies", "Total: " + seaTac.seaTotal];
makeseaUL(seaList);

var southMall = {
	location: "Southcenter Mall",
	minCustHour: 11,
	maxCustHour: 38,
	avgCookieCust: 1.8,
	sTotal: 0,
	randCustHour:  function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	totalCooksHour: function(){
		var I = Math.floor(this.randCustHour(11, 38) * this.avgCookieCust);
		this.sTotal += I;
		return I;
}
}

function makemallUL(array){
	for (var i = 0; i < array.length; i++){
		var cooklist = document.getElementById("south");
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(array[i]));
		cooklist.appendChild(item);
	}

	return cooklist;
}

var southList = ["10am: " + southMall.totalCooksHour() + " cookies", "11am: " + southMall.totalCooksHour() + " cookies", "12pm: " + southMall.totalCooksHour() + " cookies", "1pm: " + southMall.totalCooksHour() + " cookies", "2pm: " + southMall.totalCooksHour() + " cookies", "3pm: " + southMall.totalCooksHour() + " cookies", "4pm: " + southMall.totalCooksHour() + " cookies", "5pm: " + southMall.totalCooksHour() + " cookies", "Total: " + southMall.sTotal];
makemallUL(southList);

var bSquare = {
	location: "Bellevue Square",
	minCustHour: 20,
	maxCustHour: 48,
	avgCookieCust: 3.3,
	bTotal: 0,
	randCustHour:  function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	totalCooksHour: function(){
		var I = Math.floor(this.randCustHour(20, 48) * this.avgCookieCust);
		this.bTotal += I;
		return I;
	}
}

function makebUL(array){
	for (var i = 0; i < array.length; i++){
		var cooklist = document.getElementById("square");
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(array[i]));
		cooklist.appendChild(item);
	}

	return cooklist;
}

var squareList = ["10am: " + bSquare.totalCooksHour() + " cookies", "11am: " + bSquare.totalCooksHour() + " cookies", "12pm: " + bSquare.totalCooksHour() + " cookies", "1pm: " + bSquare.totalCooksHour() + " cookies", "2pm: " + bSquare.totalCooksHour() + " cookies", "3pm: " + bSquare.totalCooksHour() + " cookies", "4pm: " + bSquare.totalCooksHour() + " cookies", "5pm: " + bSquare.totalCooksHour() + " cookies", "Total: " + bSquare.bTotal];
makebUL(squareList);

var alki = {
	location: "Alki",
	minCustHour: 3,
	maxCustHour: 24,
	avgCookieCust: 2.6,
	aTotal: 0, 
	randCustHour:  function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	totalCooksHour: function(){
		var I = Math.floor(this.randCustHour(3, 24) * this.avgCookieCust);
		this.aTotal += I;
		return I; 
	}
}


function makeaUL(array){
	for (var i = 0; i < array.length; i++){
		var cooklist = document.getElementById("alki");
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(array[i]));
		cooklist.appendChild(item);
	}

	return cooklist;
}

var alkiList = ["10am: " + alki.totalCooksHour() + " cookies", "11am: " + alki.totalCooksHour() + " cookies", "12pm: " + alki.totalCooksHour() + " cookies", "1pm: " + alki.totalCooksHour() + " cookies", "2pm: " + alki.totalCooksHour() + " cookies", "3pm: " + alki.totalCooksHour() + " cookies", "4pm: " + alki.totalCooksHour() + " cookies", "5pm: " + alki.totalCooksHour() + " cookies", "Total: " + alki.aTotal];
makeaUL(alkiList);


