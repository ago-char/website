#!/bin/bash
function usuage(){
    echo "Usuage: $0 <time> [s|m|h]"
}

if [[ $# -gt 2 ]]; then
    usuage
    exit
fi

time_unit="$2"
echo "$time_unit"
if [[ -z "$time_unit" ]] && [[ "$time_unit" != "m" ]] && [[ "$time_unit" != "h" ]]; then
    time_unit="s"
fi

# check if $1 is a number/float or not
time_N="$1"
if [[ "$time_N" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then
    echo "$time_N$time_unit"
    sleep "$time_N$time_unit"
        gnome-terminal -- bash -c "echo Press Ctrl+C to stop the alert; while true; do echo -n $'\a'; done"
else
    usuage
fi
