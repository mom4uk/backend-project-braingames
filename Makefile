install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish: 
	publish --dry-run
lint:
	npx eslint src/bin/brain-games.js