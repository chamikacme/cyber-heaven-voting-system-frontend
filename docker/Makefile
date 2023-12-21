#!/usr/bin/make

SHELL = /bin/sh

UID := $(shell id -u)
GID := $(shell id -g)

up:
	UID=${UID} GID=${GID} docker compose -f docker-compose.yml up --build -d

up-f:
	UID=${UID} GID=${GID} docker compose -f docker-compose.yml up --build 

shell:
	UID=${UID} GID=${GID} docker compose -f docker-compose.yml exec -u ${UID}:${GID} frontend-app sh

down:
	UID=${UID} GID=${GID} docker compose down