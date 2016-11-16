
app.factory("loginService", function($http) {
  
  return {
    getLogin: function(uName, pWord) {
      $http.get('assets/json/login.json').success(function(data) {
          return  data.users[0];
          });
    }
  };
});

