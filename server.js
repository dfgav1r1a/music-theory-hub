const express = require('express');
const app = express();
const port = 3000;

exoress.use(express.static('public'));

app.listen(port , () => {
    console.log(`Application running in ${port}`);
});