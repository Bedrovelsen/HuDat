require('helpers.js');
//run('wifi.client.probe.ap.filter  \"44:d8:78:a9:46:82\"');
run('wifi.recon on');
run('events.ignore sys.log');
run('set events.stream.output eventsoutz');

onEvent(function (event) {
	if (event.tag != 'sys.log') {
		if (event.tag == 'wifi.client.probe') {
			var dist = calcDistance(event.data.rssi);
			var space = spaceMeters(dist);
			if ((event.data.essid != 'Haylees IPhone') && (event.data.essid != 'Carbonel')) {
				log('\n\t['+event.data.mac + ']'+space+dist + 'M\n(Probing for ' + event.data.essid +')\n\n');

			}
		} else if (event.tag == 'wifi.ap.new') {
			var dist = calcDistance(event.data.rssi);
			var space = spaceMeters(dist);
			log('\n\t['+ event.data.mac + '] ' + space +dist + 'M\n(Detected ' + event.data.hostname + ')\n\n');
		} 
	}
});
