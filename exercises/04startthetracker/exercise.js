var exercise = require('workshopper-exercise')()
var request = require('request')

exercise.requireSubmission = false


exercise.addVerifyProcessor(function (cb) {

 request({
			uri: "http://localhost:8000/scrape"
	}, function (err, res, body) {

	if(err) {
		this.emit("fail", "tracker is not running on port 8000")
		cb(null, false)
		return
	}
	if (res.statusCode == 200) {
		this.emit("pass", "tracker is running on port 8000")
		cb(null, true)
	}else{
		this.emit("fail", "tracker returned status " + res.statusCode)
		cb(null, false)
	}
	}.bind(this))
})

module.exports = exercise