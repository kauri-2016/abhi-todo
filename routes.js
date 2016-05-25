var getJsObj = require('./getData')
var path = require('path')

module.exports = {
  home: home
}

var taskFile = path.join(__dirname, 'data.json')

function home(req, res) {
  getJsObj(taskFile, function (err, data) {
    if (!err) {
      res.render('home', data)
    }
  })
}
