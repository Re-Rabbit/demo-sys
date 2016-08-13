build:
  ..\..\node_modules\.bin\babel scripts\*.js -d dist -s false
  ..\..\node_modules\.bin\babel index.js -d dist -s false
