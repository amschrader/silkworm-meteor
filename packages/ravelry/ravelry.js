RavelryApi = function() { 
  this.secret = Meteor.settings.ravelrySecret;
  this.key = Meteor.settings.ravelryKey;
}

RavelryApi.prototype.search = function() {
  return "hello!";
};
