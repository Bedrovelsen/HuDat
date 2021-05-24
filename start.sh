#!/bin/bash
screen -L -dmS bcap
screen -r bcap -X stuff 'sudo bettercap --iface wlan1 --script main.js\n'
