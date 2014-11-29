Ravelry = {};
// Request Ravelry credentials for the user
// @param options {optional} XXX support options.requestPermissions
// @param credentialRequestCompleteCallback {Function} Callback function to call on
//   completion. Takes one argument, credentialToken on success, or Error on
//   error.
Ravelry.requestCredential = function(options, credentialRequestCompleteCallback) {
  // support both (options, callback) and (callback).
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  }

  var config = ServiceConfiguration.configurations.findOne({service: 'ravelry'});

  if (!config) {
  console.log("no config");
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError("Service not configured"));
    return;
  }

  var credentialToken = Random.secret();
  // We need to keep credentialToken across the next two 'steps' so we're adding
  // a credentialToken parameter to the url and the callback url that we'll be returned
  // to by oauth provider

  var loginStyle = OAuth._loginStyle('twitter', config, options);

  // url to app, enters "step 1" as described in
  // packages/accounts-oauth1-helper/oauth1_server.js
  var loginPath = '_oauth/ravelry/?requestTokenAndRedirect=true'
        + '&state=' + OAuth._stateParam(loginStyle, credentialToken);

  var loginUrl = Meteor.absoluteUrl(loginPath);

  OAuth.launchLogin({
    loginService: "ravelry",
    loginStyle: loginStyle,
    loginUrl: loginUrl,
    credentialRequestCompleteCallback: credentialRequestCompleteCallback,
    credentialToken: credentialToken
  });
};

