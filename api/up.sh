#!/bin/sh

for c in "go run $(find -name server)/main.go" "go run $(find -name gateway)/main.go"; do 
    ${c} &
done