function onNewAP(event) {
	var ap = event.data;
	var dist = calcDistance(ap.rssi);
	var sp = spaceMeters(dist);
	var message =
		'[NEWACCESSPOINT]\n' +
		 sp+ap.hostname +
		'[' +
		ap.mac +
		'] is now' +
		sp+dist+
		' Meters['+
		ap.rssi +
		'dbM] away\n';

	sendMessage(message);
}

function onNewClient(event) {
	var nc = event.data;
	var dist = calcDistance(nc.Client.rssi);
	var sp = spaceMeters(dist);
	var message =
		'[DEVICE->AP]\n' +
		sp+nc.Client.hostname +
		'[' +
		nc.Client.mac +
		'] just gained access to ' +
		nc.AP.hostname + '['+nc.AP.mac+']'+
		sp+dist+
		' Meters[' +
		nc.Client.rssi +
		'dbM] away\n';

	sendMessage(message);
}

function onClientProbe(event) {
	var cp = event.data;
	var dist = calcDistance(cp.rssi);
	var sp = spaceMeters(dist);
	var message =
		'[PROBE]\n' +
		sp+cp.hostname +
		'[' + cp.mac +
		']' +
		' - PROBE -> ' +
		cp.essid +
		sp+dist+
		' Meters['+cp.rssi+'dbM] away' +	
		'\n';

	sendMessage(message);
}
