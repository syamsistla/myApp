app.controller('dashboardCtrl', ['$scope','$http','$modal','$location', function($scope, $http, $modal, $location) {
	
    $scope.fetchlistData = function(){
		
        $http.get('assets/json/contactList.json')
		.success(function(data) {
			//alert(data.contacts[0].firstname);
            $scope.contlist = data.contacts;
        })
		.error(function(data){
			
			alert(response.data.statusText);
			
		});   
        
    }
	
	$scope.goToContactDetails = function(){
		//alert(this.item.firstname);
		$location.path('/detailsPage');
	}
	
	/* 
	* delete item
	*/
	$scope.deleteItem = function(){	
		var tarr = [];
		var i;
		tarr = $scope.contlist;
		for (i = 0; i< tarr.length ; i++) {
			if(tarr[i].firstname == this.item.firstname){
			  break;
		  }
		}	
		tarr.splice(i, 1); 
		$scope.contlist = tarr;
		
	}
	// delete item end
	
	/*
	* create new modal opup
	*/
	$scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'createNew.html',
      controller: 'creatNewCtrl',
      size: size,
      resolve: {
      items: function () {
          return $scope.contlist;
        }
      }
    });
	/*
	* reset new result
	*/	
	modalInstance.result.then( function(arr){
	  //alert(obj.firstname);
		$scope.contlist = arr;
    });	
 
    };
	// create new modal opup end
	
	/*
	* Edit Item
	*/
	$scope.editItem = function(){
		
		//alert('edit item - '+this.item.firstname);
		$scope.eObject = this.item;
	    var modalInstance = $modal.open({
		templateUrl: 'editPopup.html',
		controller: 'editCtrl',
		size: 'sm',
		resolve: {
			items: function () {
			return $scope.eObject;
			}
		}
	    });
		
		/*
		* reset Edit result
		*/	
		modalInstance.result.then( function(obj){
			var tarr = [];
			var i;
			tarr = $scope.contlist;
			for (i = 0; i< tarr.length ; i++) {
				if(tarr[i].firstname == $scope.eObject.firstname){
				  break;
			  }
			}
			tarr[i] = obj;
			$scope.contlist = [];
			$scope.contlist = tarr;	

		});	
		
	};
	// Edit Item end
	
	
	/**************************************************
	** Details page functionality
	**************************************************/
	
	$scope.initDetails = function(){
		alert('initDetails');
	}
	//   Details page functionality end-
	
		
}]); //  dashboardCtrl end 

/*********************************************************************************
*  creatNew controller
*
***********************************************************************************/

app.controller('creatNewCtrl', function ($scope, $modalInstance, items) {
  $scope.contlist = items;
  $scope.ok = function () {
	  var obj = {};
	  obj.firstname = $scope.Fname;
	  obj.lastname =  $scope.Lname;
	  obj.email = $scope.email;
	  obj.phoneno = $scope.mno;
	  obj.address = $scope.address;
	  $scope.contlist.push(obj);
	  $modalInstance.close($scope.contlist);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});



/*********************************************************************************
*  Edit controller
*
***********************************************************************************/

app.controller('editCtrl', function ($scope, $modalInstance, items) {
	$scope.eObject = items;
	$scope.eFname = $scope.eObject.firstname;
	$scope.eLname = $scope.eObject.lastname;
	$scope.eEmail = $scope.eObject.email;
	$scope.eMno = $scope.eObject.phoneno;
	$scope.eAddress = $scope.eObject.address;
	
	$scope.ok = function () {
	  var obj = {};
	  obj.firstname = $scope.eFname;
	  obj.lastname =  $scope.eLname;
	  obj.email = $scope.eEmail;
	  obj.phoneno = $scope.eMno;
	  obj.address = $scope.eAddress;
	  $modalInstance.close(obj);
	};

	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
	};
});

