#!/bin/sh
while ! nc -z financial-app 8080; do
  echo "Waiting for backend..."
  sleep 2
done

nginx -g 'daemon off;'