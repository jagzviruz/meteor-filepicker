// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by filepicker.js.
import { name as packageName } from "meteor/filepicker";

// Write your tests here!
// Here is an example.
Tinytest.add('filepicker - example', function (test) {
  test.equal(packageName, "filepicker");
});
