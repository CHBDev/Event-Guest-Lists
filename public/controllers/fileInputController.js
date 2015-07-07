controllers


.controller('FileInputController', function ($scope) {
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;

    };

})


//NOTE: not using current at this time
.directive('onReadFile', function ($parse) {
  return {
    restrict: 'A',
    scope: {conSec: '=conSec', current: '=current'},
    link: function(scope, element, attrs) {

      //console.log("ATTR", attrs);

      element.on('change', function(onChangeEvent) {

      var file = (onChangeEvent.srcElement || onChangeEvent.target).files[0];

       Papa.parse(file, {
          header: true,
          worker: true,
          skipEmptyLines: true,

          complete: function(results) {
            //console.log(scope.conSec);

            if(scope.conSec.name){
              scope.conSec.fileInput.err = results.err;
              scope.conSec.fileInput.data = results.data;
              scope.conSec.fileInput.meta = results.meta;

              //this will be the 'currentList', or 'currentGroup' past in, etc
              // scope.current.currentList =  scope.conSec.fileInput.data;
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
  };
});
