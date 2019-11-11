install:
	npm install
start:
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js
	npx babel-node src/bin/brain-gcd.js
	npx babel-node src/bin/brain-progression.js
	npx babel-node src/bin/brain-prime.js
publish: 
	npm publish --dry-run
lint:
	npx eslint ./brain-even.js
	npx eslint ./brain-calc.js
	npx eslint ./brain-gcd.js
	npx eslint ./brain-progression.js
	npx eslint ./brain-prime.js
build:
	rm -rf dist
	npm run build