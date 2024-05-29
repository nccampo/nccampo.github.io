const express = require('express');
const app = express();

//initialize and run the seerver using express
app.use(express.static('static_files'));
app.listen(3000, () => {
    console.log('Server started at Port 3000');
});