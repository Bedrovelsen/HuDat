function sendMessage(message) {
    log(message);
}

function calcDistance(signal) {
	var minSig = -55.0;
	var fspl = 30.5;
	var distance = (((minSig + (signal)) / fspl) / -1);
	return distance.toFixed(2);
}

function spaceMeters(dist) {
	var i = dist*100;
	var s = "";
	for(i;i>=0;i-=20){
	 s += "~._.";	
	}
	return s;
}
