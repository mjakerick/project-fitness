const app = angular.module('FitnessApp', []);

app.controller('MyController', ['$http', function($http){
  this.createLog = function(){
      $http({
        method:'POST',
        url: '/logs',
        data: {
            title: this.title,
            description: this.description
          }
      }).then(function(response){
          console.log(response);
      }, function(){
          console.log('error');
      });
  }

  
}])
