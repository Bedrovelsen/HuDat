function sendMessage(message) {
    log(message);
}

function calcDistance(signal) {
	var minSig = -69.0;
	var fspl = 27.5;
	var distance = (((minSig + (signal)) / fspl) / -1);
	return distance.toFixed(2);
}

function spaceMeters(dist) {
	var i = dist*100;
	var s = "";
	for(i;i>=100;i-=10){
	 s += " ";	
	}
	return '\n'+s+' ';
}
