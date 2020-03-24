
var LambdaForwarder = require("aws-lambda-ses-forwarder");

exports.handler = function(event, context, callback) {
  // See aws-lambda-ses-forwarder/index.js for all options.
  var overrides = {
    config: {
      fromEmail: "info@card-stack.co.uk",
      emailBucket: "cardstack-mailbox",
      forwardMapping: {
        "info@card-stack.com": [
          "cardstack.consulting@gmail.com",
        ]
      }
    }
  };
  LambdaForwarder.handler(event, context, callback, overrides);
};
