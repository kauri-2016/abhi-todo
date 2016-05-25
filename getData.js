var fs = require('fs')

module.exports = function getJsObj(file, callback) {
  fs.readFile(file, function (err, buffer) {
    var json = buffer.toString()
    var obj = JSON.parse(json)
    callback(err, obj)
  })
}
