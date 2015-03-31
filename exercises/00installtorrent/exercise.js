var exercise = require('workshopper-exercise')()
var which = require('which')

exercise.requireSubmission = false


exercise.addVerifyProcessor(function (cb) {

	try {
		which.sync('torrent')
		this.emit("pass", "torrent is installed")
		cb(null, true)

	} catch(err) {
		this.emit("fail", "torrent is not installed")
		cb(null, false)
	}
})

module.exports = exercise