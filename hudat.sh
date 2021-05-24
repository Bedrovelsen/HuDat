#!/bin/bash
sudo systemctl restart wpa_supplicant.service networking.service
sudo ifconfig wlan1 down
sudo iwconfig wlan1 mode managed
sudo ifconfig wlan1 up
sudo bettercap -iface wlan1 -script main.js