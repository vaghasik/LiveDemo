bomApp.controller('spendOverviewCtrl', function($scope) {

    $scope.items = [
            {
                'productName': 'Product Name',
                'bomName': 'BOM Name',
                'manufacturer1': 'Manufacturer 1',
                'amount1': '$4500',
                'supplier1': 'Supplier 1 (50%)',
                'supplier1amount': '$8000',
                'supplier2': 'Supplier 2 (50%)',
                'supplier2amount': '$7500',
            },
            {
            	'productName': 'Product Name',
                'bomName': 'BOM Name',
                'manufacturer1': 'Manufacturer 1',
                'amount1': '$4700',
                'supplier1': 'Supplier 1 (20%)',
                'supplier1amount': '$200',
                'supplier2': 'Supplier 2 (80%)',
                'supplier2amount': '$800',
            },
            {
            	'productName': 'Product Name',
                'bomName': 'BOM Name',
                'manufacturer1': 'Manufacturer 1',
                'amount1': '$4700',
                'supplier1': 'Supplier 1 (50%)',
                'supplier1amount': '$200',
                'supplier2': 'Supplier 2 (50%)',
                'supplier2amount': '$800',
            }
        ];
});