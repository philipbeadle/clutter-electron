var terminal = require('child_process').spawn('bash');

terminal.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
  if(data.toString().indexOf('holochain') <0){
    console.log('holochain installed');
  }
});

terminal.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});

setTimeout(function() {
    console.log('Sending stdin to terminal');
    terminal.stdin.write('hcadmin -v\n');
    console.log('Ending terminal session');
    terminal.stdin.end();
}, 1000);
