mkdir dist
../../node_modules/.bin/babel scripts/*.js -d dist -s false
../../node_modules/.bin/babel index.js -d dist -s false
cp ../../node_modules/jquery/jquery.min.js dist
cp -d ../images/* dist
cp -d ../fonts/* dist
cp ../../.tmp/demo-sys/index.css dist
cp ../../.tmp/demo-sys/prod-create.html dist
