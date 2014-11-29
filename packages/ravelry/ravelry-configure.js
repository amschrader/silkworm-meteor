Template.configureLoginServiceDialogForRavelry.siteUrl = function() {
  return Meteor.absoluteUrl({replaceLocalhost: true});
};

Template.configureLoginServiceDialogForRavelry.fields = function() {
  return [
    {property: 'consumerKey', label: 'consumer_key'},
    {property: 'secret', label: 'consumer_secret'}
  ];
};