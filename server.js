const http = require('http');
const si = require('systeminformation');
const path = require('path');
var express = require('express');
var server = express();


const port = 3000;

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));

  })

server.get('/api/osinfo', (req, res) => {
  const reqinfo = req.query.param
  
  si.processLoad(reqinfo).then((response) => { 
  res.send(response);
  });
 
});


  
server.listen(port, () => console.log(`Vulnurable Server listening at http://localhost:${port}`))

