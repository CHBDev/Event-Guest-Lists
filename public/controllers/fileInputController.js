controllers

// .controller('FileInputController', function($scope, $http, socket, users, groups, events, lists, controllerDispatch){

// })

// .directive("dropzone", function() {
//     return {
//         restrict : "A",
//         link: function (scope, elem) {
//             elem.bind('drop', function(e) {
//                 e.stopPropagation();
//                 e.preventDefault();

//                 var files = e.dataTransfer.files;
//                 for (var i = 0, f; f = files[i]; i++) {
//                     var reader = new FileReader();
//                     reader.readAsArrayBuffer(f);

//                     reader.onload = (function(theFile) {
//                         return function(evt) {
//                             var newFile = { name : theFile.name,
//                                 type : theFile.type,
//                                 size : theFile.size,
//                                 lastModifiedDate : theFile.lastModifiedDate
//                             }

//                             scope.addfile(newFile);

//                         };
//                     })(f);
//                 }
//             });
//         }
//     }
// });


.controller('FileInputController', function ($scope) {
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;

    };

})

// .directive('onReadFile', function ($parse) {
//   return {
//     restrict: 'A',
//     scope: false,
//     link: function(scope, element, attrs) {
//             var fn = $parse(attrs.onReadFile);

//       element.on('change', function(onChangeEvent) {
//         var reader = new FileReader();

//         reader.onload = function(onLoadEvent) {
//           scope.$apply(function() {
//             fn(scope, {$fileContent:onLoadEvent.target.result});
//           });
//         };

//         reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
//       });
//     }
//   };
// })


.directive('onReadFile', function ($parse) {
  return {
    restrict: 'A',
    scope: {conSec: '=conSec', current: '=current'},
    link: function(scope, element, attrs) {

      console.log("ATTR", attrs);

      element.on('change', function(onChangeEvent) {

      var file = (onChangeEvent.srcElement || onChangeEvent.target).files[0];

       Papa.parse(file, {
          header: true,
          worker: true,

          complete: function(results) {
            console.log(scope.conSec);

            if(scope.conSec.name){
              scope.conSec.fileInput.err = results.err;
              scope.conSec.fileInput.data = results.data;
              scope.conSec.fileInput.meta = results.meta;

              //this will be the 'currentList', or 'currentGroup' past in, etc
              scope.current.currentList = {name: "Imported CSV", guests: scope.conSec.fileInput.data };
              scope.$apply();
            }else{
              console.log("ERR: attempting file parse without controller support");
            }
          }
        });

      });
    }
  };
})

.directive('fileInput', function(){
  return {
    restrict: 'E',
    scope: {conSec: '=conSec', current: '=current'},
    templateUrl: "../templates/fileInput.html"
  }
});