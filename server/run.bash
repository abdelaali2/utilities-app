#!/bin/bash
server/mvnw spring-boot:run -DskipTests -Dlicense.skip=true -Dspring-boot.run.jvmArguments="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" &
while true; do
  inotifywait -e modify,create,delete,move -r server/src/ && server/mvnw compile
done