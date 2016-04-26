var fs = require('fs');
var path = require('path');
var async = require('async');
var exec = require('child_process').exec;



var srcDir = path.resolve(process.cwd(), process.argv[2]);
var dstDir = path.resolve(process.cwd(), process.argv[3]);

var backgroundColor = '#ffffff';



var files = [];
scanDirectory();

var n = files.length;
var i = 0;

async.eachLimit(
	files,
	4,
	function (files, cb) {
		if (i % 1000 == 0) console.log('processing '+(100*i/n).toFixed(1)+'%');
		i++;
		exec(
			'gm convert '+files[0]+' -background "'+backgroundColor+'" -flatten -level 20,1.0,220 '+files[1],
			function (error, stdout, stderr) {
				if (error) console.error(error);
				cb()
			});
	},
	function () {
		console.log('finished');
	}
)

function scanDirectory() {

	// zoom levels;
	fs.readdirSync(srcDir).forEach(function (zName) {
		if (!/[0-9]+/.test(zName)) return;
		var zDirSrc = path.resolve(srcDir, zName)
		var zDirDst = path.resolve(dstDir, zName)
		var stat = fs.statSync(zDirSrc);
		if (!stat.isDirectory()) return;

		console.log('scan "'+zDirSrc+'"');

		var z = parseInt(zName, 10);
		var maxHeight = Math.pow(2, z)-1;
		
		// x values
		fs.readdirSync(zDirSrc).forEach(function (xName) {
			if (!/[0-9]+/.test(xName)) return;
			var xDirSrc = path.resolve(zDirSrc, xName)
			var xDirDst = path.resolve(zDirDst, xName)
			var stat = fs.statSync(xDirSrc);
			if (!stat.isDirectory()) return;
			ensureDir(xDirDst);
			
			// y values
			fs.readdirSync(xDirSrc).forEach(function (yName) {
				if (!/[0-9]+\.png/.test(yName)) return;
				var yFileSrc = path.resolve(xDirSrc, yName)
				var stat = fs.statSync(yFileSrc);
				if (stat.isDirectory()) return;

				var y = parseInt(yName, 10);
				var yFileDst = path.resolve(xDirDst, (maxHeight - y)+'.jpg');

				files.push([yFileSrc, yFileDst]);
			})
		})
	})
}


function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		ensureDir(path.dirname(dir));
		fs.mkdirSync(dir);
	}
}