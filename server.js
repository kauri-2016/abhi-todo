var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var data = require('./data')

var app = express()

var PORT = process.env.PORT || 3000

app.engine('hbs', hbs({
  extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.render('home', data)
})

app.listen(PORT, function () {
  console.log('Listening on port :', PORT);
})
