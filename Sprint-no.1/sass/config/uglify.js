'use strict';
module.exports = {
  "options": {
    "banner": "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
  },
  "build": {
    "src": "myproject/src/js/<%= pkg.name %>.js",
    "dest": "myproject/build/js/<%= pkg.name %>.min.js"
  }
}
