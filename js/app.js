window.chesskid = {};

chesskid.module = angular
                  .module('chesskid', [
                  	'ngRoute',
                  	'ngResource'
                  ]);
                  
chesskid.module
  .directive('holder', 
	  function() {
      return {
        link: function(scope , elements, attrs) {                            
        		
        		elements.attr("src", attrs.holder);
        	  Holder.run();
        		
      	}
      }
	})                  