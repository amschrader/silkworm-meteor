if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var rav = new RavelryApi();
    console.log(rav)
  });
  
}