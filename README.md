# JPLB
JPLB  (JSON Property List Builder) takes any Javascript object and "flattens" it into an array of property names.

# Installation (Node.js)
Download and `put JPLB.js in your project`
``` javascript
// Load the module...
var JPLB = require('./JPLB');

// Create an instance passing in your object to the constructor...
var jplb = new JPLB(obj);

// Access the property list like so...
var properties = jplb.properties;

// See below for what the result would look like
```

# Example
``` javascript
// Load the module
var JPLB = require('./JPLB');

// The demo object it'll parse for you. Can be any JS object
var obj = {
  name: "John Doe",
  address: "1 Main Street",
  nicknames: {
    friends: "Johnny",
    coworkers: "Jo Doe",
    spouse: "Doe-ey"
  },
  birthday: "1 January 1970"
}

// Pass the object into JPLB
var jplb = new JPLB(obj);

// Output the properties
console.log(jplb.properties);

// Output looks like:
// [ 'name', 'address', 'nicknames.friends', 'nicknames.coworkers', 'nicknames.spouse', 'birthday' ]
