# like-express

Express with common settings and middlewares

```
npm i like-express
```

## Usage

```js
const express = require('like-express')

// Use it like usual..
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
