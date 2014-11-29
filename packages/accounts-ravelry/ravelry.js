Accounts.oauth.registerService('ravelry');

if (Meteor.isClient) {
  Meteor.loginWithRavelry = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Ravelry.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  var autopublishedFields = _.map(
    Ravelry.whitelistedFields.concat(['id', 'username']),
    function (subfield) { return 'services.ravelry.' + subfield; });

  Accounts.addAutopublishFields({
    forLoggedInUser: autopublishedFields,
    forOtherUsers: autopublishedFields
  });
}