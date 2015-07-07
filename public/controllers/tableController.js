controllers

  .controller('TableController', function($scope, $http, controllerDispatch){

    var s = $scope;
    controllerDispatch.setServicesToLocalScope(s);

    s.setupTableData = function(arr, secName){
      s.arr = arr;
      s.secName = secName;
    };

    s.getService = function(str){
      return s[str];
    };

    s.tableSort = 'name';
    s.tableSortReverse = true;
    s.sortIcon = "sort-down";
    s.tableOrder = function(prop){
        s.tableSortReverse = (s.tableSort === prop) ? !s.tableSortReverse : false;
        s.sortIcon = s.tableSortReverse ? "sort-down" : "sort-up";
        s.tableSort = prop;
    };


    s.defaultSelectButton = function(pOrS, thing, name){
      s[name][pOrS].currentSelection = thing;
      s.dispatch[pOrS].currentTab = name;
    };

  })



  .directive('tableFixedDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/tableFixed.html"
    };
  })

  .directive('tableFixedEditDir', function(){
    return {
      restrict: 'E',
      templateUrl: "../templates/tableFixedEdit.html"
    };
  });


