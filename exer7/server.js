const express = require('express');
//const mongoose = require('mongoose');
const app = express();

//await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.static('static_files'));
app.listen(3000, ()=> {
    console.log('Server started at Port 3000');
});