const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const options = {
    dotfiles: 'ignore',
    redirect: false
};

app.use('/', express.static(path.join(__dirname,'public')));

app.listen(port , () => {
    console.log(`Application running in ${port}`);
});