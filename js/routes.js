chesskid.module
  .config(function($routeProvider){
      
      $routeProvider
  		.when('/', {
  			controller: 'home',
  			templateUrl: 'js/content/home.html'
  		})
  		.when('/learn', {
  	  		controller: 'learn',
  	  		templateUrl: 'js/content/learn.html'
  		})
  		.when('/play', {//:id
  			controller: 'play',
  			templateUrl: 'js/content/play.html'
  		})
  		.otherwise({
  	  		redirectTo:'/'
  		});
      
  })
  .run(function(){
    
     console.log("@init: chesskid");
      
  });