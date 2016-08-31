mkdir dist
mkdir dist/images
mkdir dist/fonts
../../node_modules/.bin/babel scripts/*.js -d dist -s false
../../node_modules/.bin/babel prod-create.js -d dist -s false
../../node_modules/.bin/babel prod-category.js -d dist -s false
../../node_modules/.bin/babel prod-list.js -d dist -s false
../../node_modules/.bin/babel common-layout.js -d dist -s false
../../node_modules/.bin/babel demo-selectfield.js -d dist -s false
cp ../../node_modules/jquery/dist/jquery.min.js dist
cp -d ../images/* dist/images
cp -d ../fonts/* dist/fonts
cp ../../.tmp/demo-sys/index.css dist
cp ../../.tmp/demo-sys/prod-create.html dist
cp ../../.tmp/demo-sys/prod-category.html dist
cp ../../.tmp/demo-sys/prod-list.html dist
cp ../../.tmp/demo-sys/selectfield.html dist
