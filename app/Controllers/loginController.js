 app.controller('loginCtrl', function($scope, $http, $location, loginService) {
    $scope.loginError = true;
    $scope.errMsg = '';
   /* login*/
    $scope.login = function() { 
        $http.get('assets/json/login.json').success(function(data) {
            $scope.users = data.users;
            if($scope.Uname == data.users[0].name && $scope.password == data.users[0].password ){
                
                $location.path('/dashboard');
               
                
            }else{
                $scope.errMsg = 'invalid username or password';
                $scope.loginError = false;
            }
        }); 
    };
    /* contant list*/
    $scope.fetchcontacts1 = function(){    
        $http.get('assets/json/contactList.json')
		.success(function(data) {
            //alert("list");
            $scope.contlist = data.contacts;
            $location.path('/dashboard');
        })
		.error(function(data){
			alert(response.data.statusText);
			
		});
       
       
        
        
    }
});