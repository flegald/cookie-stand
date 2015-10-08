function consoleSee (form) {
    var formLocate = form.locate.value;
    var formMin = form.Min.value;
    var formMax = form.Max.value;
    var formAvg = form.Avg.value;
    console.log("Location: " + formLocate + " Min cust/hour: " + formMin + " Max cust/hour: " + formMax + " Avg cust/hour: " + formAvg)
}	


var Cookiestand = function(place, minCustHour, maxCustHour, avgCookieCust, html) {
	this.place = place || document.getElementById('form1').value;
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
	this.cookArray = [this.totalCooksHour(), this.totalCooksHour(), this.totalCooksHour(), this.totalCooksHour(), this.totalCooksHour(), this.totalCooksHour(), this.totalCooksHour(), this.totalCooksHour(), this.total];

	this.makeUL = function(){
		for (var i = 0; i < this.cookArray.length; i++){
			var cooklist = document.getElementById(this.html);
			var item = document.createElement('td');
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




