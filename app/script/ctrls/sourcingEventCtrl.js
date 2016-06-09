bomApp.controller('sourcingEventCtrl', function($scope) {

    $scope.events = [
            {
                'fileIcon': 'app/img/warning.png',
                'time': 'Apr 20 2016 10:00 am',
                'name': 'Supplier name 1',
                'status': 'returned',
                'quoteID': 'quote ID12344'
            },
            {
                'fileIcon': 'app/img/icn_rfx_RFI.gif',
                'time': 'Apr 18 2016 9:20 am',
                'name': 'Owner name',
                'status': 'published',
                'quoteID': 'quote ID12344'
            },
            {
                'fileIcon': 'app/img/icn_rfx_RFI.gif',
                'time': 'Apr 16 2016 9:20 am',
                'name': 'Owner name',
                'status': 'created',
                'quoteID': 'quote ID12344'
            },
            {
            	'fileIcon': 'app/img/error.png',
            	'time': 'Apr 16 2016 8:20 am',
            	'name': 'Owner name',
                'status': 'closed',
                'quoteID': 'quote ID12343'
            },{
                'fileIcon': 'app/img/warning.png',
                'time': 'Apr 20 2016 10:00 am',
                'name': 'Supplier name 1',
                'status': 'returned',
                'quoteID': 'quote ID12344'
            },
            {
                'fileIcon': 'app/img/icn_rfx_RFI.gif',
                'time': 'Apr 18 2016 9:20 am',
                'name': 'Owner name',
                'status': 'published',
                'quoteID': 'quote ID12344'
            },
            {
                'fileIcon': 'app/img/icn_rfx_RFI.gif',
                'time': 'Apr 16 2016 9:20 am',
                'name': 'Owner name',
                'status': 'created',
                'quoteID': 'quote ID12344'
            },
            {
            	'fileIcon': 'app/img/error.png',
            	'time': 'Apr 16 2016 8:20 am',
            	'name': 'Owner name',
                'status': 'closed',
                'quoteID': 'quote ID12343'
            }
        ];
    $scope.selectedIndex = 0; /* first one set active by default */
    $scope.select= function(i) {
      $scope.selectedIndex=i;
    };
});