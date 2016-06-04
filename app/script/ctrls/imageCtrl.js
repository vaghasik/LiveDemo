bomApp.controller('imageCtrl', function($scope) {

    $scope.images = [
            {
                'imgId': 1,
                'img': 'app/img/piston-thumb.jpg',
                'alt': 'Piston'
            },
            {
                'imgId': 2,
                'img': 'app/img/gear-thumb.jpg',
                'alt': 'Gear'
            },
            {
                'imgId': 3,
                'img': 'app/img/piston-thumb.jpg',
                'alt': 'Piston'
            }
        ];
    $scope.selectedIndex = 0; /* first one set active by default */
    $scope.select= function(i) {
      $scope.selectedIndex=i;
    };
});