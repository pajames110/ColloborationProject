
console.log("Entered Register controller");

app.controller('RegisterController', ['$scope', 'fileUpload', function($scope,fileUpload){
    $scope.register = function(){
    	console.log("Inside Register Controller");
       var file = $scope.myFile;
       var name=$scope.name;
       var password=$scope.password;
       var mobile=$scope.mobile;
       
       console.log("name",name);
       console.log('file is ' );
       console.dir(file);
       var uploadUrl = "http://localhost:8080/CollaborationBackend/fileUpload";
       fileUpload.uploadFileToUrl(file,uploadUrl,name,password,mobile);
       $scope.message="You are sucessfully registered!!!!";
    };
 }]);

app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);

app.service('fileUpload', ['$http','$location', function ($http,$scope,$location) {
    this.uploadFileToUrl = function(file,uploadUrl,name,password,mobile){
       var fd = new FormData();
       fd.append('file', file);
       fd.append('name',name);
       fd.append('password',password);
       fd.append('mobile',mobile);
       
    console.log("fd:"+fd)
       $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
       })
    
       .success(function(){
    	   $scope.message="registered! you can login now!!";
    	    $scope.name="";
    	    $scope.password="";  
       })
       .error(function(){
       });
    }
 }]);


