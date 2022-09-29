const path = require("path")

//helper function to travel 
// Return the directory name of a path. Similar to the Unix dirname command.
module.exports = path.dirname(require.main.filename);
