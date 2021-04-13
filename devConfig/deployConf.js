// FTP hostnavn	linux163.unoeuro.com
// FTP port	21 (TLS mulig)
// FTP brugernavn	andersvisti.dk
// FTP adgangskode	Epx21Itk84
// Mappe til webfiler	/public_html/cantinatestsite

const deployConf = {
  user: "andersvisti.dk",
  // Password optional, prompted if none given
  password: "Epx21Itk84", // "pH5fzwDb9AGk",
  host: "linux163.unoeuro.com",
  port: 21,
  localRoot: "", // This is set in eleventy.js conf file // __dirname + "/local-folder",
  remoteRoot: "/public_html/cantinatestsite",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: [
    "*.php",
    "*.css",
    "*.js",
    "*.json",
    "*.html",
    "*.jpg",
    "*.jpeg",
    "*.gif",
    "*.png",
    "*.woff",
    "*.woff2",
    "*.ttf",
    "*.txt",
    "dist/*",
    ".*"
  ],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true
};

module.exports = deployConf;