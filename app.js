

var Cookiestand = function(place, minCustHour, maxCustHour, avgCookieCust) {
	this.place = place;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookieCust = avgCookieCust;
	this.total = 0;
	this.hour = [];
	
	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	}
	this.totalCooksHour = function () {
		var I = Math.floor(this.randCustHour() * this.avgCookieCust);
		this.hour.push(I);
		return I;
	};
	
	this.totalCooksDay = function (){
		var totalDay = 0;
		for (var i =0; i < 8; i++){
			totalDay += this.totalCooksHour();
		};
		this.total = totalDay;
		return totalDay;
		};
	
	this.totalCooksDay();

	this.makeTable = function(locate, array, dayTotal) {
		var loc = document.getElementById('table');
		var row = document.createElement('tr');
		row.appendChild(document.createTextNode(locate));
		loc.appendChild(row);

		for (var i = 0; i < array.length; i++){
			var data = document.createElement('td');
			data.appendChild(document.createTextNode(array[i]));
			row.appendChild(data);
		};

		var totalData = document.createElement('td');
		totalData.appendChild(document.createTextNode(dayTotal));
		row.appendChild(totalData);
	}
	this.makeTable(this.place, this.hour, this.total);
}


var pikePlace = new Cookiestand("Pike Place Market", 17, 88, 5.2);
var seaTac = new Cookiestand("Sea Tac Airport", 6, 44, 1.2);
var southMall = new Cookiestand("Southcenter Mall", 11, 38, 1.8);
var bSquare = new Cookiestand("Bellevue Square", 20, 48, 3.3);
var alki = new Cookiestand("Alki", 3, 24, 2.6);

var newAll = function(){
	locNew = document.getElementById('form1').value;
	minNew = parseInt(document.getElementById('form2').value);
	maxNew = parseInt(document.getElementById('form3').value);
	avgNew = parseInt(document.getElementById('form4').value);
 var poop = new Cookiestand(locNew, minNew, maxNew, avgNew);
	};

	var subButt = document.getElementById("button");

	subButt.addEventListener('click', newAll);


	



