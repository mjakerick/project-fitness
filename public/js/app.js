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
        username: this.createUsername,
        password: this.createPassword
      }
    }).then(function(response){
      // console.log(response);
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
      // console.log(response);
      controller.indexOfLoginFormToShow = null;
      controller.getLog();
      controller.goApp();
    }, function(error){
      console.log(error);
    })
  }

  this.logOut = function(){
    $http({
      method:'DELETE',
      url:'/sessions'
    }).then(function(response){
      // console.log(response);
      controller.loggedInUsername = null;
    }, function(error){
      console.log(error);
    });
  }

  this.goApp = function(){
    $http({
      method:'GET',
      url:'/app'
    }).then(function(response){
      controller.loggedInUsername = response.data.username;
      // console.log(response.data._id);//user specific id
      controller.userId = response.data._id
    }, function(error){
      console.log(error);
    });
  }

  this.createLog = function(){
    $http({
      method:'POST',
      url: '/logs',
      data: {
        userId: controller.userId,
        type: this.type,
        title: this.title,
        description: this.description
      }
    }).then(function(response){
      controller.getLog()
      // controller.goApp();
      controller.type = null;
      controller.title = null;
      controller.description = null;
      // console.log(response);
    }, function(){
      console.log('error');
    });
  }

  this.getLog = function(){
    $http({
      method: 'GET',
      url: '/logs', // + this.userId,
    }).then(function(response) {
      controller.logs = response.data
      // console.log(response.data);
      // console.log(this.userId);
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

    // this.getLog()
}])
