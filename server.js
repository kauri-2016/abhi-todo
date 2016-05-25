var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var app = express()

var PORT = process.env.PORT || 3000

app.engine('hbs', hbs({
  extname: 'hbs'
}))

app.listen(PORT, function () {
  console.log('Listening on port :', PORT);
})
