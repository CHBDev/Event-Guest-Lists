controllers

  .controller('UserController', function($scope, $http, socket, users, controllerDispatch){
    var s = $scope;

    s.users = users;

    s.loginFormData = {email: null, password: null, confirm: null};
    s.createUserOpen = false;

    s.toggleLoginCreate = function(){
      s.createUserOpen === false ? s.createUserOpen = true : s.createUserOpen = false;
    }

    s.login = function(form){
      console.log("client login");
      s.attemptedName = form.email;
      console.log("AN", s.attemptedName);
      //could do some client side checking
      socket.emit('user:login', form);
    }.bind(s, s.loginFormData);

    s.logout = function(){
      socket.emit('user:logout', {});
      s.users.currentUsername = null;
    };

    s.create = function(form){
      s.attemptedName = form.email;
      console.log('client create');
      socket.emit('user:create', form);
    }.bind(s, s.loginFormData);

    s.dispatch = controllerDispatch;

    s.test = "YAY";
    // $scope.test = "YAY";


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
    })

    socket.on('user:update', function(data){

    });

    socket.on('user:login:result', function(data){
      if(data.err){
        console.log("LOGIN FAILED");
      }else{
        console.log("LOGIN SUCCESS");
        s.users.currentUsername = s.attemptedName;
      }

    });

    socket.on('user:create:result', function(data){
      if(data.err){
        console.log("CREATE FAILED");
      }else{
        console.log("CREATE SUCCESS");
      }
    })

  })

.directive('usersPrimary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/users.html"
  }
})

.directive('usersSecondary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/users.html"
  }
})

.directive('messagesPrimary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/messages.html"
  }
})

.directive('messagesSecondary', function(){
  return {
    restrict: 'E',
    templateUrl: "../templates/messages.html"
  }
});

// .directive('contentItem', function ($compile, TemplateService) {
//     //...

//     var linker = function (scope, element, attrs) {




//             element.html(getTemplate(templates, scope.content.content_type));

//             $compile(element.contents())(scope);

//     };




