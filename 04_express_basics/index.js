const express = require('express');
const app = express();
const PORT = 3000;

const middleware = require('./middleware');
const router = require('./router');

app.use(middleware);

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
