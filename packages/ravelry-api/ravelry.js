Ravelry = function(options) {
  this._url = "https://api.ravelry.com";
  this._version = "1";
  if (options) _.extend(this, options);
};

Ravelry.prototype._getUrl = function(url) {
  return [this._url, url].join('/');
};

Ravelry.prototype.get = function(url, params) {
  return this.call('GET', url, params);
};

Ravelry.prototype.post = function(url, params) {
  return this.call('POST', url, params);
};

Ravelry.prototype.call = function(method, url, params) {
  oauthBinding = this.getOauthBindingForCurrentUser();

  result = oauthBinding.call(method,
    this._getUrl(url),
    params
  );

  return result;
};

Ravelry.prototype.getOauthBinding = function() {
  var config = Accounts.loginServiceConfiguration.findOne({service: 'ravelry'});
  var urls = Accounts.ravelry.urls;
  return new OAuth1Binding(config, urls);
};

Ravelry.prototype.getOauthBindingForCurrentUser = function() {
  var oauthBinding = this.getOauthBinding();

  var user = Meteor.user();
  oauthBinding.accessToken = user.services.ravelry.accessToken;
  oauthBinding.accessTokenSecret = user.services.ravelry.accessTokenSecret;

  return oauthBinding;
};

Ravelry.prototype.userProfile = function() {
  return this.get('current-user.json');
};

Ravelry.prototype.getProjects = function() {
  var user = Meteor.user();
  
  if (user) {
    var username = user.profile.username;
    return this.get('projects/' + username + '/list.json');
  }

  return {};
};