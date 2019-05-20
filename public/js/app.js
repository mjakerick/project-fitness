const app = angular.module('FitnessApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.createLog = function(){
    $http({
      method:'POST',
      url: '/logs',
      data: {
        title: this.title,
        description: this.description
      }
    }).then(function(response){
      controller.getLog()
      console.log(response);
    }, function(){
      console.log('error');
    });
  }

  this.getLog = function(){
    $http({
      method: 'GET',
      url: '/logs'
    }).then(function(response) {
      controller.logs = response.data
    }, function(){
      console.log('error');
    })
  }

  this.deleteLog = id => {
    $http({
      method: 'DELETE',
      url: '/logs/' + id
    }).then(response => {
      this.getLog()
      console.log(response);
    }, function(){
      console.log('error');
    })
  }

  this.updateLog = function(log){
    $http({
      method:'PUT',
      url: '/logs/' + log._id,
      data: {
        title: this.updatedTitle,
        description: this.updatedDescription
      }
    }).then(
      function(response){
        controller.getLog()
        console.log(response);
      }, function(error){
        console.log('error');
      });
    }

    this.getLog()
}])
