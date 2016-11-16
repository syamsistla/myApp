 app.controller('landingCtrl', function($scope,$location) {
     
    $scope.goToLogin = function() {
       // alert ('hi');
        $location.path("/login");
        
    }
    
    $scope.goToRegisteration = function() {
        $location.path("/registration");
    }
});