# tast

## Installation

```
$ npm install tast
```

## Usage

```javascript
var Tast = require('tast');

var keyboard = new Tast().listen();

if (keyboard.down(32))
  console.log('Space is down!');
```