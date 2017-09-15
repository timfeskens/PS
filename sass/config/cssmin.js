'use strict';
module.exports = {
  "target": {
    "files": [
      {
        "expand": true,
        "cwd": "myproject/build/css/",
        "src": [
          "*.css",
          "!*.min.css"
        ],
        "dest": "myproject/build/css/",
        "ext": ".min.css"
      }
    ]
  }
}