require("config")
require("functions")
require("helpers")

// enable wifi scanning
run('set wifi.interface ' + wifiInterface);
run('wifi.recon on');
// register for wifi.client.probe events
onEvent('wifi.client.probe', onClientProbe);

// register for wifi.client.new events
onEvent('wifi.client.new', onNewClient);

// register for wifi.ap.new events
onEvent('wifi.ap.new', onNewAP);

run('events.ignore sys.log');
run('events.ignore wifi.client.new');
run('events.ignore wifi.ap.new');
run('events.ignore wifi.client.probe');
run('clear');
log("Packet Peeking Systems Loaded. \nLets see...\n\t\t= HuDat! =\n");
