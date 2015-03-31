var exercise = require('workshopper-exercise')()
var which = require('which')

exercise.requireSubmission = false


exercise.addVerifyProcessor(function (cb) {

	try {
		which.sync('bittorrent-tracker')
		this.emit("pass", "bittorrent-tracker is installed")
		cb(null, true)

	} catch(err) {
		this.emit("fail", "bittorrent-tracker is not installed")
		cb(null, false)
	}
})

module.exports = exercise