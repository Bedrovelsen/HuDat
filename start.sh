#!/bin/bash
screen -L -S -dmS bcap
screen -r bcap -X './hudat.sh'
screen -L -dmmS display
screen -r display -X 'tail -f screenlog.0'