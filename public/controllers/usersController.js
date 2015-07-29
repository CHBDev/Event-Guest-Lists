controllers

  .controller('UsersController', function($scope, $http, controllerDispatch){
    var s = $scope;

    controllerDispatch.setServicesToLocalScope(s);

    s.conSec = {name: "users", fileInput: {} };

    s.getArray = function(pOrS){
      //TODO need logic for which list here
      return s.users.cache.orgsUsers;
    };


    s.$on("primary", function(event, args){
      if(args.name === "messages"){
        //somehow tell dispatch what the html content should be
        // s.dispatch.currentPrimaryTabContent = "<users-primary>JOE AEOMEOE</users-primary>";
      }
    });

    s.$on("secondary", function(event, args){
      if(args.name === "messages"){
        // s.dispatch.currentSecondaryTabContent = "<users-secondary>JOE AWSOME</users-secondary>";
      }
    });

    s.socket.on('user:update', function(data){

    });

    s.socket.on('user:login:result', function(data){
      if(data.err){
        console.log("LOGIN FAILED");
      }else{
        console.log("LOGIN SUCCESS");
        s.users.currentUsername = s.attemptedName;
      }

    });

    s.socket.on('user:create:result', function(data){
      if(data.err){
        console.log("CREATE FAILED");
      }else{
        console.log("CREATE SUCCESS");
        //server handles sending login response on create also
      }
    });

  })

// .directive('usersPrimary', function(){
//   return {
//     restrict: 'E',
//     templateUrl: "../templates/users.html"
//   }
// })

.directive('userDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/user.html"
  };
})

.directive('usersDir', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/users.html"
  };
});

// .directive('messagesPrimary', function(){
//   return {
//     restrict: 'E',
//     templateUrl: "../templates/messages.html"
//   }
// })




// .directive('confirmPassword', function() {
//     return {
//         require: "ngModel",
//         scope: {
//           otherPassword: "=confirmPassword"
//         },

//         link: function(scope, element, attr, ngModel) {

//             ngModel.$validators.confirmPassword = function() {
//               console.log("loginOpen", attr.loginOpen);
//                 if(attr.loginOpen == false || attr.loginOpen == "false"){
//                   console.log("returning true for validate");
//                   return true;
//                 }

//                 console.log("test password since is open");

//                 console.log("pw", attr.loginPassword);
//                 console.log("cn", attr.loginConfirm);

//                 return attr.loginPassword == attr.loginConfirm;
//             };


//             scope.$watch('otherPassword', function() {
//                 ngModel.$validate();
//             });
//         }
//     }
// });






