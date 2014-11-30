Ravelry = Ravelry || {};

urls = {
  requestToken: "https://www.ravelry.com/oauth/request_token",
  authorize: "https://www.ravelry.com/oauth/authorize",
  accessToken: "https://www.ravelry.com/oauth/access_token",
  authenticate: "https://www.ravelry.com/oauth/authorize"
};

Ravelry.whitelistedFields = ['id', 'username'];

Oauth.registerService('ravelry', 1, urls, function(oauthBinding) {
  var identity = oauthBinding.get('https://api.ravelry.com/current_user.json').data;

  var serviceData = {
    id: identity.user.id,
    screenName: identity.user.username,
    accessToken: OAuth.sealSecret(oauthBinding.accessToken),
    accessTokenSecret: OAuth.sealSecret(oauthBinding.accessTokenSecret)
  };

  return {
    serviceData: serviceData,
    options: {
      profile: identity.user
    }
  };
});

Ravelry.retrieveCredential = function(credentialToken) {
  return Oauth.retrieveCredential(credentialToken);
};