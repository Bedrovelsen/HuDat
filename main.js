require('helpers.js');
run('wifi.recon on');
run('events.ignore sys.log');
run('set events.stream.output eventsoutz');

onEvent(function (event) {
	if (event.tag != 'sys.log') {
		if (event.tag == 'wifi.client.probe') {
			var dist = calcDistance(event.data.rssi);
			var space = spaceMeters(dist);
			log('\n\t[' + event.data.mac + ']' + space + dist + 'M\n(Probing for ' + event.data.essid + ')\n\n');
		} else if (event.tag == 'wifi.ap.new') {
			var dist = calcDistance(event.data.rssi);
			var space = spaceMeters(dist);
			log('\n\t[' + event.data.mac + '] ' + space + dist + 'M\n(Detected ' + event.data.hostname + ')\n\n');
		}
	}
});
