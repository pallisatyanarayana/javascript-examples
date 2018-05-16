var app=angular.module("sampleApp",[]);
app.controller('myController',['$scope','$http','$log',function($scope,$http,$log)
{
    $http({
        url:'http://localhost:9800/api/data',
        method:'GET'
    }).then(function(resp)
{
    $scope.emp=resp.data;
    $log.log(resp.data);
},
function(resp)
{
    $scope.emp=resp.data;
    $log.log(emp);
});
}]);