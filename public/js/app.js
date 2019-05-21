const app = angular.module('FitnessApp', []);

app.controller('MyController', ['$http', function($http){
  const controller = this;
  this.indexOfCreateFormToShow = null;
  this.indexOfEditFormToShow = null;

  this.createUser = function(){
    $http({
      method:'POST',
      url:'/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
      console.log(response);
      controller.username = null;
      controller.password = null;
    }, function(error){
      console.log(error);
    })
  }

  this.logIn = function(){
    $http({
      method:'POST',
      url:'/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
      console.log(response);
      controller.username = null;
      controller.password = null;
      // controller.goApp();
    }, function(error){
      console.log(error);
    })
  }

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
      controller.type = null;
      controller.title = null;
      controller.description = null;
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
        type: this.updatedType,
        title: this.updatedTitle,
        description: this.updatedDescription
      }
    }).then(
      function(response){
        controller.getLog()
        controller.indexOfEditFormToShow = null;
        controller.updatedType = null;
        controller.updatedTitle = null;
        controller.updatedDescription = null;
      }, function(error){
        console.log('error');
      });
    }

    this.cancel = function(){
      controller.indexOfEditFormToShow = null;
    }

    this.getLog()
}])
