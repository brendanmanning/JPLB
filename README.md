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

// Properties will look like this:
// [ 'property', 'property.subproperty', 'property.othersubproperty.reallynestedproperty', 'lastproperty']
```
