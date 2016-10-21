# xtimer

Lightweight solution for generator based timers with timeouts and intervals

## Install

```
npm install xtimer
```

## Get started

This peace of code

```js
const timer = require("xtimer")

timer({
  timeout: 0,
  interval: 1000,
  callback: function* (...args) {
    console.log(...args)
  },
  args: [1, "second", { a: 1 }]
})
```

Will output into the console every second without timeout

```
1 'second' { a: 1 }
```

## Options

It's the object to pass into `timer` function

required | name | type | description | default
---: | :--- | :--- | :--- | :---
**yes** | `callback` | Any yieldable (`co` will recieve) | function to execute  |
no | `args` | `Array` | arguments to pass into `callback` | `[]`
no | `interval` | `Number` | time in `ms` between `callback` calls | `100`
no | `timeout` | `Number` | timeout before first call | `0`
