require('helpers.js');
run('wifi.recon on');
run('ble.recon on');
run('events.ignore sys.log');
run('set events.stream.output eventsoutz');

onEvent(function (event) {
	var last_seen = event.data.last_seen.split(".")[0];
	switch(event.tag) {
		case 'wifi.client.probe':
			var dist = calcDistance(event.data.rssi);
			var space = spaceMeters(dist);
			log('\n(Probing for ' + event.data.essid + ')\n\t[' + event.data.mac + ']' + space + dist + 'M\n\n');

			break;
		case 'wifi.ap.new':
			var dist = calcDistance(event.data.rssi);
			var space = spaceMeters(dist);
			log('\n(Detected ' + event.data.hostname + ')\n<last seen:'+last_seen+'>\n\t[' + event.data.mac + '] ' + space + dist + 'M\n\n');
			break;
		case 'ble.device.new':
			var dist = calcDistance(event.data.rssi);
			var space = spaceMeters(dist);
			log('(BLE ' + event.data.vendor + ')\n<last seen:'+last_seen+'>\n\t[' + event.data.mac + '] ' + space + dist + 'M\n\n');
			break;
		}
});
