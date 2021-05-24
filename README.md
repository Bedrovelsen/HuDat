This bettercap session script performs the following tasks:
listens for wifi probe, new access point and client joining access point events and prints the approximate distance in Meters (in some direction from device's wifi interface running HuDat) to the screen in a visually descriptive way as a first step towards making some perimeter monitoring / autp-doorbell tool.

Requires script flag added in bettercap 2.31+

Distances are speculative and angle of direction unknown, and free space path loss very speculatve for now. 


```bash
$> chmod +x hudat.sh start.sh && ./hudat.sh

taking wlan1 down
turning wlan1 into a spy
brinigng wlan1 back up
DONE
Network MAGIC spells cast.
...HUDAT!..

taking wlan1 down
turning wlan1 into a spy
brinigng wlan1 back up
DONE
Network MAGIC spells cast.

...HUDAT!..

2021-05-24 10:21:48 inf 
        [88:9e:68:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._..........4.10M
(Detected <hidden>)


2021-05-24 10:21:48 inf 
        [d4:b2:7a:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._..........2.88M
(Detected )


2021-05-24 10:21:48 inf 
        [d4:b2:7a:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._..........2.81M
(Detected xxxxxxxxN)


2021-05-24 10:21:50 inf 
        [4c:8b:30:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._..........3.83M
(Detected xxxxxxxxc-2974-2.4G)


2021-05-24 10:21:50 inf 
        [f8:2c:18:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.........4.03M
(Detected xxxxxxxx600)


2021-05-24 10:21:51 inf 
        [88:9e:68:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.........4.03M
(Detected xxxxxxxx)


2021-05-24 10:21:51 inf 
        [88:9e:68:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.........4.03M
(Detected <hidden>)


2021-05-24 10:21:51 inf 
        [88:9e:68:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.........4.03M
(Detected <hidden>)


2021-05-24 10:21:51 inf 
        [0c:b6:d2:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._...........4.24M
(Detected xxxxxxxx-EXT)


2021-05-24 10:21:51 inf 
        [88:9e:68:XX:XX:XX]~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._..........4.10M
(Probing for Caxxxxx)


2021-05-24 10:21:53 inf 
        [d4:b2:7a:XX:XX:XX] ~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._..........4.10M
(Detected xxxxxxxx57)


2021-05-24 10:22:02 inf 
        [88:9e:68:XX:XX:XX]~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._..........4.10M
(Probing for Caxxxxx)


2021-05-24 10:22:03 inf 
        [88:9e:68:XX:XX:XX]~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.........4.03M
(Probing for Caxxxxx)


2021-05-24 10:22:03 inf 
        [88:9e:68:XX:XX:XX]~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._.~._..........4.10M
(Probing for Caxxxxx)
``````
