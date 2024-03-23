# simple-express

Express with common settings and middlewares

```
npm i simple-express
```

Notice: `trust proxy` is enabled by default.

## Usage

```js
const express = require('simple-express')

// Use it as normal..
const app = express()
```

List of built-ins:

- `trust proxy` is enabled
- JSON spaces: `2`
- Header `x-powered-by` is disabled
- Header `ETag` is disabled
- Optional `cors` to restrict origins
- Body parser for text, JSON, and URL
- Cookie parser
- Logs

## License

MIT
