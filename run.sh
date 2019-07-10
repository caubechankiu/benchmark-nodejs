#!/usr/bin/env bash

echo 'Library:' $1
node $1 &
pid=$!

echo '-----------------------' >> $1_output.txt
echo $1 >> $1_output.txt
echo '-----------------------' >> $1_output.txt

sleep 2

./wrk/wrk 'http://localhost:3000' \
  -d 10 \
  -c 1024 \
  -t 8 >> $1_output.txt

kill $pid