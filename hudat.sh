#!/bin/bash
sudo systemctl restart wpa_supplicant.service networking.service && updown && echo 'Network MAGIC spells cast.' && echo  '...HUDAT!..'  && bash -c './start.sh' && tail -f screenlog.0
