#!/bin/bash --login

while true; do
	if [ "$1" = 'printlogs' ]; then
		node build/index.js |& tee -a /data/mains-io.log
	else
		node build/index.js &>> /data/mains-io.log
	fi
done
