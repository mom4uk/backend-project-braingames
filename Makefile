install:
	npm install
start:
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js
publish: 
	npm publish --dry-run
lint:
	npx eslint src/bin/brain-games.js
build:
	rm -rf dist
	npm run build