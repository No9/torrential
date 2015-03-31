var exercise = require('workshopper-exercise')()
var parseTorrent = require('parse-torrent')
var fs = require('fs')
var concat = require('concat-stream')


exercise.requireSubmission = false


exercise.addVerifyProcessor(function (cb) {

	if(fs.existsSync('./xyz/a.txt') && fs.existsSync('./xyz/b.txt')){
		this.emit("pass", "a.txt and b.txt exist in xyz folder the torrent is complete")
		cb(null, true)
		return
	}else{
		this.emit("fail", "a.txt and b.txt don't exist in xyz folder the torrent has not worked")
		cb(null, false)
		return
	}
})

module.exports = exercise