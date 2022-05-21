const express = require('express')
const cors = require('cors')
const path = require('path'); 
const app = express()
app.use(cors())
const axios = require('axios')
const individualController = require('./controllers/individual')
const resultController = require('./controllers/result')
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());

app.use(express.static(__dirname+'/public'));
app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
res.send("hello")
})
// app.get('/', function (req, res) {
 
//   res.send(html_content)
// })


app.use('/api', individualController)
app.use('/results', resultController)

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
    console.log(`http://localhost:${app.get("port")}`)
});

