var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
var dConf = require('./devConfig/deployConf');

dConf.localRoot = __dirname + "/_site";
// console.log("config:", dConf); // dont show this publicly

// Deplpoy loggers:
ftpDeploy.on("uploading", function(data) {
  console.log((data.transferredFileCount + 1) + "/" + data.totalFilesCount + " - file: " + data.filename);
  // console.log(data.totalFilesCount); // total file count being transferred
  // console.log(data.transferredFileCount); // number of files transferred
  // console.log(data.filename); // partial path with filename being uploaded
});
// ftpDeploy.on("uploaded", function(data) { console.log(data); });
// ftpDeploy.on("log", function(data) { console.log(data); });
ftpDeploy.on("upload-error", function(data) {
  console.log(data.err); // data will also include filename, relativePath, and other goodies
});


// use with promises
ftpDeploy
  .deploy(dConf) // config)
  // .then(res => console.log("Uploading is finished!"))
  .then(res => {
    console.log(" ");
    console.log(' /$$   /$$           /$$                           /$$ /$$                           /$$          ');
    console.log('| $$  | $$          | $$                          | $$|__/                          |__/          ');
    console.log('| $$  | $$  /$$$$$$ | $$  /$$$$$$   /$$$$$$   /$$$$$$$ /$$ /$$$$$$$   /$$$$$$        /$$  /$$$$$$$');
    console.log('| $$  | $$ /$$__  $$| $$ /$$__  $$ |____  $$ /$$__  $$| $$| $$__  $$ /$$__  $$      | $$ /$$_____/');
    console.log('| $$  | $$| $$  | $$| $$| $$  | $$  /$$$$$$$| $$  | $$| $$| $$  | $$| $$  | $$      | $$|  $$$$$$ ');
    console.log('| $$  | $$| $$  | $$| $$| $$  | $$ /$$__  $$| $$  | $$| $$| $$  | $$| $$  | $$      | $$ |____  $$');
    console.log('|  $$$$$$/| $$$$$$$/| $$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$| $$  | $$|  $$$$$$$      | $$ /$$$$$$$/');
    console.log(' |______/ | $$____/ |__/ |______/  |_______/ |_______/|__/|__/  |__/ |____  $$      |__/|_______/ ');
    console.log('          | $$                                                       /$$  | $$                    ');
    console.log('          | $$                                                      |  $$$$$$/                    ');
    console.log('          |__/                                                       |______/                     ');
    console.log(' ');
    console.log('  /$$$$$$  /$$           /$$           /$$                       /$$    /$$');
    console.log(' /$$__  $$|__/          |__/          | $$                      | $$   | $$');
    console.log('| $$  |__/ /$$ /$$$$$$$  /$$  /$$$$$$$| $$$$$$$   /$$$$$$   /$$$$$$$   | $$');
    console.log('| $$$$    | $$| $$__  $$| $$ /$$_____/| $$__  $$ /$$__  $$ /$$__  $$   | $$');
    console.log('| $$_/    | $$| $$  | $$| $$|  $$$$$$ | $$  | $$| $$$$$$$$| $$  | $$   |__/');
    console.log('| $$      | $$| $$  | $$| $$ |____  $$| $$  | $$| $$_____/| $$  | $$       ');
    console.log('| $$      | $$| $$  | $$| $$ /$$$$$$$/| $$  | $$|  $$$$$$$|  $$$$$$$    /$$');
    console.log('|__/      |__/|__/  |__/|__/|_______/ |__/  |__/ |_______/ |_______/   |__/');
    console.log('                                                                           ');
    console.log('                                                                           ');
    console.log('                                                                           ');
  })
  .catch(err => console.log(err));

/*
// use with callback
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err);
    else console.log("finished:", res);
});
*/