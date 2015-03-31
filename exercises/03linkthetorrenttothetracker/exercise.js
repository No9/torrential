var exercise = require('workshopper-exercise')()
var parseTorrent = require('parse-torrent')
var fs = require('fs')
var concat = require('concat-stream')


exercise.requireSubmission = false


exercise.addVerifyProcessor(function (cb) {

	if(!fs.existsSync('xyz-tracker.torrent')){
		this.emit("fail", "xyz.torrent does not exist please try the first step again.")
		cb(null, false)
		return
	}

	var instream = fs.createReadStream('xyz-tracker.torrent')
	var that = this	
	instream.pipe(concat(function (body) {
		try {
			var parsed = parseTorrent(body)
			that.emit("pass", "xyz-tracker.torrent is correctly formatted")
			cb(null, true)

		} catch (err) {
			that.emit("fail", "xyz-tracker.torrent is incorrectly formatted")
			cb(null, false)
		}
	}))
})

module.exports = exercise