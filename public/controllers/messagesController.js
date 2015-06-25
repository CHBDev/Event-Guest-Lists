controllers

  .controller('MessagesController', function($scope, $http, controllerDispatch){
    var s = $scope;
    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "message", fileInput: {} };

    s.socket.on('message:update', function(data){

    });

  })


.directive('messagesDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/messages.html"
  }
})

.directive('messageDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/message.html"
  }
});
