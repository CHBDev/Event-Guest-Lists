controllers

  .controller('MessagesController', function($scope, $http, controllerDispatch){
    var s = $scope;
    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "messages", fileInput: {} };

    s.socket.on('message:update', function(data){

    });

    s.messagesTableSort = 'name';
    s.messagesTableSortReverse = true;
    s.messagesTableOrder = function(prop){
        $scope.messagesTableSortReverse = ($scope.messagesTableSort === prop) ? !$scope.messagesTableSortReverse : false;
        $scope.messagesTableSort = prop;
    };


    s.getMessageArray = function(pOrS){
      var str = s.dispatch[pOrS].currentTab;

      return s.messages.cache[str + "Messages"];

    };

  })


.directive('messagesDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/messages.html"
  };
})

.directive('messageDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/message.html"
  };
});
