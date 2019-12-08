const chokidar = require('chokidar');
const cp = require("child_process");

let index_process = cp.fork("./index.js");

chokidar.watch('.', {
	ignored: ['node_modules/*', '.git/*', ".idea/*"]
}).on("change", (filename, stat) => {
	index_process.kill();
	console.log(`${filename} has been changed and the app is restarting \n`);
	index_process = cp.fork("./index.js");
});

process.stdin.resume();

function exitHandler(options, exitCode) {
	index_process.kill();
	if (options.cleanup) console.log('clean');
	if (exitCode || exitCode === 0) console.log(exitCode);
	if (options.exit) process.exit();
}

process.on('exit', exitHandler.bind(null, {cleanup: true}));

process.on('SIGINT', exitHandler.bind(null, {exit: true}));

process.on('SIGUSR1', exitHandler.bind(null, {exit: true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit: true}));

process.on('uncaughtException', exitHandler.bind(null, {exit: true}));
