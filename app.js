var Cookiestand = function(place, minCustHour, maxCustHour, avgCookieCust, html) {
	this.place = place;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookieCust = avgCookieCust;
	this.total = 0;
	this.html = html;
	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	}
	this.totalCooksHour = function () {
		var I = Math.floor(this.randCustHour() * this.avgCookieCust);
		this.total += I;
		return I;
	}
	this.cookArray = ["10am: " + this.totalCooksHour() + " cookies", "11am: " + this.totalCooksHour() + " cookies", "12pm: " + this.totalCooksHour() + " cookies", "1pm: " + this.totalCooksHour() + " cookies", "2pm: " + this.totalCooksHour() + " cookies", "3pm: " + this.totalCooksHour() + " cookies", "4pm: " + this.totalCooksHour() + " cookies", "5pm: " + this.totalCooksHour() + " cookies", "Total: " + this.total];

	this.makeUL = function(){
		for (var i = 0; i < this.cookArray.length; i++){
			var cooklist = document.getElementById(this.html);
			console.log(cooklist);
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(this.cookArray[i]));
			cooklist.appendChild(item);
		}
	}
}

var pikePlace = new Cookiestand("Pike PLace Market", 17, 88, 5.2, "pike");
var seaTac = new Cookiestand("Sea Tac Airport", 6, 44, 1.2, "sea");
var southMall = new Cookiestand("Southcenter Mall", 11, 38, 1.8,"south");
var bSquare = new Cookiestand("Bellevue Square", 20, 48, 3.3, "square");
var alki = new Cookiestand("Alki", 3, 24, 2.6, "alki");

var allArray = [pikePlace.makeUL(), seaTac.makeUL(), southMall.makeUL(), bSquare.makeUL(), alki.makeUL()];

var runUL = function(){
	for (var i = 0; i < allArray.length; i++){
	allArray[i];
	}
}
//!!FOR LOOP IS FOR PRACTICE!!//
