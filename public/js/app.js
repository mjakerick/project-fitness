const app = angular.module('FitnessApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.indexOfEditFormToShow = null;

  this.createLog = function(){
    $http({
      method:'POST',
      url: '/logs',
      data: {
        type: this.type,
        title: this.title,
        description: this.description
      }
    }).then(function(response){
      controller.getLog()
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
    }, function(){
      console.log('error');
    })
  }

  this.updateLog = function(log){
    $http({
      method:'PUT',
      url: '/logs/' + log._id,
      data: {
        type: this.type,
        title: this.updatedTitle,
        description: this.updatedDescription
      }
    }).then(
      function(response){
        controller.getLog()
        controller.indexOfEditFormToShow = null;
      }, function(error){
        console.log('error');
      });
    }

    this.getLog()
}])
