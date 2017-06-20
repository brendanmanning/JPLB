// JPLB.js
// (c) 2017 Brendan Manning
// You can use this however you want without crediting me (although it would be much appreciated!)
// However if something goes wrong: it's not my fault and you can't sue me or make me change this software
// Please refer to the LICENSE.md file for more information

class JPLB {
  constructor(object) {

    // Save to a variable the programmer may access after init
    this.properties = this.buildPropertyList(object);
  }

  buildPropertyList(obj, path) {

    // Default to an empty path variable if none is given
    path = path || "";

    // Recursively added items may have a leading '.'  so, remove it
    if(path.startsWith('.')) {
      path = path.substring(1);
    }

    // Build an array of properties that looks like
    // obj.property.subproperty.idvalue
    var properties = [];

    // Loop over every property in the object
    for(var property in obj) {

      // Verify that it is not a prototype property
      if(obj.hasOwnProperty(property)) {

        // Get the value of the object
        var value = obj[property];

        // Check if the value is an object ( something in {} )
        // .. That would mean that we have to recurse into it
        if(typeof(value) == "object") {

          // Build a property list for the sub object
          var subproperties = this.buildPropertyList(value, path + "." + property);

          // Add them all to the array inside this loop
          for(var i = 0; i < subproperties.length; i++) {
            properties.push(subproperties[i]);
          }
        } else {

          // Add this property to the array using the dot separator (if a path exists - otherwise start with just the property name)
          if(path.length > 0) {
            properties.push(path + "." + property);
          } else {
            properties.push(property);
          }
        }
      }
    }

    return properties;
  }
}

module.exports = JPLB;
