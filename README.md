# tast

## Installation

```
$ npm install tast
```

## Usage

```javascript
var Tast = require('tast');

var keyboard = new Tast().listen();

if (Tast.down(32))
  console.log('Space is down!');
```