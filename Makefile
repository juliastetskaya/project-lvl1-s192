#Makefile

install:
	npm install 

start:
	npm run babel-node -- /usr/src/bin/brain-games.js 

publish:
	npm publish 
