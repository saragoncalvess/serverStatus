let express = require('express');
let app = express();
const getStatus = require('./status');

//endpoint//
app.get('/system_status', function (req, res){
    if (getStatus() == 'ok') res.json({status: 'ok'}); 
     else if (getStatus() == 'error') res.status(500).json({status: 'error'});
});

app.listen(3001, function(){
    console.log('hellows 3001');
});