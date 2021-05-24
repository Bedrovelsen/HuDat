function sendMessage(message) {
	log(message);
}

function calcDistance(signal) {
	var minSig = -50.0;
	var fspl = 29.5;
	var distance = (minSig + signal) / fspl / -1;
	return distance.toFixed(2);
}

function spaceMeters(dist) {
	var i = dist * 100;
	var s = '';
	for (i; i >= 100; i -= 25) {
		s += '~._.';
	}
	var fine = i;
	for (fine;fine>=0;fine -=10) {
		s += '.';
	}
	return s;
}
