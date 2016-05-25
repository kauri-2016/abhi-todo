var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var getJsObj = require('./getData')

var app = express()

var PORT = process.env.PORT || 3000

app.engine('hbs', hbs({
  extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

var taskFile = path.join(__dirname, 'data.json')
app.get('/', function (req, res) {
  getJsObj(taskFile, function (err, data) {
    // console.log(data);
    if (!err) {
      res.render('home', data)
    }
  })
})

app.listen(PORT, function () {
  console.log('Listening on port :', PORT);
})
